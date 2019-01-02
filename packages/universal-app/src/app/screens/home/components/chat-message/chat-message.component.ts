import { Component, OnInit, Input } from '@angular/core';

export enum Sender {
  Bot,
  User
}

export enum Type {
  Alone,
  First,
  Between,
  Last,
  Loading
}

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss']
})
export class ChatMessageComponent implements OnInit {
  readonly Sender = Sender;
  readonly Type = Type;

  @Input() sender: Sender;
  @Input() type: Type;
  @Input() welcome = false;

  get name(): string {
    return 'Mikhail';
  }

  get time(): string {
    return '18:11';
  }

  constructor() { }

  ngOnInit() {
  }
}
