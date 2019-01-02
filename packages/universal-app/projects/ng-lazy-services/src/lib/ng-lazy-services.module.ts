import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';

export interface NgLazyServicesConfig {
  [key: string]: string;
}

export const NgLazyServicesConfigToken = new InjectionToken<NgLazyServicesConfig>('NgLazyServicesConfig');

@NgModule({
  imports: [
  ]
})
export class NgLazyServicesModule {
  static forRoot(config: NgLazyServicesConfig): ModuleWithProviders {
    return {
      ngModule: NgLazyServicesModule,
      providers: [
        {
          provide: NgLazyServicesConfigToken,
          useValue: config
        }
      ]
    };
  }
}
