import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';

import { DataVisualizationComponent } from './data-visualization/data-visualization.component';

@NgModule({
  declarations: [DataVisualizationComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    RouterModule.forChild([
      {
        path: '',
        component: DataVisualizationComponent
      }
    ])
  ]
})
export class DataVisualizationModule { }
