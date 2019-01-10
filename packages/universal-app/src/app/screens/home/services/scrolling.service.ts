import { Injectable, ElementRef } from '@angular/core';
import { Observable, fromEvent, of } from 'rxjs';

@Injectable()
export class ScrollingService {
  private element: HTMLElement;

  get scroll$(): Observable<Event> {
    return this.element
      ? fromEvent(this.element, 'scroll')
      : of(null);
  }

  constructor() { }

  init(element: ElementRef<HTMLElement>): void {
    this.element = element.nativeElement;
  }
}
