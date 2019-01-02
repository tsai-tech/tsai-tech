import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FACADE_SERVICE } from 'ng-lazy-services';

import { D3Service } from './service/d3.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: FACADE_SERVICE,
      useClass: D3Service
    }
  ]
})
export class D3Module { }
