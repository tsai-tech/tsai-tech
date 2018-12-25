import { Injectable } from '@angular/core';
import {
  Router,
  NavigationStart, NavigationCancel, NavigationEnd, NavigationError, GuardsCheckEnd, RouteConfigLoadStart
} from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

export enum RoutingStatus { Started, Guarded, Ended, Loading }

@Injectable({
  providedIn: 'root'
})
export class RoutingService {
  private _endRoutingTimer: any;
  private _routingStatus = new BehaviorSubject<RoutingStatus>(RoutingStatus.Ended);

  getRoutingStatus(): Observable<any> {
    return this._routingStatus.pipe(distinctUntilChanged());
  }

  constructor(
    private router: Router
  ) { }

  init(): void {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
          clearTimeout(this._endRoutingTimer);
          this._routingStatus.next(RoutingStatus.Started);
        } else if (event instanceof RouteConfigLoadStart) {
          this._routingStatus.next(RoutingStatus.Loading);
        } else if (event instanceof GuardsCheckEnd ) {
          this._routingStatus.next(RoutingStatus.Guarded);
        } else if (
          event instanceof NavigationEnd ||
          event instanceof NavigationCancel ||
          event instanceof NavigationError
        ) {
          this._endRoutingTimer = setTimeout(() => this._routingStatus.next(RoutingStatus.Ended), 500);
        }
      });
  }
}
