import { Component, OnInit } from '@angular/core';

import { NgLazyServicesLoaderService } from 'ng-lazy-services';

import { D3Service } from 'src/app/dynamic/d3/service/d3.service';
import { DynamicModule } from 'src/app/dynamic/dynamic-modules';

@Component({
  selector: 'app-dnd-and-pwa',
  templateUrl: './dnd-and-pwa.component.html',
  styleUrls: ['./dnd-and-pwa.component.scss', '../../screens-style.scss']
})
export class DndAndPwaComponent implements OnInit {

  constructor(
    private loader: NgLazyServicesLoaderService
  ) { }

  ngOnInit() {
  }

  loadD3() {
    this.loader.load<D3Service>(DynamicModule.D3).subscribe((d3Service) => {
      // d3Service.init();
    });
  }

}
