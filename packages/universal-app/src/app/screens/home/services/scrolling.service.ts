import { Injectable } from '@angular/core';
import { Observable, of, from, fromEvent } from 'rxjs';
import { NgScrollbar } from 'ngx-scrollbar';


@Injectable()
export class ScrollingService {
  private scrollbar: NgScrollbar;

  get scroll$(): Observable<Event> {
    if (this.scrollbar && this.scrollbar.view) {
      return fromEvent(this.scrollbar.view, 'scroll');
    } else {
      return of(null);
    }
  }

  constructor() { }

  init(scrollbar: NgScrollbar): void {
    this.scrollbar = scrollbar;
  }

  /**
   * Call this method just before scenarioService.history changes
   */
  scrollChatIfNeed(): void {
    if (this.doesItNeedToScroll()) {
      this.scrollChat();
    }
  }

  private doesItNeedToScroll(): boolean {
    if (this.scrollbar && this.scrollbar.view) {
      const { scrollTop, clientHeight, scrollHeight } = this.scrollbar.view;

      return (scrollHeight - clientHeight) <= scrollTop;
    }
    return false;
  }

  scrollChat(): void {
    if (this.scrollbar && this.scrollbar.view) {
      Promise.resolve().then(() => {
        this.scrollbar.update();

        setTimeout(() => {
          const { clientHeight, scrollHeight, scrollTop } = this.scrollbar.view;
          const newScrollTop = scrollHeight - clientHeight;
          let top = scrollTop;

          if (newScrollTop > top) {
            requestAnimationFrame(() => {
              const diff = newScrollTop - top;
              top += diff > 20 ? diff / 1.5 : diff;
              this.scrollbar.scrollTo({ top });
              this.scrollChat();
            });
          }
        }, 0);
      });
    }
  }
}
