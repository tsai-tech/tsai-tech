import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { ScrollingService } from '../services/scrolling.service';
import { ScenarioService } from '../services/scenario.service';
import { textsOfCommands } from './../services/scenario';
import { Sender, Type, ContentType, Commands } from '../types/enums';
import { History } from '../types/History';
import { NgScrollbar } from 'ngx-scrollbar';
import { Command } from 'selenium-webdriver';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '../../screens-style.scss']
})
export class HomeComponent implements OnInit {
  readonly Sender = Sender;
  readonly Type = Type;
  readonly ContentType = ContentType;
  readonly Commands = Commands;
  readonly textsOfCommands = textsOfCommands;

  @ViewChild(NgScrollbar) scrollbar: NgScrollbar;
  @ViewChild('section') private section: ElementRef<HTMLElement>;
  questions: any[] = [];

  get history(): History[] {
    return this.scenario.getHistory();
  }

  get scroll$() {
    return this.scrolling.scroll$;
  }

  constructor(
    private scrolling: ScrollingService,
    private scenario: ScenarioService
  ) { }

  ngOnInit() {
    this.scrolling.init(this.scrollbar);
    this.scenario.init();
  }

  onCommand(command: Commands, from: History) {
    this.scenario.command(command, from);
  }

  getWrapper(wrapper): HTMLElement {
    return wrapper.wrapper.nativeElement;
  }

  trackById(index, item: History): number {
    return index;
  }
}
