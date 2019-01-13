import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FButtonComponent } from './f-button/f-button.component';
import { MouseService } from './services/mouse.service';

@NgModule({
  declarations: [
    FButtonComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    MouseService
  ],
  exports: [
    FButtonComponent
  ]
})
export class FluentModule { }
