import { Component, OnInit } from '@angular/core';
import { Sender, Type } from './../components/chat-message/chat-message.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '../../screens-style.scss']
})
export class HomeComponent implements OnInit {
  readonly Sender = Sender;
  readonly Type = Type;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      console.log('asdfasdf');
    }, 1000);
  }
}
