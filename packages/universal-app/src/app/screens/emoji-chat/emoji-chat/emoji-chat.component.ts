import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-emoji-chat',
  templateUrl: './emoji-chat.component.html',
  styleUrls: ['../../screens-style.scss', './emoji-chat.component.scss']
})
export class EmojiChatComponent implements OnInit {
  @ViewChild('section') private section: ElementRef<Element>;
  @ViewChild('chat') private chat: ElementRef<HTMLCanvasElement>;
  @ViewChild('input') private input: ElementRef<HTMLInputElement>;

  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;

  private users = [];

  private pulseMe = -1;
  private pulseMeStart = true;

  constructor() { }

  focusInput(): void {
    this.input.nativeElement.focus();
  }

  ngOnInit() {
    this.canvas = this.chat.nativeElement;
    this.context = this.canvas.getContext('2d');

    // Add 100 users just for testing:
    for (let i = 0; i < 12; i++) {
      this.users[i] = {
        avatar: String.fromCodePoint(128512 + Math.floor(Math.random() * 55)),
        nickname: 'Nickname'
      };
    }

    this.canvasRender();
    this.focusInput();
  }

  private render() {
    const { width, height } = this.canvas;

    this.context.clearRect(0, 0, width, height);

    this.users.forEach((user) => {
      const { coords, iconSize, avatar, isMe } = user;

      if (isMe) {
        const radius = iconSize * .85 + this.pulseMe;

        this.context.beginPath();
        this.context.arc(coords.x + (iconSize * 0.68), coords.y - (iconSize * 0.33), radius, 0, 2 * Math.PI);
        this.context.strokeStyle = 'white';
        const dashWidth = iconSize * 0.7;
        const dashCount = 4;
        const C = Math.PI * 2 * radius;
        const dashSpace = (C - dashCount * dashWidth) / dashCount;
        this.context.setLineDash([dashWidth, dashSpace]);
        this.context.stroke();

        if (this.pulseMeStart) {
          this.pulseMe += 0.05;
        } else {
          this.pulseMe -= 0.05;
        }

        if (this.pulseMe > 1) {
          this.pulseMeStart = false;
        } else if (this.pulseMe < -1) {
          this.pulseMeStart = true;
        }
      }

      this.context.fillStyle = '#fff';
      this.context.font = `${iconSize}px icon`;
      this.context.fillText(avatar, coords.x, coords.y);
    });

    requestAnimationFrame(this.render.bind(this));
  }

  @HostListener('window:resize', ['$event'])
  private canvasRender() {
    this.calculateRandomPositions();

    requestAnimationFrame(this.render.bind(this));
  }

  private updateCanvasSize(): number[] {
    this.canvas.width = this.section.nativeElement.clientWidth;
    this.canvas.height = this.section.nativeElement.clientHeight;

    return [this.canvas.width, this.canvas.height];
  }

  private getColumnsAndRows(ratio, length) {
    let columns = 1;
    let rows = 1;

    while (columns * rows < length) {
      if (columns / rows === 1) {
        if (ratio < 1) {
          rows += 1;
        } else {
          columns += 1;
        }
      } else {
        if (columns / rows < ratio) {
          columns += 1;
        } else {
          rows += 1;
        }
      }
    }

    return [columns, rows];
  }

  private getStep(coord: 'x' | 'y', options: any) {
    const { width, height, columns, rows, padding, size } = options;

    let step: number;

    if (coord === 'x') {
      step = (width - (padding * 2) - size) / ((columns - 1) || columns);
    } else if (coord === 'y') {
      step = (height - (padding * 2) - size) / ((rows - 1) || rows);
    }

    return step;
  }

  private calculateRandomPositions() {
    const [width, height] = this.updateCanvasSize();
    const length = this.users.length;
    const ratio = width / height;

    const [columns, rows] = this.getColumnsAndRows(ratio, length);
    const padding = 20 + (height / rows) / 3;
    const size = (height - (padding * 2)) / rows / 3;

    const xStep = this.getStep('x', { width, height, columns, rows, padding, size });
    const yStep = this.getStep('y', { width, height, columns, rows, padding, size });

    let userId = 0;

    console.log({
      padding,
      size,
      height
    });

    for (let y = padding + (size / 2); y <= height - padding && userId < length; y += yStep) {
      for (let x = padding + (size / 2); x <= width - padding && userId < length; x += xStep) {
        const max = size * 1.7;
        const min = size * 0.7;
        const iconSize = Math.floor(Math.random() * (max - min)) + min;

        const coords = {
          x: x - (iconSize * 1.37 / 2),
          y: y + (iconSize * 0.7 / 2)
        };

        coords.x += Math.floor(Math.random() * (size / 5 * 4)) - size / 5 * 2;
        coords.y += Math.floor(Math.random() * (size / 5 * 4)) - size / 5 * 2;

        this.users[userId] = {
          ...this.users[userId],
          coords,
          iconSize,
          isMe: Boolean(userId === 2) // TODO
        };

        userId += 1;
      }
    }
  }
}
