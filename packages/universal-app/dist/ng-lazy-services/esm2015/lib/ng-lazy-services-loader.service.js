/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, InjectionToken, Injector, NgModuleFactoryLoader, Inject } from '@angular/core';
import { from, throwError } from 'rxjs';
import { NgLazyServicesConfigToken } from './ng-lazy-services.module';
import * as i0 from "@angular/core";
import * as i1 from "./ng-lazy-services.module";
/** @type {?} */
export const FACADE_SERVICE = new InjectionToken('FacadeService');
export class NgLazyServicesLoaderService {
    /**
     * @param {?} injector
     * @param {?} loader
     * @param {?} config
     */
    constructor(injector, loader, config) {
        this.injector = injector;
        this.loader = loader;
        this.config = config;
    }
    /**
     * @template T
     * @param {?} key
     * @return {?}
     */
    load(key) {
        if (this.config[key]) {
            return from(this.moduleLoad(this.config[key]));
        }
        else {
            return throwError(new Error(`Key '${key}' not found, check NgLazyServicesModule.forRoot() configuration`));
        }
    }
    /**
     * @private
     * @template T
     * @param {?} loadModuleStr
     * @return {?}
     */
    moduleLoad(loadModuleStr) {
        return this.loader.load(loadModuleStr)
            .then((moduleFactory) => this.moduleLoadMiddleware(moduleFactory));
    }
    /**
     * @private
     * @template T
     * @param {?} moduleFactory
     * @return {?}
     */
    moduleLoadMiddleware(moduleFactory) {
        console.log(moduleFactory);
        /** @type {?} */
        const moduleRef = moduleFactory.create(this.injector);
        /** @type {?} */
        const facadeService = (/** @type {?} */ (moduleRef.injector.get(FACADE_SERVICE)));
        return (/** @type {?} */ (facadeService));
    }
}
NgLazyServicesLoaderService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NgLazyServicesLoaderService.ctorParameters = () => [
    { type: Injector },
    { type: NgModuleFactoryLoader },
    { type: undefined, decorators: [{ type: Inject, args: [NgLazyServicesConfigToken,] }] }
];
/** @nocollapse */ NgLazyServicesLoaderService.ngInjectableDef = i0.defineInjectable({ factory: function NgLazyServicesLoaderService_Factory() { return new NgLazyServicesLoaderService(i0.inject(i0.INJECTOR), i0.inject(i0.NgModuleFactoryLoader), i0.inject(i1.NgLazyServicesConfigToken)); }, token: NgLazyServicesLoaderService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgLazyServicesLoaderService.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    NgLazyServicesLoaderService.prototype.loader;
    /**
     * @type {?}
     * @private
     */
    NgLazyServicesLoaderService.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctbGF6eS1zZXJ2aWNlcy1sb2FkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWxhenktc2VydmljZXMvIiwic291cmNlcyI6WyJsaWIvbmctbGF6eS1zZXJ2aWNlcy1sb2FkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLHFCQUFxQixFQUFtQixNQUFNLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDL0gsT0FBTyxFQUFjLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFcEQsT0FBTyxFQUFFLHlCQUF5QixFQUF3QixNQUFNLDJCQUEyQixDQUFDOzs7O0FBRTVGLE1BQU0sT0FBTyxjQUFjLEdBQUcsSUFBSSxjQUFjLENBQVMsZUFBZSxDQUFDO0FBS3pFLE1BQU0sT0FBTywyQkFBMkI7Ozs7OztJQUN0QyxZQUNVLFFBQWtCLEVBQ2xCLE1BQTZCLEVBQ00sTUFBNEI7UUFGL0QsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixXQUFNLEdBQU4sTUFBTSxDQUF1QjtRQUNNLFdBQU0sR0FBTixNQUFNLENBQXNCO0lBQ3JFLENBQUM7Ozs7OztJQUVMLElBQUksQ0FBSSxHQUFXO1FBQ2pCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNwQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2hEO2FBQU07WUFDTCxPQUFPLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxRQUFRLEdBQUcsaUVBQWlFLENBQUMsQ0FBQyxDQUFDO1NBQzVHO0lBQ0gsQ0FBQzs7Ozs7OztJQUVPLFVBQVUsQ0FBSSxhQUFhO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO2FBQ25DLElBQUksQ0FBQyxDQUFDLGFBQWlDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBSSxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQzlGLENBQUM7Ozs7Ozs7SUFFTyxvQkFBb0IsQ0FBSSxhQUFpQztRQUMvRCxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDOztjQUNyQixTQUFTLEdBQUcsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDOztjQUMvQyxhQUFhLEdBQUcsbUJBQUEsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEVBQVc7UUFFdkUsT0FBTyxtQkFBQSxhQUFhLEVBQUssQ0FBQztJQUM1QixDQUFDOzs7WUE3QkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBVG9DLFFBQVE7WUFBRSxxQkFBcUI7NENBYy9ELE1BQU0sU0FBQyx5QkFBeUI7Ozs7Ozs7O0lBRmpDLCtDQUEwQjs7Ozs7SUFDMUIsNkNBQXFDOzs7OztJQUNyQyw2Q0FBdUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3Rpb25Ub2tlbiwgSW5qZWN0b3IsIE5nTW9kdWxlRmFjdG9yeUxvYWRlciwgTmdNb2R1bGVGYWN0b3J5LCBJbmplY3QsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBmcm9tLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IE5nTGF6eVNlcnZpY2VzQ29uZmlnVG9rZW4sIE5nTGF6eVNlcnZpY2VzQ29uZmlnIH0gZnJvbSAnLi9uZy1sYXp5LXNlcnZpY2VzLm1vZHVsZSc7XG5cbmV4cG9ydCBjb25zdCBGQUNBREVfU0VSVklDRSA9IG5ldyBJbmplY3Rpb25Ub2tlbjxzdHJpbmc+KCdGYWNhZGVTZXJ2aWNlJyk7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5nTGF6eVNlcnZpY2VzTG9hZGVyU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgbG9hZGVyOiBOZ01vZHVsZUZhY3RvcnlMb2FkZXIsXG4gICAgQEluamVjdChOZ0xhenlTZXJ2aWNlc0NvbmZpZ1Rva2VuKSBwcml2YXRlIGNvbmZpZzogTmdMYXp5U2VydmljZXNDb25maWdcbiAgKSB7IH1cblxuICBsb2FkPFQ+KGtleTogc3RyaW5nKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgaWYgKHRoaXMuY29uZmlnW2tleV0pIHtcbiAgICAgIHJldHVybiBmcm9tKHRoaXMubW9kdWxlTG9hZCh0aGlzLmNvbmZpZ1trZXldKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aHJvd0Vycm9yKG5ldyBFcnJvcihgS2V5ICcke2tleX0nIG5vdCBmb3VuZCwgY2hlY2sgTmdMYXp5U2VydmljZXNNb2R1bGUuZm9yUm9vdCgpIGNvbmZpZ3VyYXRpb25gKSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBtb2R1bGVMb2FkPFQ+KGxvYWRNb2R1bGVTdHIpOiBQcm9taXNlPFQ+IHtcbiAgICByZXR1cm4gdGhpcy5sb2FkZXIubG9hZChsb2FkTW9kdWxlU3RyKVxuICAgICAgLnRoZW4oKG1vZHVsZUZhY3Rvcnk6IE5nTW9kdWxlRmFjdG9yeTxUPikgPT4gdGhpcy5tb2R1bGVMb2FkTWlkZGxld2FyZTxUPihtb2R1bGVGYWN0b3J5KSk7XG4gIH1cblxuICBwcml2YXRlIG1vZHVsZUxvYWRNaWRkbGV3YXJlPFQ+KG1vZHVsZUZhY3Rvcnk6IE5nTW9kdWxlRmFjdG9yeTxUPik6IFQge1xuICAgIGNvbnNvbGUubG9nKG1vZHVsZUZhY3RvcnkpO1xuICAgIGNvbnN0IG1vZHVsZVJlZiA9IG1vZHVsZUZhY3RvcnkuY3JlYXRlKHRoaXMuaW5qZWN0b3IpO1xuICAgIGNvbnN0IGZhY2FkZVNlcnZpY2UgPSBtb2R1bGVSZWYuaW5qZWN0b3IuZ2V0KEZBQ0FERV9TRVJWSUNFKSBhcyB1bmtub3duO1xuXG4gICAgcmV0dXJuIGZhY2FkZVNlcnZpY2UgYXMgVDtcbiAgfVxufVxuIl19