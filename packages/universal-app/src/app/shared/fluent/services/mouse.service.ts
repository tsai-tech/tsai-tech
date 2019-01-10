import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

export const MEDIA_MAX_WIDTH = 480;

@Injectable()
export class MouseService {

  private coordinates: ReplaySubject<number[]>;
  private canUpdate = true;

  get coordinates$() {
    if (!this.coordinates) {
      this.init();
    }

    return this.coordinates.pipe(distinctUntilChanged());
  }

  private init(): void {
    this.coordinates = new ReplaySubject(1);
    this.coordinates.next([-1000, -1000]);

    if (window.innerWidth > MEDIA_MAX_WIDTH) {
      document.addEventListener('mousemove', (event) => {
        if (this.canUpdate) {
          this.canUpdate = false;
          requestAnimationFrame(() => {
            this.coordinates.next([event.x, event.y]);
            this.canUpdate = true;
          });
        }
      });
    }
  }

  constructor() { }
}
