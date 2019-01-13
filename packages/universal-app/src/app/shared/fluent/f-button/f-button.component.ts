import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, ViewChild, ElementRef, HostListener, Input, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { ANIMATION_DURATION } from './../../../layout/animations';
import { MouseService } from './../services/mouse.service';

@Component({
  selector: 'app-f-button',
  templateUrl: './f-button.component.html',
  styleUrls: ['./f-button.component.scss']
})
export class FButtonComponent implements OnInit, AfterViewInit {
  private subscriptions: Subscription[] = [];

  COMMON_LIGHT_SIZE = 514;

  @Input() subscribeTo: Observable<any>;
  @Input() wrapper: HTMLElement;
  @ViewChild('button') button: ElementRef<HTMLElement>;

  rendered = false;
  moseDetected = false;

  commonLight: number[];
  backgroundLight: number[];

  rect: ClientRect;
  height = 0;
  width = 0;
  left = 0;
  top = 0;

  constructor(
    private mouse: MouseService,
    @Inject(PLATFORM_ID) private platformId,
  ) { }

  ngAfterViewInit(): void {
    this.updateLightPosition();
  }

  ngOnInit() {
    this.subscriptions.push(
      this.backgroundLight$
        .subscribe(backgroundLight => this.backgroundLight = backgroundLight)
    );

    if (this.subscribeTo) {
      this.subscriptions.push(
        this.subscribeTo.subscribe(() => this.updateRect())
      );
    }

    setTimeout(() => this.updateRect(), ANIMATION_DURATION);
  }

  updateLightPosition() {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        const { offsetLeft, offsetTop } = this.button.nativeElement;

        const wrapperComputed = window.getComputedStyle(this.wrapper, null);
        const paddingLeft = Number.parseFloat(wrapperComputed.getPropertyValue('padding-left'));
        const paddingTop = Number.parseFloat(wrapperComputed.getPropertyValue('padding-top'));

        const {
          clientHeight: wrapperHeight,
          clientWidth: wrapperWidth,
          offsetTop: wrapperTop,
          offsetLeft: wrapperLeft
        } = this.wrapper;

        this.commonLight = [
          Math.round(wrapperWidth / 2) - 24 - (offsetLeft - (wrapperLeft + paddingLeft)),
          Math.round(wrapperHeight / 2) - 24 - (offsetTop - (wrapperTop + paddingTop)),
        ];
      }, 0);
    }
  }

  @HostListener('window:resize', ['$event'])
  private updateRect() {
    if (isPlatformBrowser(this.platformId)) {
      const { width, height, left, top } = this.button.nativeElement.getBoundingClientRect();

      this.width = width;
      this.height = height;
      this.left = left;
      this.top = top;
      this.rendered = true;
    }
  }

  private get backgroundLight$() {
    return this.mouse.coordinates$.pipe(
      tap(() => this.moseDetected = true),
      map(coords => [coords[0] - this.left, coords[1] - this.top])
    );
  }
}
