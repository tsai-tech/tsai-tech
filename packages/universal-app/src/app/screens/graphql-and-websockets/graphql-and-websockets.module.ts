import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { GraphqlAndWebsocketsComponent } from './graphql-and-websockets/graphql-and-websockets.component';


@NgModule({
  declarations: [GraphqlAndWebsocketsComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    RouterModule.forChild([
      {
        path: '',
        component: GraphqlAndWebsocketsComponent
      }
    ])
  ]
})
export class GraphqlAndWebsocketsModule { }
