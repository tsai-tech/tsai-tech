import { Component, OnInit, ElementRef, ViewChild, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
// import * as webix from 'webix';

import { NgLazyServicesLoaderService } from 'ng-lazy-services';

import { D3Service } from 'src/app/dynamic/d3/service/d3.service';
import { DynamicModule } from 'src/app/dynamic/dynamic-modules';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-dnd-and-pwa',
  templateUrl: './dnd-and-pwa.component.html',
  styleUrls: ['./dnd-and-pwa.component.scss', '../../screens-style.scss']
})
export class DndAndPwaComponent implements OnInit, OnDestroy {
  @ViewChild('div') div: ElementRef;

  // private tree: webix.ui.datatable;

  constructor(
    private loader: NgLazyServicesLoaderService,
    @Inject(PLATFORM_ID) private platformId,
  ) {

  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initializeWebixTree();
    }
  }

  ngOnDestroy() {
    // if (this.tree) {
    //   this.tree.destructor();
    // }
  }

  loadD3() {
    this.loader.load<D3Service>(DynamicModule.D3).subscribe((d3Service) => {
      // d3Service.init();
    });
  }

  private initializeWebixTree(): void {
    // this.tree = <webix.ui.datatable> webix.ui({
    //   container: this.div.nativeElement,
    //   view: 'tree',
    //   select: true,
    //   multiselect: true,
    //   drag: true,
    //   height: 500,
    //   data: {
    //     id: 'root',
    //     value: 'Cars',
    //     open: true,
    //     data: [
    //       {
    //         id: '1',
    //         open: true,
    //         value: 'title 1',
    //         data: [
    //           { id: '1.1', value: 'title 1.1' },
    //           { id: '1.2', value: 'title 1.2' },
    //           { id: '1.3', value: 'title 1.3' }
    //         ]
    //       },
    //       {
    //         id: '2',
    //         value: 'title 2',
    //         open: true,
    //         data: [
    //           { id: '2.1', value: 'title 2.1' },
    //           {
    //             id: '2.2',
    //             value: 'title 2.2',
    //             data: [
    //               { id: '2.2.1', value: 'title 2.2.1' },
    //               { id: '2.2.2', value: 'title 2.2.2' },
    //               { id: '2.2.3', value: 'title 2.2.3' }
    //             ]
    //           }
    //         ]
    //       }
    //     ]
    //   }
    // });


    // this.tree.resize();

    // this.tree.attachEvent('onBeforeDrag', function (context) {
    //   if (this.getItem(context.target) && this.getItem(context.target).$count && this.getItem(context.target).open) {
    //     context.parent = context.target;
    //     context.index = 0;
    //   } else {
    //     context.index++;
    //   }
    // });

    // this.tree.attachEvent('onItemClick', (id, e, node) => {
    //   console.log(this.tree.getItem(id));
    //   const item = (this.tree as any).getNextSiblingId(id);

    //   console.log(item);
    // });
  }

}
