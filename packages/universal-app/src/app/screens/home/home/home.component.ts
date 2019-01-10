import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';

import { ScrollingService } from '../services/scrolling.service';
import { ScenarioService } from '../services/scenario.service';
import { Sender, Type } from '../types/enums';
import { History } from '../types/History';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '../../screens-style.scss']
})
export class HomeComponent implements OnInit {
  readonly Sender = Sender;
  readonly Type = Type;

  @ViewChild('section') private section: ElementRef<HTMLElement>;
  questions: any[] = [];

  getWrapper(wrapper): HTMLElement {
    return wrapper.wrapper.nativeElement;
  }

  get history(): History[] {
    return this.scenario.getHistory();
  }

  constructor(
    private scrolling: ScrollingService,
    private scenario: ScenarioService
  ) { }

  trackById(index, item: History): number {
    return item.id;
  }

  ngOnInit() {
    this.scrolling.init(this.section);
    this.scenario.init();
  }
}
