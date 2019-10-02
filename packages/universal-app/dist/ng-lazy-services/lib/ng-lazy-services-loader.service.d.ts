import { InjectionToken, Injector, NgModuleFactoryLoader } from '@angular/core';
import { Observable } from 'rxjs';
import { NgLazyServicesConfig } from './ng-lazy-services.module';
export declare const FACADE_SERVICE: InjectionToken<string>;
export declare class NgLazyServicesLoaderService {
    private injector;
    private loader;
    private config;
    constructor(injector: Injector, loader: NgModuleFactoryLoader, config: NgLazyServicesConfig);
    load<T>(key: string): Observable<T>;
    private moduleLoad;
    private moduleLoadMiddleware;
}
