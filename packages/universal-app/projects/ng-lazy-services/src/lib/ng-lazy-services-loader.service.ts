import { Injectable, InjectionToken, Injector, NgModuleFactoryLoader, NgModuleFactory, Inject, NgModule } from '@angular/core';
import { Observable, from, throwError } from 'rxjs';

import { NgLazyServicesConfigToken, NgLazyServicesConfig } from './ng-lazy-services.module';

export const FACADE_SERVICE = new InjectionToken<string>('FacadeService');

@Injectable({
  providedIn: 'root'
})
export class NgLazyServicesLoaderService {
  constructor(
    private injector: Injector,
    private loader: NgModuleFactoryLoader,
    @Inject(NgLazyServicesConfigToken) private config: NgLazyServicesConfig
  ) { }

  load<T>(key: string): Observable<T> {
    if (this.config[key]) {
      return from(this.moduleLoad(this.config[key]));
    } else {
      return throwError(new Error(`Key '${key}' not found, check NgLazyServicesModule.forRoot() configuration`));
    }
  }

  private moduleLoad<T>(loadModuleStr): Promise<T> {
    return this.loader.load(loadModuleStr)
      .then((moduleFactory: NgModuleFactory<T>) => this.moduleLoadMiddleware<T>(moduleFactory));
  }

  private moduleLoadMiddleware<T>(moduleFactory: NgModuleFactory<T>): T {
    console.log(moduleFactory);
    const moduleRef = moduleFactory.create(this.injector);
    const facadeService = moduleRef.injector.get(FACADE_SERVICE) as unknown;

    return facadeService as T;
  }
}
