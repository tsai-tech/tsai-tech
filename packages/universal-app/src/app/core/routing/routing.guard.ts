import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

import { RoutingService, RoutingStatus } from './routing.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoutingGuard implements CanActivate, CanDeactivate<any> {
  constructor(private routingService: RoutingService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.routingService.getRoutingStatus().pipe(map(status => status !== RoutingStatus.Guarded));
  }

  canDeactivate() {
    return this.routingService.getRoutingStatus().pipe(map(status => status !== RoutingStatus.Guarded));
  }
}
