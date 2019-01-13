import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { NgLazyServicesModule } from 'ng-lazy-services';
import { DynamicModules } from './dynamic/dynamic-modules';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'app-id' }),
    NgLazyServicesModule.forRoot(DynamicModules),
    BrowserTransferStateModule,
    MatProgressSpinnerModule,
    AppRoutingModule,
    HttpClientModule,
  ]
})
export class AppModule { }
