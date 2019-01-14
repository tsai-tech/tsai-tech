import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { map } from 'rxjs/operators';

import { layoutAnimations } from './animations';
import { RoutingService, RoutingStatus } from '../core/routing/routing.service';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: layoutAnimations
})
export class LayoutComponent implements OnInit {
  private readonly BACKGROUND_URL = '/assets/background.jpg';
  private routerAnimationCanPulse = false;

  enterAnimationState = 'hidden';
  backgroundPulse = false;
  backgroundUrl;

  constructor(
    @Inject(PLATFORM_ID) private platformId,
    private routingService: RoutingService,
  ) { }

  get isLoading() {
    return this.routingService.getRoutingStatus()
      .pipe(map(status => status === RoutingStatus.Loading));
  }

  ngOnInit() {
    Promise.resolve().then(() => this.initRouterAnimations());

    if (isPlatformBrowser(this.platformId)) {
      this.preloadBackgroundImage();
    } else {
      this.backgroundUrl = this.BACKGROUND_URL;
    }
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  private initRouterAnimations(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.enterAnimationState = 'visible';
    }

    this.routingService.getRoutingStatus()
      .subscribe((status) => {
        if (status === RoutingStatus.Ended) {
          if (!this.routerAnimationCanPulse) {
            this.routerAnimationCanPulse = true;
          } else {
            this.backgroundPulse = true;
            setTimeout(() => this.backgroundPulse = false, 150);
          }
        }
    });
  }

  private preloadBackgroundImage(): void {
    const image = new Image();

    image.src = this.BACKGROUND_URL;

    if (image.complete) {
      this.backgroundUrl = image.src;
    } else {
      image.addEventListener('load', () => this.backgroundUrl = image.src);
    }
  }

}
