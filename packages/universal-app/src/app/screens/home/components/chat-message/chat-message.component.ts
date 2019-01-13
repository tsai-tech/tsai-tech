import { Component, OnInit, Input, ViewChild, ElementRef, HostListener, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { trigger, style, transition, animate, query, animateChild } from '@angular/animations';
import { Subscription } from 'rxjs';

import { ScrollingService } from '../../services/scrolling.service';
import { Sender, Type } from '../../types/enums';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss'],
  animations: [
    trigger('animation', [
      transition(':enter', [
        query(':self', [
          style({ opacity: 0 }),
          animate(50, style({ opacity: 0 })),
          animate(150, style({ opacity: 1 })),
        ]),
        query('@contentAnimation', [
          animateChild()
        ]),
      ]),
      transition(':leave', animate(500, style({ opacity: 0 })))
    ]),
    trigger('contentAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.95) translateY(-6px)' }),
        animate(100, style({ opacity: 0, transform: 'scale(0.95) translateY(-6px)' })),
        animate(150, style({ opacity: 1, transform: 'scale(1.03) translateY(0px)' })),
        animate(150, style({ opacity: 1, transform: 'scale(1) translateY(0px)' }))
      ]),
      transition(':leave',
        animate(500, style({ opacity: 0 })))
    ])
  ]
})
export class ChatMessageComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  readonly Sender = Sender;
  readonly Type = Type;

  @ViewChild('wrapper') wrapper: ElementRef<HTMLElement>;
  @ViewChild('avatar') avatar: ElementRef<HTMLElement>;

  @Input() sender: Sender;
  @Input() type: Type;
  @Input() welcome = false;
  @Input() loading = false;
  @Input() messageForNextGroup = false;
  @Input() date: Date = new Date();
  @Input() isCommands = false;

  contentBackgroundPosition: number[];
  avatarBackgroundPosition: number[];

  get name(): string {
    return this.sender === Sender.Bot ? 'Mikhail Tsai' : 'You';
  }

  constructor(
    private scrolling: ScrollingService,
    @Inject(PLATFORM_ID) private platformId,
  ) { }

  ngOnInit() {
    Promise.resolve().then(() => this.updateBackgroundPosition());

    this.subscriptions.push(
      this.scrolling.scroll$
        .subscribe(() =>
          Promise.resolve().then(() =>
            this.updateBackgroundPosition()
          )
        )
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  @HostListener('window:resize', ['$event'])
  private updateBackgroundPosition() {
    if (isPlatformBrowser(this.platformId)) {
      const wrapper = this.wrapper.nativeElement.getBoundingClientRect();
      const avatar = this.avatar.nativeElement.getBoundingClientRect();

      const { innerWidth, innerHeight } = window;

      const BACKGROUND_WIDTH = 2400;
      const BACKGROUND_HEIGHT = 1200;

      this.contentBackgroundPosition = [
        0 - ((BACKGROUND_WIDTH - innerWidth) / 2) - wrapper.left,
        0 - ((BACKGROUND_HEIGHT - innerHeight) / 2) - wrapper.top
      ];

      this.avatarBackgroundPosition = [
        0 - ((BACKGROUND_WIDTH - innerWidth) / 2) - avatar.left,
        0 - ((BACKGROUND_HEIGHT - innerHeight) / 2) - avatar.top
      ];
    }
  }
}
