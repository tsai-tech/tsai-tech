import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { DndAndPwaComponent } from './dnd-and-pwa/dnd-and-pwa.component';

@NgModule({
  declarations: [DndAndPwaComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    RouterModule.forChild([
      {
        path: '',
        component: DndAndPwaComponent
      }
    ])
  ]
})
export class DndAndPwaModule { }
