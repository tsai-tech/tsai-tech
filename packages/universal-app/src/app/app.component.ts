import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';

import { RoutingService } from './core/routing/routing.service';
import { isPlatformBrowser } from '@angular/common';

// const STATE_KEY_APP = makeStateKey('app');

@Component({
  selector: 'app-root',
  template: '<app-layout></app-layout>'
})
export class AppComponent implements OnInit {
  pwaInstaller: any;

  constructor(
    @Inject(PLATFORM_ID) private platformId,
    private routingService: RoutingService,
  ) {}

  private initOnlyForBrowser(): void {
    window.addEventListener('beforeinstallprompt', (event) => {
      event.preventDefault();
      this.pwaInstaller = event;
      this.pwaInstaller.prompt();
    });
  }

  ngOnInit(): void {
    this.routingService.init();

    if (isPlatformBrowser(this.platformId)) {
      this.initOnlyForBrowser();
    }

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
