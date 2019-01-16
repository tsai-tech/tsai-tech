import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, Inject } from '@angular/core';

import { ScrollingService } from './scrolling.service';
import { History } from '../types/History';
import { getScenario, textsOfCommands } from './scenario';
import { Type, Sender, Commands, ContentType } from '../types/enums';

const MESSAGE_GROUP_DIFF = 1500;


@Injectable()
export class ScenarioService {
  private history: History[] = [];
  private counter = 1;

  constructor(
    private scrolling: ScrollingService,
    @Inject(PLATFORM_ID) private platformId,
  ) { }

  init(): void {
    if (this.history.length === 0) {
      this.newScenarioHistory(Commands.Welcome);
    }
  }

  getHistory(): History[] {
    return [...this.history];
  }

  command(command: Commands, from: History): void {
    const currentHistory = this.history.slice().reverse().find(item => !!(item));

    if (from === currentHistory) {
      this.scrolling.scrollChat();
      this.newScenarioHistory(command);

      from.date = new Date();
      from.contentType = ContentType.HTML;
      from.content = textsOfCommands[command];
    }
  }

  private newScenarioHistory(commandOrId: Commands | number) {
    const scenario = getScenario(commandOrId);

    if (scenario.sender === Sender.Bot) {
      this.newHistoryFromBot(scenario);
    } else {
      this.history.push(this.newHistory(scenario));
    }
  }

  private newHistoryFromBot(scenario): void {
    const link = this.startTyping(scenario);
    const {
      timeout = 0,
      startTimeout = 0,
      autoNext,
      ...convertedHistory
    } = scenario;

    setTimeout(() => {
      if (this.history.length === 1) {
        convertedHistory.welcome = true;
      }

      const history = this.newHistory(convertedHistory);

      this.endTyping(link, history, timeout);

      if (autoNext) {
        this.newScenarioHistory(history.id + 1);
      }
    }, timeout);
  }

  private startTyping({ id, startTimeout, timeout, isParent }: History): History {
    const previous = this.history.slice().reverse().find(item => !item.loading);
    const history: History = {
      id,
      uuid: this.counter++,
      sender: Sender.Bot,
      type: Type.Alone,
      loading: true
    };

    if (!isParent && previous && previous.sender === Sender.Bot) {
      history.parentUUID = previous.parentUUID || previous.uuid;
    }

    if (this.history.length === 0) {
      history.welcome = true;
    }

    if (startTimeout) {
      setTimeout(() => this.newLoading(history, previous, timeout), startTimeout);
    } else {
      this.newLoading(history, previous, timeout);
    }

    return history;
  }

  private newLoading(history: History, previous: History, timeout: number) {
    if (previous && history.sender === previous.sender && timeout <= MESSAGE_GROUP_DIFF) {
      this.changeHistoriesType(previous);
    } else if (!history.welcome) {
      history.messageForNextGroup = true;
    }

    this.scrolling.scrollChatIfNeed(history.parentUUID || history.uuid);

    this.history.push(history);
  }

  private endTyping(link: History, history: History, timeout: number) {
    const previous = this.history[this.history.indexOf(link) - 1];

    delete link.messageForNextGroup;
    delete link.loading;

    const parent = link.parentUUID || link.uuid;

    this.scrolling.scrollChatIfNeed(parent);

    Object.keys(history).forEach(key => link[key] = history[key]);

    if (previous && link.sender === previous.sender && timeout <= MESSAGE_GROUP_DIFF) {
      link.type = Type.Last;
    }
  }

  private newHistory(history: History): History {
    if (history.uuid) {
      history.uuid = this.counter++;
    }
    history.type = Type.Alone;
    history.date = new Date();

    return history;
  }

  private changeHistoriesType(previous: History): void {
    if (previous) {
      const type =
        previous.type === Type.First || previous.type === Type.Alone
          ? Type.First
          : Type.Between;

      setTimeout(() => previous.type = type, 300);
    }
  }
}
