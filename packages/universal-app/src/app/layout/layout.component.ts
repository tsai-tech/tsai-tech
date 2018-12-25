import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { map } from 'rxjs/operators';

import { layoutAnimations } from './animations';
import { RoutingService, RoutingStatus } from '../core/routing/routing.service';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [layoutAnimations]
})
export class LayoutComponent implements OnInit {

  constructor(
    private routingService: RoutingService
  ) { }

  get isLoading() {
    return this.routingService.getRoutingStatus()
      .pipe(map(status => status === RoutingStatus.Loading));
  }

  ngOnInit() {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
