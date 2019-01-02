import { Component, OnInit } from '@angular/core';
import { NgLazyServicesLoaderService } from 'ng-lazy-services';

import { DynamicModule } from 'src/app/dynamic/dynamic-modules';
import { D3Service } from 'src/app/dynamic/d3/service/d3.service';

@Component({
  selector: 'app-data-visualization',
  templateUrl: './data-visualization.component.html',
  styleUrls: ['../../screens-style.scss', './data-visualization.component.scss']
})
export class DataVisualizationComponent implements OnInit {
  constructor(
    private loader: NgLazyServicesLoaderService
  ) { }

  ngOnInit() {
    this.loader.load<D3Service>(DynamicModule.D3)
      .subscribe(d3Service => this.initD3Service(d3Service));
  }

  private initD3Service(d3Service): void {
    //
  }
}
