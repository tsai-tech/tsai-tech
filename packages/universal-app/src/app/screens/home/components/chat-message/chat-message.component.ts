import { Component, OnInit, Input, ViewChild, ElementRef, HostListener, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ScrollingService } from '../../services/scrolling.service';
import { Sender, Type } from '../../types/enums';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss']
})
export class ChatMessageComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  readonly Sender = Sender;
  readonly Type = Type;

  @ViewChild('wrapper') wrapper: ElementRef<HTMLElement>;
  @ViewChild('avatar') avatar: ElementRef<HTMLElement>;

  @Input() sender: Sender;
  @Input() type: Type;
  @Input() welcome = false;

  contentBackgroundPosition: number[];
  avatarBackgroundPosition: number[];

  get name(): string {
    return 'Mikhail';
  }

  get time(): string {
    return '18:11';
  }

  constructor(
    private scrolling: ScrollingService
  ) { }

  ngOnInit() {
    setTimeout(() => this.updateBackgroundPosition(), 0);

    this.subscriptions.push(
      this.scrolling.scroll$.subscribe(() => this.updateBackgroundPosition())
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  @HostListener('window:resize', ['$event'])
  private updateBackgroundPosition() {
    const wrapper = this.wrapper.nativeElement.getBoundingClientRect();
    const avatar = this.avatar.nativeElement.getBoundingClientRect();

    const { innerWidth, innerHeight } = window;

    const BACKGROUND_WIDTH = 2400;
    const BACKGROUND_HEIGHT = 1200;

    this.contentBackgroundPosition = [
      0 - ((BACKGROUND_WIDTH - innerWidth) / 2) - wrapper.left,
      0 - ((BACKGROUND_HEIGHT - innerHeight) / 2) - wrapper.top
    ];

    this.avatarBackgroundPosition = [
      0 - ((BACKGROUND_WIDTH - innerWidth) / 2) - avatar.left,
      0 - ((BACKGROUND_HEIGHT - innerHeight) / 2) - avatar.top
    ];
  }
}
