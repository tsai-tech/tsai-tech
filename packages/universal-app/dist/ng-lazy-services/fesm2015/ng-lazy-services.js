import { from, throwError } from 'rxjs';
import { NgModule, InjectionToken, Injectable, Injector, NgModuleFactoryLoader, Inject, defineInjectable, inject, INJECTOR } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const NgLazyServicesConfigToken = new InjectionToken('NgLazyServicesConfig');
class NgLazyServicesModule {
    /**
     * @param {?} config
     * @return {?}
     */
    static forRoot(config) {
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
NgLazyServicesModule.decorators = [
    { type: NgModule, args: [{
                imports: []
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const FACADE_SERVICE = new InjectionToken('FacadeService');
class NgLazyServicesLoaderService {
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
/** @nocollapse */ NgLazyServicesLoaderService.ngInjectableDef = defineInjectable({ factory: function NgLazyServicesLoaderService_Factory() { return new NgLazyServicesLoaderService(inject(INJECTOR), inject(NgModuleFactoryLoader), inject(NgLazyServicesConfigToken)); }, token: NgLazyServicesLoaderService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { FACADE_SERVICE, NgLazyServicesLoaderService, NgLazyServicesConfigToken, NgLazyServicesModule };

//# sourceMappingURL=ng-lazy-services.js.map