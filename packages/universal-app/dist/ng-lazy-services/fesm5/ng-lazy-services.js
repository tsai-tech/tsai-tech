import { from, throwError } from 'rxjs';
import { NgModule, InjectionToken, Injectable, Injector, NgModuleFactoryLoader, Inject, defineInjectable, inject, INJECTOR } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var NgLazyServicesConfigToken = new InjectionToken('NgLazyServicesConfig');
var NgLazyServicesModule = /** @class */ (function () {
    function NgLazyServicesModule() {
    }
    /**
     * @param {?} config
     * @return {?}
     */
    NgLazyServicesModule.forRoot = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: NgLazyServicesModule,
            providers: [
                {
                    provide: NgLazyServicesConfigToken,
                    useValue: config
                }
            ]
        };
    };
    NgLazyServicesModule.decorators = [
        { type: NgModule, args: [{
                    imports: []
                },] }
    ];
    return NgLazyServicesModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var FACADE_SERVICE = new InjectionToken('FacadeService');
var NgLazyServicesLoaderService = /** @class */ (function () {
    function NgLazyServicesLoaderService(injector, loader, config) {
        this.injector = injector;
        this.loader = loader;
        this.config = config;
    }
    /**
     * @template T
     * @param {?} key
     * @return {?}
     */
    NgLazyServicesLoaderService.prototype.load = /**
     * @template T
     * @param {?} key
     * @return {?}
     */
    function (key) {
        if (this.config[key]) {
            return from(this.moduleLoad(this.config[key]));
        }
        else {
            return throwError(new Error("Key '" + key + "' not found, check NgLazyServicesModule.forRoot() configuration"));
        }
    };
    /**
     * @private
     * @template T
     * @param {?} loadModuleStr
     * @return {?}
     */
    NgLazyServicesLoaderService.prototype.moduleLoad = /**
     * @private
     * @template T
     * @param {?} loadModuleStr
     * @return {?}
     */
    function (loadModuleStr) {
        var _this = this;
        return this.loader.load(loadModuleStr)
            .then(function (moduleFactory) { return _this.moduleLoadMiddleware(moduleFactory); });
    };
    /**
     * @private
     * @template T
     * @param {?} moduleFactory
     * @return {?}
     */
    NgLazyServicesLoaderService.prototype.moduleLoadMiddleware = /**
     * @private
     * @template T
     * @param {?} moduleFactory
     * @return {?}
     */
    function (moduleFactory) {
        console.log(moduleFactory);
        /** @type {?} */
        var moduleRef = moduleFactory.create(this.injector);
        /** @type {?} */
        var facadeService = (/** @type {?} */ (moduleRef.injector.get(FACADE_SERVICE)));
        return (/** @type {?} */ (facadeService));
    };
    NgLazyServicesLoaderService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NgLazyServicesLoaderService.ctorParameters = function () { return [
        { type: Injector },
        { type: NgModuleFactoryLoader },
        { type: undefined, decorators: [{ type: Inject, args: [NgLazyServicesConfigToken,] }] }
    ]; };
    /** @nocollapse */ NgLazyServicesLoaderService.ngInjectableDef = defineInjectable({ factory: function NgLazyServicesLoaderService_Factory() { return new NgLazyServicesLoaderService(inject(INJECTOR), inject(NgModuleFactoryLoader), inject(NgLazyServicesConfigToken)); }, token: NgLazyServicesLoaderService, providedIn: "root" });
    return NgLazyServicesLoaderService;
}());

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