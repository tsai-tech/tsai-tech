import { ModuleWithProviders, InjectionToken } from '@angular/core';
export interface NgLazyServicesConfig {
    [key: string]: string;
}
export declare const NgLazyServicesConfigToken: InjectionToken<NgLazyServicesConfig>;
export declare class NgLazyServicesModule {
    static forRoot(config: NgLazyServicesConfig): ModuleWithProviders;
}
