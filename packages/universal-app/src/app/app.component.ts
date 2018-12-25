import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationCancel, NavigationEnd, NavigationError } from '@angular/router';
import { TransferState, makeStateKey } from '@angular/platform-browser';

import { RoutingService } from './core/routing/routing.service';

// const STATE_KEY_APP = makeStateKey('app');

@Component({
  selector: 'app-root',
  template: '<app-layout></app-layout>'
})
export class AppComponent implements OnInit {
  constructor(
    private routingService: RoutingService
  ) {
  }

  ngOnInit(): void {
    this.routingService.init();
    // this.title = this.state.get(STATE_KEY_APP, this.DEFAULT_TITLE);
    // console.log('after 1-th get:', this.state.get(STATE_KEY_APP, '----'));

    // if (this.title === this.DEFAULT_TITLE) {
    //   this.http.get('https://jsonplaceholder.typicode.com/todos/1')
    //     .subscribe((result: any) => {
    //       this.title = result.title;
    //       this.state.set(STATE_KEY_APP, result.title);
    //       console.log('after set:', this.state.get(STATE_KEY_APP, '----'));
    //     });
    // }
  }
}
