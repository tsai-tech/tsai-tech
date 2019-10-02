(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ng-lazy-services', ['exports', 'rxjs', '@angular/core'], factory) :
    (factory((global['ng-lazy-services'] = {}),global.rxjs,global.ng.core));
}(this, (function (exports,rxjs,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var NgLazyServicesConfigToken = new i0.InjectionToken('NgLazyServicesConfig');
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
            { type: i0.NgModule, args: [{
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
    var FACADE_SERVICE = new i0.InjectionToken('FacadeService');
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
                    return rxjs.from(this.moduleLoad(this.config[key]));
                }
                else {
                    return rxjs.throwError(new Error("Key '" + key + "' not found, check NgLazyServicesModule.forRoot() configuration"));
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
                var facadeService = ( /** @type {?} */(moduleRef.injector.get(FACADE_SERVICE)));
                return ( /** @type {?} */(facadeService));
            };
        NgLazyServicesLoaderService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        NgLazyServicesLoaderService.ctorParameters = function () {
            return [
                { type: i0.Injector },
                { type: i0.NgModuleFactoryLoader },
                { type: undefined, decorators: [{ type: i0.Inject, args: [NgLazyServicesConfigToken,] }] }
            ];
        };
        /** @nocollapse */ NgLazyServicesLoaderService.ngInjectableDef = i0.defineInjectable({ factory: function NgLazyServicesLoaderService_Factory() { return new NgLazyServicesLoaderService(i0.inject(i0.INJECTOR), i0.inject(i0.NgModuleFactoryLoader), i0.inject(NgLazyServicesConfigToken)); }, token: NgLazyServicesLoaderService, providedIn: "root" });
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

    exports.FACADE_SERVICE = FACADE_SERVICE;
    exports.NgLazyServicesLoaderService = NgLazyServicesLoaderService;
    exports.NgLazyServicesConfigToken = NgLazyServicesConfigToken;
    exports.NgLazyServicesModule = NgLazyServicesModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ng-lazy-services.umd.js.map