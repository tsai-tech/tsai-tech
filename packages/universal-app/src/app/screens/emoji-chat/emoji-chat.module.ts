import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';

import { EmojiChatComponent } from './emoji-chat/emoji-chat.component';

@NgModule({
  declarations: [EmojiChatComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    RouterModule.forChild([
      {
        path: '',
        component: EmojiChatComponent
      }
    ])
  ]
})
export class EmojiChatModule { }
