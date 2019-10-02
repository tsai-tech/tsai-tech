(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/ng-lazy-services/bundles/ng-lazy-services.umd.js":
/*!***************************************************************!*\
  !*** ./dist/ng-lazy-services/bundles/ng-lazy-services.umd.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
     true ? factory(exports, __webpack_require__(/*! rxjs */ "rxjs"), __webpack_require__(/*! @angular/core */ "@angular/core")) :
    undefined;
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

/***/ }),

/***/ "./node_modules/@angular/material/button/typings/index.ngfactory.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@angular/material/button/typings/index.ngfactory.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! @angular/material/button */ "@angular/material/button");
var i2 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i3 = __webpack_require__(/*! @angular/cdk/bidi */ "@angular/cdk/bidi");
var i4 = __webpack_require__(/*! @angular/material/core */ "@angular/material/core");
var i5 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var i6 = __webpack_require__(/*! @angular/cdk/platform */ "@angular/cdk/platform");
var i7 = __webpack_require__(/*! @angular/platform-browser/animations */ "@angular/platform-browser/animations");
var i8 = __webpack_require__(/*! @angular/cdk/a11y */ "@angular/cdk/a11y");
var MatButtonModuleNgFactory = i0.ɵcmf(i1.MatButtonModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, []], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i2.NgLocalization, i2.NgLocaleLocalization, [i0.LOCALE_ID, [2, i2.ɵangular_packages_common_common_a]]), i0.ɵmpd(1073742336, i2.CommonModule, i2.CommonModule, []), i0.ɵmpd(1073742336, i3.BidiModule, i3.BidiModule, []), i0.ɵmpd(1073742336, i4.MatCommonModule, i4.MatCommonModule, [[2, i4.MATERIAL_SANITY_CHECKS], [2, i5.HAMMER_LOADER]]), i0.ɵmpd(1073742336, i6.PlatformModule, i6.PlatformModule, []), i0.ɵmpd(1073742336, i4.MatRippleModule, i4.MatRippleModule, []), i0.ɵmpd(1073742336, i1.MatButtonModule, i1.MatButtonModule, [])]); });
exports.MatButtonModuleNgFactory = MatButtonModuleNgFactory;
var styles_MatButton = [".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:.04}@media (hover:none){.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-flat-button,.mat-icon-button,.mat-stroked-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner{border:0}.mat-button[disabled],.mat-flat-button[disabled],.mat-icon-button[disabled],.mat-stroked-button[disabled]{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button[disabled]{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-focus-overlay,.mat-stroked-button .mat-button-ripple.mat-ripple{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab[disabled]{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab[disabled]{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button .mat-icon,.mat-icon-button i{line-height:24px}.mat-button-focus-overlay,.mat-button-ripple.mat-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-focus-overlay{opacity:0;transition:opacity .2s cubic-bezier(.35,0,.25,1),background-color .2s cubic-bezier(.35,0,.25,1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}@media (-ms-high-contrast:active){.mat-button-focus-overlay{background-color:rgba(255,255,255,.5)}}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:block;font-size:inherit;width:2.5em;height:2.5em}@media (-ms-high-contrast:active){.mat-button,.mat-fab,.mat-flat-button,.mat-icon-button,.mat-mini-fab,.mat-raised-button{outline:solid 1px}}"];
var RenderType_MatButton = i0.ɵcrt({ encapsulation: 2, styles: styles_MatButton, data: {} });
exports.RenderType_MatButton = RenderType_MatButton;
function View_MatButton_0(_l) { return i0.ɵvid(2, [i0.ɵqud(402653184, 1, { ripple: 0 }), (_l()(), i0.ɵeld(1, 0, null, null, 1, "span", [["class", "mat-button-wrapper"]], null, null, null, null, null)), i0.ɵncd(null, 0), (_l()(), i0.ɵeld(3, 0, null, null, 1, "div", [["class", "mat-button-ripple mat-ripple"], ["matRipple", ""]], [[2, "mat-button-ripple-round", null], [2, "mat-ripple-unbounded", null]], null, null, null, null)), i0.ɵdid(4, 212992, [[1, 4]], 0, i4.MatRipple, [i0.ElementRef, i0.NgZone, i6.Platform, [2, i4.MAT_RIPPLE_GLOBAL_OPTIONS], [2, i7.ANIMATION_MODULE_TYPE]], { centered: [0, "centered"], disabled: [1, "disabled"], trigger: [2, "trigger"] }, null), (_l()(), i0.ɵeld(5, 0, null, null, 0, "div", [["class", "mat-button-focus-overlay"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.isIconButton; var currVal_3 = _co._isRippleDisabled(); var currVal_4 = _co._getHostElement(); _ck(_v, 4, 0, currVal_2, currVal_3, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.isRoundButton || _co.isIconButton); var currVal_1 = i0.ɵnov(_v, 4).unbounded; _ck(_v, 3, 0, currVal_0, currVal_1); }); }
exports.View_MatButton_0 = View_MatButton_0;
function View_MatButton_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "button", [["mat-button", ""]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], null, null, View_MatButton_0, RenderType_MatButton)), i0.ɵdid(1, 180224, null, 0, i1.MatButton, [i0.ElementRef, i6.Platform, i8.FocusMonitor, [2, i7.ANIMATION_MODULE_TYPE]], null, null)], null, function (_ck, _v) { var currVal_0 = (i0.ɵnov(_v, 1).disabled || null); var currVal_1 = (i0.ɵnov(_v, 1)._animationMode === "NoopAnimations"); _ck(_v, 0, 0, currVal_0, currVal_1); }); }
exports.View_MatButton_Host_0 = View_MatButton_Host_0;
var MatButtonNgFactory = i0.ɵccf("button[mat-button], button[mat-raised-button], button[mat-icon-button],\n             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],\n             button[mat-flat-button]", i1.MatButton, View_MatButton_Host_0, { disabled: "disabled", disableRipple: "disableRipple", color: "color" }, {}, ["*"]);
exports.MatButtonNgFactory = MatButtonNgFactory;
var styles_MatAnchor = [".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:.04}@media (hover:none){.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-flat-button,.mat-icon-button,.mat-stroked-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner{border:0}.mat-button[disabled],.mat-flat-button[disabled],.mat-icon-button[disabled],.mat-stroked-button[disabled]{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button[disabled]{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-focus-overlay,.mat-stroked-button .mat-button-ripple.mat-ripple{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab[disabled]{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab[disabled]{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button .mat-icon,.mat-icon-button i{line-height:24px}.mat-button-focus-overlay,.mat-button-ripple.mat-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-focus-overlay{opacity:0;transition:opacity .2s cubic-bezier(.35,0,.25,1),background-color .2s cubic-bezier(.35,0,.25,1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}@media (-ms-high-contrast:active){.mat-button-focus-overlay{background-color:rgba(255,255,255,.5)}}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:block;font-size:inherit;width:2.5em;height:2.5em}@media (-ms-high-contrast:active){.mat-button,.mat-fab,.mat-flat-button,.mat-icon-button,.mat-mini-fab,.mat-raised-button{outline:solid 1px}}"];
var RenderType_MatAnchor = i0.ɵcrt({ encapsulation: 2, styles: styles_MatAnchor, data: {} });
exports.RenderType_MatAnchor = RenderType_MatAnchor;
function View_MatAnchor_0(_l) { return i0.ɵvid(2, [i0.ɵqud(402653184, 1, { ripple: 0 }), (_l()(), i0.ɵeld(1, 0, null, null, 1, "span", [["class", "mat-button-wrapper"]], null, null, null, null, null)), i0.ɵncd(null, 0), (_l()(), i0.ɵeld(3, 0, null, null, 1, "div", [["class", "mat-button-ripple mat-ripple"], ["matRipple", ""]], [[2, "mat-button-ripple-round", null], [2, "mat-ripple-unbounded", null]], null, null, null, null)), i0.ɵdid(4, 212992, [[1, 4]], 0, i4.MatRipple, [i0.ElementRef, i0.NgZone, i6.Platform, [2, i4.MAT_RIPPLE_GLOBAL_OPTIONS], [2, i7.ANIMATION_MODULE_TYPE]], { centered: [0, "centered"], disabled: [1, "disabled"], trigger: [2, "trigger"] }, null), (_l()(), i0.ɵeld(5, 0, null, null, 0, "div", [["class", "mat-button-focus-overlay"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.isIconButton; var currVal_3 = _co._isRippleDisabled(); var currVal_4 = _co._getHostElement(); _ck(_v, 4, 0, currVal_2, currVal_3, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.isRoundButton || _co.isIconButton); var currVal_1 = i0.ɵnov(_v, 4).unbounded; _ck(_v, 3, 0, currVal_0, currVal_1); }); }
exports.View_MatAnchor_0 = View_MatAnchor_0;
function View_MatAnchor_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "a", [["mat-button", ""]], [[1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 1)._haltDisabledEvents($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_MatAnchor_0, RenderType_MatAnchor)), i0.ɵdid(1, 180224, null, 0, i1.MatAnchor, [i6.Platform, i8.FocusMonitor, i0.ElementRef, [2, i7.ANIMATION_MODULE_TYPE]], null, null)], null, function (_ck, _v) { var currVal_0 = (i0.ɵnov(_v, 1).disabled ? (0 - 1) : (i0.ɵnov(_v, 1).tabIndex || 0)); var currVal_1 = (i0.ɵnov(_v, 1).disabled || null); var currVal_2 = i0.ɵnov(_v, 1).disabled.toString(); var currVal_3 = (i0.ɵnov(_v, 1)._animationMode === "NoopAnimations"); _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3); }); }
exports.View_MatAnchor_Host_0 = View_MatAnchor_Host_0;
var MatAnchorNgFactory = i0.ɵccf("a[mat-button], a[mat-raised-button], a[mat-icon-button], a[mat-fab],\n             a[mat-mini-fab], a[mat-stroked-button], a[mat-flat-button]", i1.MatAnchor, View_MatAnchor_Host_0, { disabled: "disabled", disableRipple: "disableRipple", color: "color", tabIndex: "tabIndex" }, {}, ["*"]);
exports.MatAnchorNgFactory = MatAnchorNgFactory;


/***/ }),

/***/ "./node_modules/@angular/material/icon/typings/index.ngfactory.js":
/*!************************************************************************!*\
  !*** ./node_modules/@angular/material/icon/typings/index.ngfactory.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! @angular/material/icon */ "@angular/material/icon");
var i2 = __webpack_require__(/*! @angular/cdk/bidi */ "@angular/cdk/bidi");
var i3 = __webpack_require__(/*! @angular/material/core */ "@angular/material/core");
var i4 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var MatIconModuleNgFactory = i0.ɵcmf(i1.MatIconModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, []], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(1073742336, i2.BidiModule, i2.BidiModule, []), i0.ɵmpd(1073742336, i3.MatCommonModule, i3.MatCommonModule, [[2, i3.MATERIAL_SANITY_CHECKS], [2, i4.HAMMER_LOADER]]), i0.ɵmpd(1073742336, i1.MatIconModule, i1.MatIconModule, [])]); });
exports.MatIconModuleNgFactory = MatIconModuleNgFactory;
var styles_MatIcon = [".mat-icon{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1,1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}"];
var RenderType_MatIcon = i0.ɵcrt({ encapsulation: 2, styles: styles_MatIcon, data: {} });
exports.RenderType_MatIcon = RenderType_MatIcon;
function View_MatIcon_0(_l) { return i0.ɵvid(2, [i0.ɵncd(null, 0)], null, null); }
exports.View_MatIcon_0 = View_MatIcon_0;
function View_MatIcon_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "mat-icon", [["class", "mat-icon"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, View_MatIcon_0, RenderType_MatIcon)), i0.ɵdid(1, 9158656, null, 0, i1.MatIcon, [i0.ElementRef, i1.MatIconRegistry, [8, null], [2, i1.MAT_ICON_LOCATION]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).inline; var currVal_1 = (((i0.ɵnov(_v, 1).color !== "primary") && (i0.ɵnov(_v, 1).color !== "accent")) && (i0.ɵnov(_v, 1).color !== "warn")); _ck(_v, 0, 0, currVal_0, currVal_1); }); }
exports.View_MatIcon_Host_0 = View_MatIcon_Host_0;
var MatIconNgFactory = i0.ɵccf("mat-icon", i1.MatIcon, View_MatIcon_Host_0, { color: "color", inline: "inline", svgIcon: "svgIcon", fontSet: "fontSet", fontIcon: "fontIcon" }, {}, ["*"]);
exports.MatIconNgFactory = MatIconNgFactory;


/***/ }),

/***/ "./node_modules/@angular/material/progress-spinner/typings/index.ngfactory.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@angular/material/progress-spinner/typings/index.ngfactory.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! @angular/material/progress-spinner */ "@angular/material/progress-spinner");
var i2 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i3 = __webpack_require__(/*! @angular/cdk/bidi */ "@angular/cdk/bidi");
var i4 = __webpack_require__(/*! @angular/material/core */ "@angular/material/core");
var i5 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var i6 = __webpack_require__(/*! @angular/cdk/platform */ "@angular/cdk/platform");
var i7 = __webpack_require__(/*! @angular/platform-browser/animations */ "@angular/platform-browser/animations");
var MatProgressSpinnerModuleNgFactory = i0.ɵcmf(i1.MatProgressSpinnerModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, []], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i2.NgLocalization, i2.NgLocaleLocalization, [i0.LOCALE_ID, [2, i2.ɵangular_packages_common_common_a]]), i0.ɵmpd(1073742336, i3.BidiModule, i3.BidiModule, []), i0.ɵmpd(1073742336, i4.MatCommonModule, i4.MatCommonModule, [[2, i4.MATERIAL_SANITY_CHECKS], [2, i5.HAMMER_LOADER]]), i0.ɵmpd(1073742336, i2.CommonModule, i2.CommonModule, []), i0.ɵmpd(1073742336, i1.MatProgressSpinnerModule, i1.MatProgressSpinnerModule, [])]); });
exports.MatProgressSpinnerModuleNgFactory = MatProgressSpinnerModuleNgFactory;
var styles_MatProgressSpinner = [".mat-progress-spinner{display:block;position:relative}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{animation:mat-progress-spinner-linear-rotate 2s linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4s;animation-timing-function:cubic-bezier(.35,0,.25,1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{animation:mat-progress-spinner-stroke-rotate-fallback 10s cubic-bezier(.87,.03,.33,1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.60617px;transform:rotate(0)}12.5%{stroke-dashoffset:56.54867px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.60617px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.54867px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.60617px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.54867px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.60617px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.54867px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}"];
var RenderType_MatProgressSpinner = i0.ɵcrt({ encapsulation: 2, styles: styles_MatProgressSpinner, data: {} });
exports.RenderType_MatProgressSpinner = RenderType_MatProgressSpinner;
function View_MatProgressSpinner_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 0, ":svg:circle", [["cx", "50%"], ["cy", "50%"]], [[1, "r", 0], [4, "animation-name", null], [4, "stroke-dashoffset", "px"], [4, "stroke-dasharray", "px"], [4, "stroke-width", "%"]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co._circleRadius; var currVal_1 = ("mat-progress-spinner-stroke-rotate-" + _co.diameter); var currVal_2 = _co._strokeDashOffset; var currVal_3 = _co._strokeCircumference; var currVal_4 = _co._circleStrokeWidth; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4); }); }
function View_MatProgressSpinner_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 0, ":svg:circle", [["cx", "50%"], ["cy", "50%"]], [[1, "r", 0], [4, "stroke-dashoffset", "px"], [4, "stroke-dasharray", "px"], [4, "stroke-width", "%"]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co._circleRadius; var currVal_1 = _co._strokeDashOffset; var currVal_2 = _co._strokeCircumference; var currVal_3 = _co._circleStrokeWidth; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3); }); }
function View_MatProgressSpinner_0(_l) { return i0.ɵvid(2, [(_l()(), i0.ɵeld(0, 0, null, null, 5, ":svg:svg", [["focusable", "false"], ["preserveAspectRatio", "xMidYMid meet"]], [[4, "width", "px"], [4, "height", "px"], [1, "viewBox", 0]], null, null, null, null)), i0.ɵdid(1, 16384, null, 0, i2.NgSwitch, [], { ngSwitch: [0, "ngSwitch"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_MatProgressSpinner_1)), i0.ɵdid(3, 278528, null, 0, i2.NgSwitchCase, [i0.ViewContainerRef, i0.TemplateRef, i2.NgSwitch], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_MatProgressSpinner_2)), i0.ɵdid(5, 278528, null, 0, i2.NgSwitchCase, [i0.ViewContainerRef, i0.TemplateRef, i2.NgSwitch], { ngSwitchCase: [0, "ngSwitchCase"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_3 = (_co.mode === "indeterminate"); _ck(_v, 1, 0, currVal_3); var currVal_4 = true; _ck(_v, 3, 0, currVal_4); var currVal_5 = false; _ck(_v, 5, 0, currVal_5); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.diameter; var currVal_1 = _co.diameter; var currVal_2 = _co._viewBox; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); }); }
exports.View_MatProgressSpinner_0 = View_MatProgressSpinner_0;
function View_MatProgressSpinner_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "mat-progress-spinner", [["class", "mat-progress-spinner"], ["role", "progressbar"]], [[2, "_mat-animation-noopable", null], [4, "width", "px"], [4, "height", "px"], [1, "aria-valuemin", 0], [1, "aria-valuemax", 0], [1, "aria-valuenow", 0], [1, "mode", 0]], null, null, View_MatProgressSpinner_0, RenderType_MatProgressSpinner)), i0.ɵdid(1, 49152, null, 0, i1.MatProgressSpinner, [i0.ElementRef, i6.Platform, [2, i2.DOCUMENT], [2, i7.ANIMATION_MODULE_TYPE], i1.MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1)._noopAnimations; var currVal_1 = i0.ɵnov(_v, 1).diameter; var currVal_2 = i0.ɵnov(_v, 1).diameter; var currVal_3 = ((i0.ɵnov(_v, 1).mode === "determinate") ? 0 : null); var currVal_4 = ((i0.ɵnov(_v, 1).mode === "determinate") ? 100 : null); var currVal_5 = i0.ɵnov(_v, 1).value; var currVal_6 = i0.ɵnov(_v, 1).mode; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); }); }
exports.View_MatProgressSpinner_Host_0 = View_MatProgressSpinner_Host_0;
var MatProgressSpinnerNgFactory = i0.ɵccf("mat-progress-spinner", i1.MatProgressSpinner, View_MatProgressSpinner_Host_0, { color: "color", diameter: "diameter", strokeWidth: "strokeWidth", mode: "mode", value: "value" }, {}, []);
exports.MatProgressSpinnerNgFactory = MatProgressSpinnerNgFactory;
var styles_MatSpinner = [".mat-progress-spinner{display:block;position:relative}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{animation:mat-progress-spinner-linear-rotate 2s linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4s;animation-timing-function:cubic-bezier(.35,0,.25,1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{animation:mat-progress-spinner-stroke-rotate-fallback 10s cubic-bezier(.87,.03,.33,1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.60617px;transform:rotate(0)}12.5%{stroke-dashoffset:56.54867px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.60617px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.54867px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.60617px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.54867px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.60617px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.54867px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}"];
var RenderType_MatSpinner = i0.ɵcrt({ encapsulation: 2, styles: styles_MatSpinner, data: {} });
exports.RenderType_MatSpinner = RenderType_MatSpinner;
function View_MatSpinner_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 0, ":svg:circle", [["cx", "50%"], ["cy", "50%"]], [[1, "r", 0], [4, "animation-name", null], [4, "stroke-dashoffset", "px"], [4, "stroke-dasharray", "px"], [4, "stroke-width", "%"]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co._circleRadius; var currVal_1 = ("mat-progress-spinner-stroke-rotate-" + _co.diameter); var currVal_2 = _co._strokeDashOffset; var currVal_3 = _co._strokeCircumference; var currVal_4 = _co._circleStrokeWidth; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4); }); }
function View_MatSpinner_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 0, ":svg:circle", [["cx", "50%"], ["cy", "50%"]], [[1, "r", 0], [4, "stroke-dashoffset", "px"], [4, "stroke-dasharray", "px"], [4, "stroke-width", "%"]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co._circleRadius; var currVal_1 = _co._strokeDashOffset; var currVal_2 = _co._strokeCircumference; var currVal_3 = _co._circleStrokeWidth; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3); }); }
function View_MatSpinner_0(_l) { return i0.ɵvid(2, [(_l()(), i0.ɵeld(0, 0, null, null, 5, ":svg:svg", [["focusable", "false"], ["preserveAspectRatio", "xMidYMid meet"]], [[4, "width", "px"], [4, "height", "px"], [1, "viewBox", 0]], null, null, null, null)), i0.ɵdid(1, 16384, null, 0, i2.NgSwitch, [], { ngSwitch: [0, "ngSwitch"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_MatSpinner_1)), i0.ɵdid(3, 278528, null, 0, i2.NgSwitchCase, [i0.ViewContainerRef, i0.TemplateRef, i2.NgSwitch], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_MatSpinner_2)), i0.ɵdid(5, 278528, null, 0, i2.NgSwitchCase, [i0.ViewContainerRef, i0.TemplateRef, i2.NgSwitch], { ngSwitchCase: [0, "ngSwitchCase"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_3 = (_co.mode === "indeterminate"); _ck(_v, 1, 0, currVal_3); var currVal_4 = true; _ck(_v, 3, 0, currVal_4); var currVal_5 = false; _ck(_v, 5, 0, currVal_5); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.diameter; var currVal_1 = _co.diameter; var currVal_2 = _co._viewBox; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); }); }
exports.View_MatSpinner_0 = View_MatSpinner_0;
function View_MatSpinner_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "mat-spinner", [["class", "mat-spinner mat-progress-spinner"], ["mode", "indeterminate"], ["role", "progressbar"]], [[2, "_mat-animation-noopable", null], [4, "width", "px"], [4, "height", "px"]], null, null, View_MatSpinner_0, RenderType_MatSpinner)), i0.ɵdid(1, 49152, null, 0, i1.MatSpinner, [i0.ElementRef, i6.Platform, [2, i2.DOCUMENT], [2, i7.ANIMATION_MODULE_TYPE], i1.MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1)._noopAnimations; var currVal_1 = i0.ɵnov(_v, 1).diameter; var currVal_2 = i0.ɵnov(_v, 1).diameter; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); }); }
exports.View_MatSpinner_Host_0 = View_MatSpinner_Host_0;
var MatSpinnerNgFactory = i0.ɵccf("mat-spinner", i1.MatSpinner, View_MatSpinner_Host_0, { color: "color", diameter: "diameter", strokeWidth: "strokeWidth", mode: "mode", value: "value" }, {}, []);
exports.MatSpinnerNgFactory = MatSpinnerNgFactory;


/***/ }),

/***/ "./node_modules/@angular/material/tooltip/typings/index.ngfactory.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@angular/material/tooltip/typings/index.ngfactory.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! @angular/material/tooltip */ "@angular/material/tooltip");
var i2 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i3 = __webpack_require__(/*! @angular/cdk/observers */ "@angular/cdk/observers");
var i4 = __webpack_require__(/*! @angular/cdk/overlay */ "@angular/cdk/overlay");
var i5 = __webpack_require__(/*! @angular/cdk/bidi */ "@angular/cdk/bidi");
var i6 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var i7 = __webpack_require__(/*! @angular/material/core */ "@angular/material/core");
var i8 = __webpack_require__(/*! @angular/cdk/platform */ "@angular/cdk/platform");
var i9 = __webpack_require__(/*! @angular/cdk/a11y */ "@angular/cdk/a11y");
var i10 = __webpack_require__(/*! @angular/cdk/portal */ "@angular/cdk/portal");
var i11 = __webpack_require__(/*! @angular/cdk/scrolling */ "@angular/cdk/scrolling");
var i12 = __webpack_require__(/*! @angular/cdk/layout */ "@angular/cdk/layout");
var MatTooltipModuleNgFactory = i0.ɵcmf(i1.MatTooltipModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [TooltipComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i2.NgLocalization, i2.NgLocaleLocalization, [i0.LOCALE_ID, [2, i2.ɵangular_packages_common_common_a]]), i0.ɵmpd(4608, i3.MutationObserverFactory, i3.MutationObserverFactory, []), i0.ɵmpd(4608, i4.Overlay, i4.Overlay, [i4.ScrollStrategyOptions, i4.OverlayContainer, i0.ComponentFactoryResolver, i4.OverlayPositionBuilder, i4.OverlayKeyboardDispatcher, i0.Injector, i0.NgZone, i2.DOCUMENT, i5.Directionality, [2, i2.Location]]), i0.ɵmpd(5120, i4.ɵc, i4.ɵd, [i4.Overlay]), i0.ɵmpd(5120, i1.MAT_TOOLTIP_SCROLL_STRATEGY, i1.MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY, [i4.Overlay]), i0.ɵmpd(4608, i6.HAMMER_GESTURE_CONFIG, i7.GestureConfig, [[2, i7.MAT_HAMMER_OPTIONS], [2, i7.MatCommonModule]]), i0.ɵmpd(1073742336, i2.CommonModule, i2.CommonModule, []), i0.ɵmpd(1073742336, i8.PlatformModule, i8.PlatformModule, []), i0.ɵmpd(1073742336, i3.ObserversModule, i3.ObserversModule, []), i0.ɵmpd(1073742336, i9.A11yModule, i9.A11yModule, []), i0.ɵmpd(1073742336, i5.BidiModule, i5.BidiModule, []), i0.ɵmpd(1073742336, i10.PortalModule, i10.PortalModule, []), i0.ɵmpd(1073742336, i11.ScrollingModule, i11.ScrollingModule, []), i0.ɵmpd(1073742336, i4.OverlayModule, i4.OverlayModule, []), i0.ɵmpd(1073742336, i7.MatCommonModule, i7.MatCommonModule, [[2, i7.MATERIAL_SANITY_CHECKS], [2, i6.HAMMER_LOADER]]), i0.ɵmpd(1073742336, i1.MatTooltipModule, i1.MatTooltipModule, [])]); });
exports.MatTooltipModuleNgFactory = MatTooltipModuleNgFactory;
var styles_TooltipComponent = [".mat-tooltip-panel{pointer-events:none!important}.mat-tooltip{color:#fff;border-radius:4px;margin:14px;max-width:250px;padding-left:8px;padding-right:8px;overflow:hidden;text-overflow:ellipsis}@media (-ms-high-contrast:active){.mat-tooltip{outline:solid 1px}}.mat-tooltip-handset{margin:24px;padding-left:16px;padding-right:16px}"];
var RenderType_TooltipComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_TooltipComponent, data: { "animation": [{ type: 7, name: "state", definitions: [{ type: 0, name: "initial, void, hidden", styles: { type: 6, styles: { opacity: 0, transform: "scale(0)" }, offset: null }, options: undefined }, { type: 0, name: "visible", styles: { type: 6, styles: { transform: "scale(1)" }, offset: null }, options: undefined }, { type: 1, expr: "* => visible", animation: { type: 4, styles: { type: 5, steps: [{ type: 6, styles: { opacity: 0, transform: "scale(0)", offset: 0 }, offset: null }, { type: 6, styles: { opacity: 0.5, transform: "scale(0.99)", offset: 0.5 }, offset: null }, { type: 6, styles: { opacity: 1, transform: "scale(1)", offset: 1 }, offset: null }] }, timings: "200ms cubic-bezier(0, 0, 0.2, 1)" }, options: null }, { type: 1, expr: "* => hidden", animation: { type: 4, styles: { type: 6, styles: { opacity: 0 }, offset: null }, timings: "100ms cubic-bezier(0, 0, 0.2, 1)" }, options: null }], options: {} }] } });
exports.RenderType_TooltipComponent = RenderType_TooltipComponent;
function View_TooltipComponent_0(_l) { return i0.ɵvid(2, [(_l()(), i0.ɵeld(0, 0, null, null, 3, "div", [["class", "mat-tooltip"]], [[2, "mat-tooltip-handset", null], [24, "@state", 0]], [[null, "@state.start"], [null, "@state.done"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("@state.start" === en)) {
        var pd_0 = (_co._animationStart() !== false);
        ad = (pd_0 && ad);
    } if (("@state.done" === en)) {
        var pd_1 = (_co._animationDone($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), i0.ɵdid(1, 278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpid(131072, i2.AsyncPipe, [i0.ChangeDetectorRef]), (_l()(), i0.ɵted(3, null, ["", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = "mat-tooltip"; var currVal_3 = _co.tooltipClass; _ck(_v, 1, 0, currVal_2, currVal_3); }, function (_ck, _v) { var _co = _v.component; var tmp_0_0 = null; var currVal_0 = (((tmp_0_0 = i0.ɵunv(_v, 0, 0, i0.ɵnov(_v, 2).transform(_co._isHandset))) == null) ? null : tmp_0_0.matches); var currVal_1 = _co._visibility; _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_4 = _co.message; _ck(_v, 3, 0, currVal_4); }); }
exports.View_TooltipComponent_0 = View_TooltipComponent_0;
function View_TooltipComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "mat-tooltip-component", [["aria-hidden", "true"]], [[4, "zoom", null]], [["body", "click"]], function (_v, en, $event) { var ad = true; if (("body:click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 1)._handleBodyInteraction() !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_TooltipComponent_0, RenderType_TooltipComponent)), i0.ɵdid(1, 49152, null, 0, i1.TooltipComponent, [i0.ChangeDetectorRef, i12.BreakpointObserver], null, null)], null, function (_ck, _v) { var currVal_0 = ((i0.ɵnov(_v, 1)._visibility === "visible") ? 1 : null); _ck(_v, 0, 0, currVal_0); }); }
exports.View_TooltipComponent_Host_0 = View_TooltipComponent_Host_0;
var TooltipComponentNgFactory = i0.ɵccf("mat-tooltip-component", i1.TooltipComponent, View_TooltipComponent_Host_0, {}, {}, []);
exports.TooltipComponentNgFactory = TooltipComponentNgFactory;


/***/ }),

/***/ "./node_modules/@angular/router/router.ngfactory.js":
/*!**********************************************************!*\
  !*** ./node_modules/@angular/router/router.ngfactory.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var RouterModuleNgFactory = i0.ɵcmf(i1.RouterModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [ɵEmptyOutletComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(1073742336, i1.RouterModule, i1.RouterModule, [[2, i1.ɵangular_packages_router_router_a], [2, i1.Router]])]); });
exports.RouterModuleNgFactory = RouterModuleNgFactory;
var styles_ɵEmptyOutletComponent = [];
var RenderType_ɵEmptyOutletComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_ɵEmptyOutletComponent, data: {} });
exports.RenderType_ɵEmptyOutletComponent = RenderType_ɵEmptyOutletComponent;
function View_ɵEmptyOutletComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), i0.ɵdid(1, 212992, null, 0, i1.RouterOutlet, [i1.ChildrenOutletContexts, i0.ViewContainerRef, i0.ComponentFactoryResolver, [8, null], i0.ChangeDetectorRef], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_ɵEmptyOutletComponent_0 = View_ɵEmptyOutletComponent_0;
function View_ɵEmptyOutletComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ng-component", [], null, null, null, View_ɵEmptyOutletComponent_0, RenderType_ɵEmptyOutletComponent)), i0.ɵdid(1, 49152, null, 0, i1.ɵEmptyOutletComponent, [], null, null)], null, null); }
exports.View_ɵEmptyOutletComponent_Host_0 = View_ɵEmptyOutletComponent_Host_0;
var ɵEmptyOutletComponentNgFactory = i0.ɵccf("ng-component", i1.ɵEmptyOutletComponent, View_ɵEmptyOutletComponent_Host_0, {}, {}, []);
exports.ɵEmptyOutletComponentNgFactory = ɵEmptyOutletComponentNgFactory;


/***/ }),

/***/ "./node_modules/ngx-scrollbar/ngx-scrollbar.ngfactory.js":
/*!***************************************************************!*\
  !*** ./node_modules/ngx-scrollbar/ngx-scrollbar.ngfactory.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ngx-scrollbar */ "ngx-scrollbar");
var i2 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i3 = __webpack_require__(/*! @angular/cdk/bidi */ "@angular/cdk/bidi");
var i4 = __webpack_require__(/*! @angular/cdk/platform */ "@angular/cdk/platform");
var i5 = __webpack_require__(/*! @angular/cdk/scrolling */ "@angular/cdk/scrolling");
var i6 = __webpack_require__(/*! @angular/cdk/layout */ "@angular/cdk/layout");
var NgScrollbarModuleNgFactory = i0.ɵcmf(i1.NgScrollbarModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, []], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i2.NgLocalization, i2.NgLocaleLocalization, [i0.LOCALE_ID, [2, i2.ɵangular_packages_common_common_a]]), i0.ɵmpd(1073742336, i2.CommonModule, i2.CommonModule, []), i0.ɵmpd(1073742336, i3.BidiModule, i3.BidiModule, []), i0.ɵmpd(1073742336, i4.PlatformModule, i4.PlatformModule, []), i0.ɵmpd(1073742336, i5.ScrollingModule, i5.ScrollingModule, []), i0.ɵmpd(1073742336, i6.LayoutModule, i6.LayoutModule, []), i0.ɵmpd(1073742336, i1.SmoothScrollModule, i1.SmoothScrollModule, []), i0.ɵmpd(1073742336, i1.NgScrollbarModule, i1.NgScrollbarModule, [])]); });
exports.NgScrollbarModuleNgFactory = NgScrollbarModuleNgFactory;
var SmoothScrollModuleNgFactory = i0.ɵcmf(i1.SmoothScrollModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, []], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(1073742336, i3.BidiModule, i3.BidiModule, []), i0.ɵmpd(1073742336, i4.PlatformModule, i4.PlatformModule, []), i0.ɵmpd(1073742336, i5.ScrollingModule, i5.ScrollingModule, []), i0.ɵmpd(1073742336, i1.SmoothScrollModule, i1.SmoothScrollModule, [])]); });
exports.SmoothScrollModuleNgFactory = SmoothScrollModuleNgFactory;
var styles_NgScrollbar = ["[_nghost-%COMP%]{display:block;overflow:hidden;--scrollbar-color:transparent;--scrollbar-container-color:transparent;--scrollbar-thumb-color:rgba(0, 0, 0, 0.2);--scrollbar-thumb-hover-color:rgba(0, 0, 0, 0.3);--scrollbar-border-radius:4px;--scrollbar-size:6px;--scrollbar-padding:8px;--scroll-view-margin:0;--scroll-view-color:transparent}[trackY=true][_nghost-%COMP%] > .ng-scrollbar-layout[_ngcontent-%COMP%] > .ng-scrollbar-layout[_ngcontent-%COMP%] > .ng-scroll-view-container[_ngcontent-%COMP%] > .ng-scroll-view[_ngcontent-%COMP%]{overflow-y:scroll}[trackX=true][_nghost-%COMP%] > .ng-scrollbar-layout[_ngcontent-%COMP%] > .ng-scrollbar-layout[_ngcontent-%COMP%] > .ng-scroll-view-container[_ngcontent-%COMP%] > .ng-scroll-view[_ngcontent-%COMP%]{overflow-x:scroll}[_nghost-%COMP%] > .ng-scrollbar-x-layout[_ngcontent-%COMP%]{flex-direction:column}[_nghost-%COMP%] > .ng-scrollbar-x-layout.ng-scrollbar-invert[_ngcontent-%COMP%]{flex-direction:column-reverse}[_nghost-%COMP%] > .ng-scrollbar-x-layout[_ngcontent-%COMP%] > .ng-scrollbar-y-layout[_ngcontent-%COMP%]{flex-direction:row}[_nghost-%COMP%] > .ng-scrollbar-x-layout[_ngcontent-%COMP%] > .ng-scrollbar-y-layout.ng-scrollbar-invert[_ngcontent-%COMP%]{flex-direction:row-reverse}[compact=true][_nghost-%COMP%] > .ng-scrollbar-x-layout[_ngcontent-%COMP%] > ng-scrollbar-x[_ngcontent-%COMP%]{position:absolute;bottom:0}[compact=true][_nghost-%COMP%] > .ng-scrollbar-x-layout.ng-scrollbar-invert[_ngcontent-%COMP%] > ng-scrollbar-x[_ngcontent-%COMP%]{top:0;bottom:unset}[compact=true][_nghost-%COMP%] > .ng-scrollbar-x-layout[_ngcontent-%COMP%] > .ng-scrollbar-y-layout[_ngcontent-%COMP%] > ng-scrollbar-y[_ngcontent-%COMP%]{position:absolute;right:0;left:unset}[compact=true][_nghost-%COMP%] > .ng-scrollbar-x-layout[_ngcontent-%COMP%] > .ng-scrollbar-y-layout.ng-scrollbar-invert[_ngcontent-%COMP%] > ng-scrollbar-y[_ngcontent-%COMP%]{right:unset;left:0}[autoHide=true][_nghost-%COMP%] > .ng-scrollbar-layout[_ngcontent-%COMP%] > .ng-scrollbar-layout[_ngcontent-%COMP%] > ng-scrollbar-y[_ngcontent-%COMP%], [autoHide=true][_nghost-%COMP%] > .ng-scrollbar-layout[_ngcontent-%COMP%] > ng-scrollbar-x[_ngcontent-%COMP%]{opacity:0;transition:opacity 120ms ease-out}[autoHide=true][_nghost-%COMP%]:active > .ng-scrollbar-layout[_ngcontent-%COMP%] > .ng-scrollbar-layout[_ngcontent-%COMP%] > ng-scrollbar-y[_ngcontent-%COMP%], [autoHide=true][_nghost-%COMP%]:active > .ng-scrollbar-layout[_ngcontent-%COMP%] > ng-scrollbar-x[_ngcontent-%COMP%], [autoHide=true][_nghost-%COMP%]:focus > .ng-scrollbar-layout[_ngcontent-%COMP%] > .ng-scrollbar-layout[_ngcontent-%COMP%] > ng-scrollbar-y[_ngcontent-%COMP%], [autoHide=true][_nghost-%COMP%]:focus > .ng-scrollbar-layout[_ngcontent-%COMP%] > ng-scrollbar-x[_ngcontent-%COMP%], [autoHide=true][_nghost-%COMP%]:hover > .ng-scrollbar-layout[_ngcontent-%COMP%] > .ng-scrollbar-layout[_ngcontent-%COMP%] > ng-scrollbar-y[_ngcontent-%COMP%], [autoHide=true][_nghost-%COMP%]:hover > .ng-scrollbar-layout[_ngcontent-%COMP%] > ng-scrollbar-x[_ngcontent-%COMP%]{opacity:1;transition:opacity 340ms ease-out}.ng-scroll-view[_ngcontent-%COMP%], .ng-scrollbar-layout[_ngcontent-%COMP%], [_nghost-%COMP%]{position:relative;height:100%;width:100%}.ng-scrollbar-layout[_ngcontent-%COMP%]{display:flex;min-height:0}.ng-scroll-view-container[_ngcontent-%COMP%]{flex:1;position:relative;overflow:hidden;margin:var(--scroll-view-margin)}.ng-scroll-view[_ngcontent-%COMP%]{box-sizing:content-box;-webkit-transform:translateZ(0);transform:translateZ(0);background:var(--scroll-view-color);-webkit-overflow-scrolling:touch}ng-scrollbar-x[_ngcontent-%COMP%], ng-scrollbar-y[_ngcontent-%COMP%]{display:none;box-sizing:border-box;padding:var(--scrollbar-padding);background:var(--scrollbar-container-color)}ng-scrollbar-x.ng-scrollbar-visible[_ngcontent-%COMP%], ng-scrollbar-y.ng-scrollbar-visible[_ngcontent-%COMP%]{display:block}ng-scrollbar-y[_ngcontent-%COMP%]{top:0;bottom:0}ng-scrollbar-x[_ngcontent-%COMP%]{left:0;right:0}  ng-scrollbar-y .ng-scrollbar{width:var(--scrollbar-size)}  ng-scrollbar-y .ng-scrollbar-thumb{width:100%}  ng-scrollbar-x .ng-scrollbar{height:var(--scrollbar-size)}  ng-scrollbar-x .ng-scrollbar-thumb{height:100%}  .ng-scrollbar{height:100%;width:100%;z-index:1;border-radius:var(--scrollbar-border-radius);background-color:var(--scrollbar-color)}  .ng-scrollbar-thumb{box-sizing:border-box;position:relative;width:0;height:0;border-radius:inherit;background-color:var(--scrollbar-thumb-color);-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);transition:height ease-out 150ms}  .ng-scrollbar-thumb:active,   .ng-scrollbar-thumb:hover{background-color:var(--scrollbar-thumb-hover-color)}"];
var RenderType_NgScrollbar = i0.ɵcrt({ encapsulation: 0, styles: styles_NgScrollbar, data: {} });
exports.RenderType_NgScrollbar = RenderType_NgScrollbar;
function View_NgScrollbar_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, [[3, 0]], null, 1, "ng-scrollbar-y", [], [[2, "ng-scrollbar-visible", null]], null, null, View_ɵa_0, RenderType_ɵa)), i0.ɵdid(1, 4374528, [["y", 4]], 0, i1.ɵa, [i2.DOCUMENT, i1.NgScrollbar, i0.PLATFORM_ID, i0.NgZone], { barClass: [0, "barClass"], thumbClass: [1, "thumbClass"], scrollToDuration: [2, "scrollToDuration"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.barClass; var currVal_2 = _co.thumbClass; var currVal_3 = _co.scrollToDuration; _ck(_v, 1, 0, currVal_1, currVal_2, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.shown === "always") || (i0.ɵnov(_v.parent, 7).scrollHeight > i0.ɵnov(_v.parent, 7).clientHeight)); _ck(_v, 0, 0, currVal_0); }); }
function View_NgScrollbar_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, [[4, 0]], null, 1, "ng-scrollbar-x", [], [[2, "ng-scrollbar-visible", null]], null, null, View_ɵc_0, RenderType_ɵc)), i0.ɵdid(1, 4374528, [["x", 4]], 0, i1.ɵc, [i2.DOCUMENT, i1.NgScrollbar, i0.PLATFORM_ID, i3.Directionality, i0.NgZone], { barClass: [0, "barClass"], thumbClass: [1, "thumbClass"], scrollToDuration: [2, "scrollToDuration"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.barClass; var currVal_2 = _co.thumbClass; var currVal_3 = _co.scrollToDuration; _ck(_v, 1, 0, currVal_1, currVal_2, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.shown === "always") || (i0.ɵnov(_v.parent, 7).scrollWidth > i0.ɵnov(_v.parent, 7).clientWidth)); _ck(_v, 0, 0, currVal_0); }); }
function View_NgScrollbar_0(_l) { return i0.ɵvid(2, [i0.ɵqud(402653184, 1, { scrollable: 0 }), i0.ɵqud(402653184, 2, { smoothScroll: 0 }), i0.ɵqud(671088640, 3, { verticalScrollbar: 0 }), i0.ɵqud(671088640, 4, { horizontalScrollbar: 0 }), (_l()(), i0.ɵeld(4, 0, null, null, 11, "div", [["class", "ng-scrollbar-layout ng-scrollbar-x-layout"]], [[2, "ng-scrollbar-invert", null]], null, null, null, null)), (_l()(), i0.ɵeld(5, 0, null, null, 8, "div", [["class", "ng-scrollbar-layout ng-scrollbar-y-layout"]], [[2, "ng-scrollbar-invert", null]], null, null, null, null)), (_l()(), i0.ɵeld(6, 0, null, null, 5, "div", [["class", "ng-scroll-view-container"]], null, null, null, null, null)), (_l()(), i0.ɵeld(7, 0, [["view", 1]], null, 4, "div", [["cdkScrollable", ""], ["smoothScroll", ""]], [[8, "className", 0]], null, null, null, null)), i0.ɵdid(8, 278528, null, 0, i2.NgStyle, [i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i0.ɵdid(9, 212992, [[1, 4]], 0, i5.CdkScrollable, [i0.ElementRef, i5.ScrollDispatcher, i0.NgZone, [2, i3.Directionality]], null, null), i0.ɵdid(10, 16384, [[2, 4]], 0, i1.SmoothScroll, [i0.PLATFORM_ID, i0.ElementRef], null, null), i0.ɵncd(null, 0), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgScrollbar_1)), i0.ɵdid(13, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgScrollbar_2)), i0.ɵdid(15, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_3 = _co.hideNativeScrollbars; _ck(_v, 8, 0, currVal_3); _ck(_v, 9, 0); var currVal_4 = (!_co.disabled && _co.trackY); _ck(_v, 13, 0, currVal_4); var currVal_5 = (!_co.disabled && _co.trackX); _ck(_v, 15, 0, currVal_5); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.invertX; _ck(_v, 4, 0, currVal_0); var currVal_1 = _co.invertY; _ck(_v, 5, 0, currVal_1); var currVal_2 = i0.ɵinlineInterpolate(1, "ng-scroll-view ", _co.viewClass, ""); _ck(_v, 7, 0, currVal_2); }); }
exports.View_NgScrollbar_0 = View_NgScrollbar_0;
function View_NgScrollbar_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ng-scrollbar", [], [[1, "trackX", 0], [1, "trackY", 0], [1, "compact", 0], [1, "autoHide", 0]], null, null, View_NgScrollbar_0, RenderType_NgScrollbar)), i0.ɵdid(1, 4374528, null, 0, i1.NgScrollbar, [i0.ChangeDetectorRef, i6.BreakpointObserver, i0.PLATFORM_ID], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).trackX; var currVal_1 = i0.ɵnov(_v, 1).trackY; var currVal_2 = i0.ɵnov(_v, 1).compact; var currVal_3 = (i0.ɵnov(_v, 1).shown === "hover"); _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3); }); }
exports.View_NgScrollbar_Host_0 = View_NgScrollbar_Host_0;
var NgScrollbarNgFactory = i0.ɵccf("ng-scrollbar", i1.NgScrollbar, View_NgScrollbar_Host_0, { trackX: "trackX", trackY: "trackY", shown: "shown", autoUpdate: "autoUpdate", viewClass: "viewClass", barClass: "barClass", thumbClass: "thumbClass", scrollToDuration: "scrollToDuration", compact: "compact", invertY: "invertY", invertX: "invertX", disableOnBreakpoints: "disableOnBreakpoints", disabled: "disabled" }, {}, ["*"]);
exports.NgScrollbarNgFactory = NgScrollbarNgFactory;
var styles_ɵa = [];
var RenderType_ɵa = i0.ɵcrt({ encapsulation: 2, styles: styles_ɵa, data: {} });
exports.RenderType_ɵa = RenderType_ɵa;
function View_ɵa_0(_l) { return i0.ɵvid(2, [i0.ɵqud(402653184, 1, { bar: 0 }), i0.ɵqud(402653184, 2, { thumb: 0 }), (_l()(), i0.ɵeld(2, 0, [[1, 0], ["bar", 1]], null, 3, "div", [], [[8, "className", 0]], [[null, "mousedown"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("mousedown" === en)) {
        var pd_0 = (_co.onScrollbarHolderClick($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵeld(3, 0, [[2, 0], ["thumb", 1]], null, 2, "div", [], [[8, "className", 0]], null, null, null, null)), i0.ɵdid(4, 278528, null, 0, i2.NgStyle, [i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i0.ɵpid(131072, i2.AsyncPipe, [i0.ChangeDetectorRef])], function (_ck, _v) { var _co = _v.component; var currVal_2 = i0.ɵunv(_v, 4, 0, i0.ɵnov(_v, 5).transform(_co.scrollbarStyle)); _ck(_v, 4, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = i0.ɵinlineInterpolate(1, "ng-scrollbar ", _co.barClass, ""); _ck(_v, 2, 0, currVal_0); var currVal_1 = i0.ɵinlineInterpolate(1, "ng-scrollbar-thumb ", _co.thumbClass, ""); _ck(_v, 3, 0, currVal_1); }); }
exports.View_ɵa_0 = View_ɵa_0;
function View_ɵa_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ng-scrollbar-y", [], null, null, null, View_ɵa_0, RenderType_ɵa)), i0.ɵdid(1, 4374528, null, 0, i1.ɵa, [i2.DOCUMENT, i1.NgScrollbar, i0.PLATFORM_ID, i0.NgZone], null, null)], null, null); }
exports.View_ɵa_Host_0 = View_ɵa_Host_0;
var ɵaNgFactory = i0.ɵccf("ng-scrollbar-y", i1.ɵa, View_ɵa_Host_0, { barClass: "barClass", thumbClass: "thumbClass", scrollToDuration: "scrollToDuration" }, {}, []);
exports.ɵaNgFactory = ɵaNgFactory;
var styles_ɵc = [];
var RenderType_ɵc = i0.ɵcrt({ encapsulation: 2, styles: styles_ɵc, data: {} });
exports.RenderType_ɵc = RenderType_ɵc;
function View_ɵc_0(_l) { return i0.ɵvid(2, [i0.ɵqud(402653184, 1, { bar: 0 }), i0.ɵqud(402653184, 2, { thumb: 0 }), (_l()(), i0.ɵeld(2, 0, [[1, 0], ["bar", 1]], null, 3, "div", [], [[8, "className", 0]], [[null, "mousedown"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("mousedown" === en)) {
        var pd_0 = (_co.onScrollbarHolderClick($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵeld(3, 0, [[2, 0], ["thumb", 1]], null, 2, "div", [], [[8, "className", 0]], null, null, null, null)), i0.ɵdid(4, 278528, null, 0, i2.NgStyle, [i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i0.ɵpid(131072, i2.AsyncPipe, [i0.ChangeDetectorRef])], function (_ck, _v) { var _co = _v.component; var currVal_2 = i0.ɵunv(_v, 4, 0, i0.ɵnov(_v, 5).transform(_co.scrollbarStyle)); _ck(_v, 4, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = i0.ɵinlineInterpolate(1, "ng-scrollbar ", _co.barClass, ""); _ck(_v, 2, 0, currVal_0); var currVal_1 = i0.ɵinlineInterpolate(1, "ng-scrollbar-thumb ", _co.thumbClass, ""); _ck(_v, 3, 0, currVal_1); }); }
exports.View_ɵc_0 = View_ɵc_0;
function View_ɵc_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ng-scrollbar-x", [], null, null, null, View_ɵc_0, RenderType_ɵc)), i0.ɵdid(1, 4374528, null, 0, i1.ɵc, [i2.DOCUMENT, i1.NgScrollbar, i0.PLATFORM_ID, i3.Directionality, i0.NgZone], null, null)], null, null); }
exports.View_ɵc_Host_0 = View_ɵc_Host_0;
var ɵcNgFactory = i0.ɵccf("ng-scrollbar-x", i1.ɵc, View_ɵc_Host_0, { barClass: "barClass", thumbClass: "thumbClass", scrollToDuration: "scrollToDuration" }, {}, []);
exports.ɵcNgFactory = ɵcNgFactory;


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var routing_guard_1 = __webpack_require__(/*! ./core/routing/routing.guard */ "./src/app/core/routing/routing.guard.ts");
var ɵ0 = {
    animation: 'ForwardPage'
}, ɵ1 = {
    animation: 'LeftPage'
}, ɵ2 = {
    animation: 'RightPage'
}, ɵ3 = {
    animation: 'RightPage'
};
exports.ɵ0 = ɵ0;
exports.ɵ1 = ɵ1;
exports.ɵ2 = ɵ2;
exports.ɵ3 = ɵ3;
var routes = [
    {
        path: '',
        children: [
            {
                path: '',
                loadChildren: './screens/home/home.module#HomeModule',
                canActivate: [routing_guard_1.RoutingGuard],
                canDeactivate: [routing_guard_1.RoutingGuard],
                data: ɵ0
            },
            {
                path: 'graphql-and-websockets',
                loadChildren: './screens/graphql-and-websockets/graphql-and-websockets.module#GraphqlAndWebsocketsModule',
                canActivate: [routing_guard_1.RoutingGuard],
                canDeactivate: [routing_guard_1.RoutingGuard],
                data: ɵ1
            },
            {
                path: 'dnd-and-pwa',
                loadChildren: './screens/dnd-and-pwa/dnd-and-pwa.module#DndAndPwaModule',
                canActivate: [routing_guard_1.RoutingGuard],
                canDeactivate: [routing_guard_1.RoutingGuard],
                data: ɵ2
            },
            {
                path: 'emoji-chat',
                loadChildren: './screens/emoji-chat/emoji-chat.module#EmojiChatModule',
                canActivate: [routing_guard_1.RoutingGuard],
                canDeactivate: [routing_guard_1.RoutingGuard],
                data: ɵ3
            },
            {
                path: '**',
                redirectTo: ''
            }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.ngfactory.js":
/*!********************************************!*\
  !*** ./src/app/app.component.ngfactory.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./layout/layout.component.ngfactory */ "./src/app/layout/layout.component.ngfactory.js");
var i2 = __webpack_require__(/*! ./layout/layout.component */ "./src/app/layout/layout.component.ts");
var i3 = __webpack_require__(/*! ./core/routing/routing.service */ "./src/app/core/routing/routing.service.ts");
var i4 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var styles_AppComponent = [];
var RenderType_AppComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_AppComponent, data: {} });
exports.RenderType_AppComponent = RenderType_AppComponent;
function View_AppComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "app-layout", [], null, null, null, i1.View_LayoutComponent_0, i1.RenderType_LayoutComponent)), i0.ɵdid(1, 114688, null, 0, i2.LayoutComponent, [i0.PLATFORM_ID, i3.RoutingService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_AppComponent_0 = View_AppComponent_0;
function View_AppComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), i0.ɵdid(1, 114688, null, 0, i4.AppComponent, [i0.PLATFORM_ID, i3.RoutingService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_AppComponent_Host_0 = View_AppComponent_Host_0;
var AppComponentNgFactory = i0.ɵccf("app-root", i4.AppComponent, View_AppComponent_Host_0, {}, {}, []);
exports.AppComponentNgFactory = AppComponentNgFactory;


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var routing_service_1 = __webpack_require__(/*! ./core/routing/routing.service */ "./src/app/core/routing/routing.service.ts");
var common_1 = __webpack_require__(/*! @angular/common */ "@angular/common");
// const STATE_KEY_APP = makeStateKey('app');
var AppComponent = /** @class */ (function () {
    function AppComponent(platformId, routingService) {
        this.platformId = platformId;
        this.routingService = routingService;
    }
    AppComponent.prototype.initOnlyForBrowser = function () {
        var _this = this;
        window.addEventListener('beforeinstallprompt', function (event) {
            event.preventDefault();
            _this.pwaInstaller = event;
            setTimeout(function () {
                _this.pwaInstaller.prompt()
                    .then(console.log)
                    .catch(console.error);
            }, 5000);
        });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.routingService.init();
        if (common_1.isPlatformBrowser(this.platformId)) {
            this.initOnlyForBrowser();
        }
        // this.title = this.state.get(STATE_KEY_APP, this.DEFAULT_TITLE);
        // console.log('after 1-th get:', this.state.get(STATE_KEY_APP, '----'));
        // if (this.title === this.DEFAULT_TITLE) {
        //   this.http.get('https://jsonplaceholder.typicode.com/todos/1')
        //     .subscribe((result: any) => {
        //       this.title = result.title;
        //       this.state.set(STATE_KEY_APP, result.title);
        //       console.log('after set:', this.state.get(STATE_KEY_APP, '----'));
        //     });
        // }
    };
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/app.server.module.ngfactory.js":
/*!************************************************!*\
  !*** ./src/app/app.server.module.ngfactory.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./app.server.module */ "./src/app/app.server.module.ts");
var i2 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var i3 = __webpack_require__(/*! ../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
var i4 = __webpack_require__(/*! ./app.component.ngfactory */ "./src/app/app.component.ngfactory.js");
var i5 = __webpack_require__(/*! @angular/http */ "@angular/http");
var i6 = __webpack_require__(/*! @angular/platform-server */ "@angular/platform-server");
var i7 = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
var i8 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i9 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var i10 = __webpack_require__(/*! @angular/animations/browser */ "@angular/animations/browser");
var i11 = __webpack_require__(/*! @angular/platform-browser/animations */ "@angular/platform-browser/animations");
var i12 = __webpack_require__(/*! @angular/animations */ "@angular/animations");
var i13 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i14 = __webpack_require__(/*! ng-lazy-services */ "./dist/ng-lazy-services/bundles/ng-lazy-services.umd.js");
var i15 = __webpack_require__(/*! @angular/cdk/bidi */ "@angular/cdk/bidi");
var i16 = __webpack_require__(/*! @angular/material/core */ "@angular/material/core");
var i17 = __webpack_require__(/*! @angular/material/progress-spinner */ "@angular/material/progress-spinner");
var i18 = __webpack_require__(/*! @nguniversal/module-map-ngfactory-loader */ "@nguniversal/module-map-ngfactory-loader");
var i19 = __webpack_require__(/*! ./core/routing/routing.guard */ "./src/app/core/routing/routing.guard.ts");
var i20 = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
var i21 = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
var AppServerModuleNgFactory = i0.ɵcmf(i1.AppServerModule, [i2.AppComponent], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i3.ɵEmptyOutletComponentNgFactory, i4.AppComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i5.BrowserXhr, i6.ɵangular_packages_platform_server_platform_server_e, []), i0.ɵmpd(4608, i5.ResponseOptions, i5.BaseResponseOptions, []), i0.ɵmpd(4608, i5.XSRFStrategy, i6.ɵangular_packages_platform_server_platform_server_f, []), i0.ɵmpd(4608, i5.XHRBackend, i5.XHRBackend, [i5.BrowserXhr, i5.ResponseOptions, i5.XSRFStrategy]), i0.ɵmpd(4608, i5.RequestOptions, i5.BaseRequestOptions, []), i0.ɵmpd(5120, i5.Http, i6.ɵangular_packages_platform_server_platform_server_g, [i5.XHRBackend, i5.RequestOptions]), i0.ɵmpd(4608, i7.HttpXsrfTokenExtractor, i7.ɵangular_packages_common_http_http_g, [i8.DOCUMENT, i0.PLATFORM_ID, i7.ɵangular_packages_common_http_http_e]), i0.ɵmpd(4608, i7.ɵangular_packages_common_http_http_h, i7.ɵangular_packages_common_http_http_h, [i7.HttpXsrfTokenExtractor, i7.ɵangular_packages_common_http_http_f]), i0.ɵmpd(5120, i7.HTTP_INTERCEPTORS, function (p0_0) { return [p0_0]; }, [i7.ɵangular_packages_common_http_http_h]), i0.ɵmpd(4608, i7.XhrFactory, i6.ɵangular_packages_platform_server_platform_server_e, []), i0.ɵmpd(4608, i7.HttpXhrBackend, i7.HttpXhrBackend, [i7.XhrFactory]), i0.ɵmpd(6144, i7.HttpBackend, null, [i7.HttpXhrBackend]), i0.ɵmpd(5120, i7.HttpHandler, i6.ɵangular_packages_platform_server_platform_server_h, [i7.HttpBackend, i0.Injector]), i0.ɵmpd(4608, i7.HttpClient, i7.HttpClient, [i7.HttpHandler]), i0.ɵmpd(4608, i7.ɵangular_packages_common_http_http_d, i7.ɵangular_packages_common_http_http_d, []), i0.ɵmpd(5120, i0.LOCALE_ID, i0.ɵangular_packages_core_core_r, [[3, i0.LOCALE_ID]]), i0.ɵmpd(4608, i8.NgLocalization, i8.NgLocaleLocalization, [i0.LOCALE_ID, [2, i8.ɵangular_packages_common_common_a]]), i0.ɵmpd(5120, i0.IterableDiffers, i0.ɵangular_packages_core_core_p, []), i0.ɵmpd(5120, i0.KeyValueDiffers, i0.ɵangular_packages_core_core_q, []), i0.ɵmpd(4608, i9.DomSanitizer, i9.ɵDomSanitizerImpl, [i8.DOCUMENT]), i0.ɵmpd(6144, i0.Sanitizer, null, [i9.DomSanitizer]), i0.ɵmpd(4608, i9.HAMMER_GESTURE_CONFIG, i9.HammerGestureConfig, []), i0.ɵmpd(5120, i9.EVENT_MANAGER_PLUGINS, function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3, p3_0) { return [new i9.ɵDomEventsPlugin(p0_0, p0_1, p0_2), new i9.ɵKeyEventsPlugin(p1_0), new i9.ɵHammerGesturesPlugin(p2_0, p2_1, p2_2, p2_3), new i6.ɵangular_packages_platform_server_platform_server_d(p3_0)]; }, [i8.DOCUMENT, i0.NgZone, i0.PLATFORM_ID, i8.DOCUMENT, i8.DOCUMENT, i9.HAMMER_GESTURE_CONFIG, i0.ɵConsole, [2, i9.HAMMER_LOADER], i9.DOCUMENT]), i0.ɵmpd(4608, i9.EventManager, i9.EventManager, [i9.EVENT_MANAGER_PLUGINS, i0.NgZone]), i0.ɵmpd(135680, i9.ɵDomSharedStylesHost, i9.ɵDomSharedStylesHost, [i8.DOCUMENT]), i0.ɵmpd(4608, i9.ɵDomRendererFactory2, i9.ɵDomRendererFactory2, [i9.EventManager, i9.ɵDomSharedStylesHost]), i0.ɵmpd(4608, i6.ɵangular_packages_platform_server_platform_server_c, i6.ɵangular_packages_platform_server_platform_server_c, [i9.DOCUMENT, [2, i9.ɵTRANSITION_ID]]), i0.ɵmpd(6144, i9.ɵSharedStylesHost, null, [i6.ɵangular_packages_platform_server_platform_server_c]), i0.ɵmpd(4608, i6.ɵServerRendererFactory2, i6.ɵServerRendererFactory2, [i9.EventManager, i0.NgZone, i9.DOCUMENT, i9.ɵSharedStylesHost]), i0.ɵmpd(4608, i10.AnimationDriver, i10.ɵNoopAnimationDriver, []), i0.ɵmpd(5120, i10.ɵAnimationStyleNormalizer, i11.ɵangular_packages_platform_browser_animations_animations_b, []), i0.ɵmpd(4608, i10.ɵAnimationEngine, i11.ɵInjectableAnimationEngine, [i8.DOCUMENT, i10.AnimationDriver, i10.ɵAnimationStyleNormalizer]), i0.ɵmpd(5120, i0.RendererFactory2, i6.ɵangular_packages_platform_server_platform_server_a, [i6.ɵServerRendererFactory2, i10.ɵAnimationEngine, i0.NgZone]), i0.ɵmpd(4352, i0.Testability, null, []), i0.ɵmpd(4608, i12.AnimationBuilder, i11.ɵBrowserAnimationBuilder, [i0.RendererFactory2, i9.DOCUMENT]), i0.ɵmpd(4608, i8.ViewportScroller, i8.ɵNullViewportScroller, []), i0.ɵmpd(4608, i9.TransferState, i9.TransferState, []), i0.ɵmpd(5120, i13.ActivatedRoute, i13.ɵangular_packages_router_router_g, [i13.Router]), i0.ɵmpd(4608, i13.NoPreloading, i13.NoPreloading, []), i0.ɵmpd(6144, i13.PreloadingStrategy, null, [i13.NoPreloading]), i0.ɵmpd(135680, i13.RouterPreloader, i13.RouterPreloader, [i13.Router, i0.NgModuleFactoryLoader, i0.Compiler, i0.Injector, i13.PreloadingStrategy]), i0.ɵmpd(4608, i13.PreloadAllModules, i13.PreloadAllModules, []), i0.ɵmpd(5120, i13.ɵangular_packages_router_router_n, i13.ɵangular_packages_router_router_c, [i13.Router, i8.ViewportScroller, i13.ROUTER_CONFIGURATION]), i0.ɵmpd(5120, i13.ROUTER_INITIALIZER, i13.ɵangular_packages_router_router_j, [i13.ɵangular_packages_router_router_h]), i0.ɵmpd(5120, i0.APP_BOOTSTRAP_LISTENER, function (p0_0) { return [p0_0]; }, [i13.ROUTER_INITIALIZER]), i0.ɵmpd(5120, i6.BEFORE_APP_SERIALIZED, function (p0_0, p0_1, p0_2) { return [i6.ɵangular_packages_platform_server_platform_server_b(p0_0, p0_1, p0_2)]; }, [i9.DOCUMENT, i0.APP_ID, i9.TransferState]), i0.ɵmpd(1073742336, i5.HttpModule, i5.HttpModule, []), i0.ɵmpd(1073742336, i7.HttpClientXsrfModule, i7.HttpClientXsrfModule, []), i0.ɵmpd(1073742336, i7.HttpClientModule, i7.HttpClientModule, []), i0.ɵmpd(1073742336, i8.CommonModule, i8.CommonModule, []), i0.ɵmpd(1024, i0.ErrorHandler, i9.ɵangular_packages_platform_browser_platform_browser_a, []), i0.ɵmpd(1024, i0.NgProbeToken, function () { return [i13.ɵangular_packages_router_router_b()]; }, []), i0.ɵmpd(512, i13.ɵangular_packages_router_router_h, i13.ɵangular_packages_router_router_h, [i0.Injector]), i0.ɵmpd(256, i0.APP_ID, "app-id", []), i0.ɵmpd(2048, i9.ɵTRANSITION_ID, null, [i0.APP_ID]), i0.ɵmpd(1024, i0.APP_INITIALIZER, function (p0_0, p1_0, p2_0, p2_1, p2_2) { return [i9.ɵangular_packages_platform_browser_platform_browser_j(p0_0), i13.ɵangular_packages_router_router_i(p1_0), i9.ɵangular_packages_platform_browser_platform_browser_h(p2_0, p2_1, p2_2)]; }, [[2, i0.NgProbeToken], i13.ɵangular_packages_router_router_h, i9.ɵTRANSITION_ID, i8.DOCUMENT, i0.Injector]), i0.ɵmpd(512, i0.ApplicationInitStatus, i0.ApplicationInitStatus, [[2, i0.APP_INITIALIZER]]), i0.ɵmpd(131584, i0.ApplicationRef, i0.ApplicationRef, [i0.NgZone, i0.ɵConsole, i0.Injector, i0.ErrorHandler, i0.ComponentFactoryResolver, i0.ApplicationInitStatus]), i0.ɵmpd(1073742336, i0.ApplicationModule, i0.ApplicationModule, [i0.ApplicationRef]), i0.ɵmpd(1073742336, i9.BrowserModule, i9.BrowserModule, [[3, i9.BrowserModule]]), i0.ɵmpd(1073742336, i11.NoopAnimationsModule, i11.NoopAnimationsModule, []), i0.ɵmpd(1073742336, i6.ServerModule, i6.ServerModule, []), i0.ɵmpd(1073742336, i14.NgLazyServicesModule, i14.NgLazyServicesModule, []), i0.ɵmpd(1073742336, i9.BrowserTransferStateModule, i9.BrowserTransferStateModule, []), i0.ɵmpd(1073742336, i15.BidiModule, i15.BidiModule, []), i0.ɵmpd(1073742336, i16.MatCommonModule, i16.MatCommonModule, [[2, i16.MATERIAL_SANITY_CHECKS], [2, i9.HAMMER_LOADER]]), i0.ɵmpd(1073742336, i17.MatProgressSpinnerModule, i17.MatProgressSpinnerModule, []), i0.ɵmpd(1024, i13.ɵangular_packages_router_router_a, i13.ɵangular_packages_router_router_e, [[3, i13.Router]]), i0.ɵmpd(512, i13.UrlSerializer, i13.DefaultUrlSerializer, []), i0.ɵmpd(512, i13.ChildrenOutletContexts, i13.ChildrenOutletContexts, []), i0.ɵmpd(256, i13.ROUTER_CONFIGURATION, {}, []), i0.ɵmpd(1024, i8.LocationStrategy, i13.ɵangular_packages_router_router_d, [i8.PlatformLocation, [2, i8.APP_BASE_HREF], i13.ROUTER_CONFIGURATION]), i0.ɵmpd(512, i8.Location, i8.Location, [i8.LocationStrategy]), i0.ɵmpd(512, i0.Compiler, i0.Compiler, []), i0.ɵmpd(512, i0.NgModuleFactoryLoader, i18.ModuleMapNgFactoryLoader, [i0.Compiler, i18.MODULE_MAP]), i0.ɵmpd(1024, i13.ROUTES, function () { return [[{ path: "", children: [{ path: "", loadChildren: "./screens/home/home.module#HomeModule", canActivate: [i19.RoutingGuard], canDeactivate: [i19.RoutingGuard], data: i20.ɵ0 }, { path: "graphql-and-websockets", loadChildren: "./screens/graphql-and-websockets/graphql-and-websockets.module#GraphqlAndWebsocketsModule", canActivate: [i19.RoutingGuard], canDeactivate: [i19.RoutingGuard], data: i20.ɵ1 }, { path: "dnd-and-pwa", loadChildren: "./screens/dnd-and-pwa/dnd-and-pwa.module#DndAndPwaModule", canActivate: [i19.RoutingGuard], canDeactivate: [i19.RoutingGuard], data: i20.ɵ2 }, { path: "emoji-chat", loadChildren: "./screens/emoji-chat/emoji-chat.module#EmojiChatModule", canActivate: [i19.RoutingGuard], canDeactivate: [i19.RoutingGuard], data: i20.ɵ3 }, { path: "**", redirectTo: "" }] }]]; }, []), i0.ɵmpd(1024, i13.Router, i13.ɵangular_packages_router_router_f, [i0.ApplicationRef, i13.UrlSerializer, i13.ChildrenOutletContexts, i8.Location, i0.Injector, i0.NgModuleFactoryLoader, i0.Compiler, i13.ROUTES, i13.ROUTER_CONFIGURATION, [2, i13.UrlHandlingStrategy], [2, i13.RouteReuseStrategy]]), i0.ɵmpd(1073742336, i13.RouterModule, i13.RouterModule, [[2, i13.ɵangular_packages_router_router_a], [2, i13.Router]]), i0.ɵmpd(1073742336, i20.AppRoutingModule, i20.AppRoutingModule, []), i0.ɵmpd(1073742336, i21.AppModule, i21.AppModule, []), i0.ɵmpd(1073742336, i6.ServerTransferStateModule, i6.ServerTransferStateModule, []), i0.ɵmpd(1073742336, i18.ModuleMapLoaderModule, i18.ModuleMapLoaderModule, []), i0.ɵmpd(1073742336, i1.AppServerModule, i1.AppServerModule, []), i0.ɵmpd(256, i7.ɵangular_packages_common_http_http_e, "XSRF-TOKEN", []), i0.ɵmpd(256, i7.ɵangular_packages_common_http_http_f, "X-XSRF-TOKEN", []), i0.ɵmpd(256, i0.ɵAPP_ROOT, true, []), i0.ɵmpd(256, i11.ANIMATION_MODULE_TYPE, "NoopAnimations", []), i0.ɵmpd(256, i14.NgLazyServicesConfigToken, { D3: "src/app/dynamic/d3/d3.module#D3Module" }, [])]); });
exports.AppServerModuleNgFactory = AppServerModuleNgFactory;


/***/ }),

/***/ "./src/app/app.server.module.ts":
/*!**************************************!*\
  !*** ./src/app/app.server.module.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AppServerModule = /** @class */ (function () {
    function AppServerModule() {
    }
    return AppServerModule;
}());
exports.AppServerModule = AppServerModule;


/***/ }),

/***/ "./src/app/core/routing/routing.guard.ts":
/*!***********************************************!*\
  !*** ./src/app/core/routing/routing.guard.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var routing_service_1 = __webpack_require__(/*! ./routing.service */ "./src/app/core/routing/routing.service.ts");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./routing.service */ "./src/app/core/routing/routing.service.ts");
var RoutingGuard = /** @class */ (function () {
    function RoutingGuard(routingService) {
        this.routingService = routingService;
    }
    RoutingGuard.prototype.canActivate = function (next, state) {
        return this.routingService.getRoutingStatus().pipe(operators_1.map(function (status) { return status !== routing_service_1.RoutingStatus.Guarded; }));
    };
    RoutingGuard.prototype.canDeactivate = function () {
        return this.routingService.getRoutingStatus().pipe(operators_1.map(function (status) { return status !== routing_service_1.RoutingStatus.Guarded; }));
    };
    RoutingGuard.ngInjectableDef = i0.defineInjectable({ factory: function RoutingGuard_Factory() { return new RoutingGuard(i0.inject(i1.RoutingService)); }, token: RoutingGuard, providedIn: "root" });
    return RoutingGuard;
}());
exports.RoutingGuard = RoutingGuard;


/***/ }),

/***/ "./src/app/core/routing/routing.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/routing/routing.service.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
var animations_1 = __webpack_require__(/*! ./../../layout/animations */ "./src/app/layout/animations.ts");
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var RoutingStatus;
(function (RoutingStatus) {
    RoutingStatus[RoutingStatus["Started"] = 0] = "Started";
    RoutingStatus[RoutingStatus["Guarded"] = 1] = "Guarded";
    RoutingStatus[RoutingStatus["Ended"] = 2] = "Ended";
    RoutingStatus[RoutingStatus["Loading"] = 3] = "Loading";
})(RoutingStatus = exports.RoutingStatus || (exports.RoutingStatus = {}));
var RoutingService = /** @class */ (function () {
    function RoutingService(router) {
        this.router = router;
        this._routingStatus = new rxjs_1.BehaviorSubject(RoutingStatus.Ended);
    }
    RoutingService.prototype.getRoutingStatus = function () {
        return this._routingStatus.pipe(operators_1.distinctUntilChanged());
    };
    RoutingService.prototype.init = function () {
        var _this = this;
        this.router.events
            .subscribe(function (event) {
            if (event instanceof router_1.NavigationStart) {
                clearTimeout(_this._endRoutingTimer);
                _this._routingStatus.next(RoutingStatus.Started);
            }
            else if (event instanceof router_1.RouteConfigLoadStart) {
                _this._routingStatus.next(RoutingStatus.Loading);
            }
            else if (event instanceof router_1.GuardsCheckEnd) {
                _this._routingStatus.next(RoutingStatus.Guarded);
            }
            else if (event instanceof router_1.NavigationEnd ||
                event instanceof router_1.NavigationCancel ||
                event instanceof router_1.NavigationError) {
                _this._endRoutingTimer = setTimeout(function () { return _this._routingStatus.next(RoutingStatus.Ended); }, animations_1.ANIMATION_DURATION);
            }
        });
    };
    RoutingService.ngInjectableDef = i0.defineInjectable({ factory: function RoutingService_Factory() { return new RoutingService(i0.inject(i1.Router)); }, token: RoutingService, providedIn: "root" });
    return RoutingService;
}());
exports.RoutingService = RoutingService;


/***/ }),

/***/ "./src/app/dynamic/dynamic-modules.ts":
/*!********************************************!*\
  !*** ./src/app/dynamic/dynamic-modules.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DynamicModule;
(function (DynamicModule) {
    DynamicModule["D3"] = "D3";
})(DynamicModule = exports.DynamicModule || (exports.DynamicModule = {}));
exports.DynamicModules = {
    D3: 'src/app/dynamic/d3/d3.module#D3Module'
};


/***/ }),

/***/ "./src/app/layout/animations.ts":
/*!**************************************!*\
  !*** ./src/app/layout/animations.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = __webpack_require__(/*! @angular/animations */ "@angular/animations");
exports.ANIMATION_DURATION = 600;
var ANIMATE = exports.ANIMATION_DURATION + "ms ease-out";
var TRANSLATE_Z = '5em';
exports.layoutAnimations = [
    animations_1.trigger('enterAnimation', [
        animations_1.transition('hidden => visible', [])
    ]),
    animations_1.trigger('routeAnimations', [
        animations_1.transition('ForwardPage => RightPage', [
            animations_1.query(':leave', animations_1.style({ transform: "rotateY(0deg) translateZ(" + TRANSLATE_Z + ")" })),
            animations_1.query(':enter', animations_1.style({ transform: "rotateY(90deg) translateZ(" + TRANSLATE_Z + ")" })),
            animations_1.query(':leave', animations_1.animateChild()),
            animations_1.group([
                animations_1.query(':leave', animations_1.animate(ANIMATE, animations_1.style({ transform: "rotateY(-90deg) translateZ(" + TRANSLATE_Z + ")" }))),
                animations_1.query(':enter', animations_1.animate(ANIMATE, animations_1.style({ zIndex: 1, transform: "rotateY(0deg) translateZ(" + TRANSLATE_Z + ")" })))
            ]),
            animations_1.query(':enter', animations_1.animateChild()),
        ]),
        animations_1.transition('RightPage => ForwardPage', [
            animations_1.query(':leave', animations_1.style({ transform: "rotateY(0deg) translateZ(" + TRANSLATE_Z + ")" })),
            animations_1.query(':enter', animations_1.style({ transform: "rotateY(-90deg) translateZ(" + TRANSLATE_Z + ")" })),
            animations_1.query(':leave', animations_1.animateChild()),
            animations_1.group([
                animations_1.query(':leave', animations_1.animate(ANIMATE, animations_1.style({ transform: "rotateY(90deg) translateZ(" + TRANSLATE_Z + ")" }))),
                animations_1.query(':enter', animations_1.animate(ANIMATE, animations_1.style({ zIndex: 1, transform: "rotateY(0deg) translateZ(" + TRANSLATE_Z + ")" })))
            ]),
            animations_1.query(':enter', animations_1.animateChild()),
        ]),
        animations_1.transition('ForwardPage => LeftPage', [
            animations_1.query(':leave', animations_1.style({ transform: "rotateY(0deg) translateZ(" + TRANSLATE_Z + ")" })),
            animations_1.query(':enter', animations_1.style({ transform: "rotateY(-90deg) translateZ(" + TRANSLATE_Z + ")" })),
            animations_1.query(':leave', animations_1.animateChild()),
            animations_1.group([
                animations_1.query(':leave', animations_1.animate(ANIMATE, animations_1.style({ transform: "rotateY(90deg) translateZ(" + TRANSLATE_Z + ")" }))),
                animations_1.query(':enter', animations_1.animate(ANIMATE, animations_1.style({ zIndex: 1, transform: "rotateY(0deg) translateZ(" + TRANSLATE_Z + ")" })))
            ]),
            animations_1.query(':enter', animations_1.animateChild()),
        ]),
        animations_1.transition('LeftPage => ForwardPage', [
            animations_1.query(':leave', animations_1.style({ transform: "rotateY(0deg) translateZ(" + TRANSLATE_Z + ")" })),
            animations_1.query(':enter', animations_1.style({ transform: "rotateY(90deg) translateZ(" + TRANSLATE_Z + ")" })),
            animations_1.query(':leave', animations_1.animateChild()),
            animations_1.group([
                animations_1.query(':leave', animations_1.animate(ANIMATE, animations_1.style({ transform: "rotateY(-90deg) translateZ(" + TRANSLATE_Z + ")" }))),
                animations_1.query(':enter', animations_1.animate(ANIMATE, animations_1.style({ zIndex: 1, transform: "rotateY(0deg) translateZ(" + TRANSLATE_Z + ")" })))
            ]),
            animations_1.query(':enter', animations_1.animateChild()),
        ]),
    ])
];


/***/ }),

/***/ "./src/app/layout/layout.component.ngfactory.js":
/*!******************************************************!*\
  !*** ./src/app/layout/layout.component.ngfactory.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./layout.component.scss.shim.ngstyle */ "./src/app/layout/layout.component.scss.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i3 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i4 = __webpack_require__(/*! ../../../node_modules/@angular/material/progress-spinner/typings/index.ngfactory */ "./node_modules/@angular/material/progress-spinner/typings/index.ngfactory.js");
var i5 = __webpack_require__(/*! @angular/material/progress-spinner */ "@angular/material/progress-spinner");
var i6 = __webpack_require__(/*! @angular/cdk/platform */ "@angular/cdk/platform");
var i7 = __webpack_require__(/*! @angular/platform-browser/animations */ "@angular/platform-browser/animations");
var i8 = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");
var i9 = __webpack_require__(/*! ../core/routing/routing.service */ "./src/app/core/routing/routing.service.ts");
var styles_LayoutComponent = [i0.styles];
var RenderType_LayoutComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_LayoutComponent, data: { "animation": [{ type: 7, name: "enterAnimation", definitions: [{ type: 1, expr: "hidden => visible", animation: [], options: null }], options: {} }, { type: 7, name: "routeAnimations", definitions: [{ type: 1, expr: "ForwardPage => RightPage", animation: [{ type: 11, selector: ":leave", animation: { type: 6, styles: { transform: "rotateY(0deg) translateZ(5em)" }, offset: null }, options: null }, { type: 11, selector: ":enter", animation: { type: 6, styles: { transform: "rotateY(90deg) translateZ(5em)" }, offset: null }, options: null }, { type: 11, selector: ":leave", animation: { type: 9, options: null }, options: null }, { type: 3, steps: [{ type: 11, selector: ":leave", animation: { type: 4, styles: { type: 6, styles: { transform: "rotateY(-90deg) translateZ(5em)" }, offset: null }, timings: "600ms ease-out" }, options: null }, { type: 11, selector: ":enter", animation: { type: 4, styles: { type: 6, styles: { zIndex: 1, transform: "rotateY(0deg) translateZ(5em)" }, offset: null }, timings: "600ms ease-out" }, options: null }], options: null }, { type: 11, selector: ":enter", animation: { type: 9, options: null }, options: null }], options: null }, { type: 1, expr: "RightPage => ForwardPage", animation: [{ type: 11, selector: ":leave", animation: { type: 6, styles: { transform: "rotateY(0deg) translateZ(5em)" }, offset: null }, options: null }, { type: 11, selector: ":enter", animation: { type: 6, styles: { transform: "rotateY(-90deg) translateZ(5em)" }, offset: null }, options: null }, { type: 11, selector: ":leave", animation: { type: 9, options: null }, options: null }, { type: 3, steps: [{ type: 11, selector: ":leave", animation: { type: 4, styles: { type: 6, styles: { transform: "rotateY(90deg) translateZ(5em)" }, offset: null }, timings: "600ms ease-out" }, options: null }, { type: 11, selector: ":enter", animation: { type: 4, styles: { type: 6, styles: { zIndex: 1, transform: "rotateY(0deg) translateZ(5em)" }, offset: null }, timings: "600ms ease-out" }, options: null }], options: null }, { type: 11, selector: ":enter", animation: { type: 9, options: null }, options: null }], options: null }, { type: 1, expr: "ForwardPage => LeftPage", animation: [{ type: 11, selector: ":leave", animation: { type: 6, styles: { transform: "rotateY(0deg) translateZ(5em)" }, offset: null }, options: null }, { type: 11, selector: ":enter", animation: { type: 6, styles: { transform: "rotateY(-90deg) translateZ(5em)" }, offset: null }, options: null }, { type: 11, selector: ":leave", animation: { type: 9, options: null }, options: null }, { type: 3, steps: [{ type: 11, selector: ":leave", animation: { type: 4, styles: { type: 6, styles: { transform: "rotateY(90deg) translateZ(5em)" }, offset: null }, timings: "600ms ease-out" }, options: null }, { type: 11, selector: ":enter", animation: { type: 4, styles: { type: 6, styles: { zIndex: 1, transform: "rotateY(0deg) translateZ(5em)" }, offset: null }, timings: "600ms ease-out" }, options: null }], options: null }, { type: 11, selector: ":enter", animation: { type: 9, options: null }, options: null }], options: null }, { type: 1, expr: "LeftPage => ForwardPage", animation: [{ type: 11, selector: ":leave", animation: { type: 6, styles: { transform: "rotateY(0deg) translateZ(5em)" }, offset: null }, options: null }, { type: 11, selector: ":enter", animation: { type: 6, styles: { transform: "rotateY(90deg) translateZ(5em)" }, offset: null }, options: null }, { type: 11, selector: ":leave", animation: { type: 9, options: null }, options: null }, { type: 3, steps: [{ type: 11, selector: ":leave", animation: { type: 4, styles: { type: 6, styles: { transform: "rotateY(-90deg) translateZ(5em)" }, offset: null }, timings: "600ms ease-out" }, options: null }, { type: 11, selector: ":enter", animation: { type: 4, styles: { type: 6, styles: { zIndex: 1, transform: "rotateY(0deg) translateZ(5em)" }, offset: null }, timings: "600ms ease-out" }, options: null }], options: null }, { type: 11, selector: ":enter", animation: { type: 9, options: null }, options: null }], options: null }], options: {} }] } });
exports.RenderType_LayoutComponent = RenderType_LayoutComponent;
function View_LayoutComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 16, "div", [["class", "wrapper"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 15, "div", [["class", "container"]], null, null, null, null, null)), i1.ɵdid(2, 278528, null, 0, i2.NgClass, [i1.IterableDiffers, i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i1.ɵpod(3, { pulse: 0, loaded: 1 }), i1.ɵdid(4, 278528, null, 0, i2.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(5, { backgroundImage: 0 }), (_l()(), i1.ɵeld(6, 0, null, null, 10, "div", [["class", "content"]], null, null, null, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 9, "div", [["class", "cube"]], [[24, "@enterAnimation", 0]], null, null, null, null)), i1.ɵdid(8, 278528, null, 0, i2.NgClass, [i1.IterableDiffers, i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i1.ɵpid(131072, i2.AsyncPipe, [i1.ChangeDetectorRef]), i1.ɵpod(10, { "is-loading": 0 }), (_l()(), i1.ɵeld(11, 0, null, null, 2, "div", [["class", "side"]], [[24, "@routeAnimations", 0]], null, null, null, null)), (_l()(), i1.ɵeld(12, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), i1.ɵdid(13, 212992, [["outlet", 4]], 0, i3.RouterOutlet, [i3.ChildrenOutletContexts, i1.ViewContainerRef, i1.ComponentFactoryResolver, [8, null], i1.ChangeDetectorRef], null, null), (_l()(), i1.ɵeld(14, 0, null, null, 2, "div", [["class", "dark-screen"]], null, null, null, null, null)), (_l()(), i1.ɵeld(15, 0, null, null, 1, "mat-spinner", [["class", "mat-spinner mat-progress-spinner"], ["mode", "indeterminate"], ["role", "progressbar"]], [[2, "_mat-animation-noopable", null], [4, "width", "px"], [4, "height", "px"]], null, null, i4.View_MatSpinner_0, i4.RenderType_MatSpinner)), i1.ɵdid(16, 49152, null, 0, i5.MatSpinner, [i1.ElementRef, i6.Platform, [2, i2.DOCUMENT], [2, i7.ANIMATION_MODULE_TYPE], i5.MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "container"; var currVal_1 = _ck(_v, 3, 0, _co.backgroundPulse, (_co.enterAnimationState === "visible")); _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_2 = _ck(_v, 5, 0, (_co.backgroundUrl ? (("url(" + _co.backgroundUrl) + ")") : null)); _ck(_v, 4, 0, currVal_2); var currVal_4 = "cube"; var currVal_5 = _ck(_v, 10, 0, i1.ɵunv(_v, 8, 1, i1.ɵnov(_v, 9).transform(_co.isLoading))); _ck(_v, 8, 0, currVal_4, currVal_5); _ck(_v, 13, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_3 = _co.enterAnimationState; _ck(_v, 7, 0, currVal_3); var currVal_6 = _co.prepareRoute(i1.ɵnov(_v, 13)); _ck(_v, 11, 0, currVal_6); var currVal_7 = i1.ɵnov(_v, 16)._noopAnimations; var currVal_8 = i1.ɵnov(_v, 16).diameter; var currVal_9 = i1.ɵnov(_v, 16).diameter; _ck(_v, 15, 0, currVal_7, currVal_8, currVal_9); }); }
exports.View_LayoutComponent_0 = View_LayoutComponent_0;
function View_LayoutComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-layout", [], null, null, null, View_LayoutComponent_0, RenderType_LayoutComponent)), i1.ɵdid(1, 114688, null, 0, i8.LayoutComponent, [i1.PLATFORM_ID, i9.RoutingService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_LayoutComponent_Host_0 = View_LayoutComponent_Host_0;
var LayoutComponentNgFactory = i1.ɵccf("app-layout", i8.LayoutComponent, View_LayoutComponent_Host_0, {}, {}, []);
exports.LayoutComponentNgFactory = LayoutComponentNgFactory;


/***/ }),

/***/ "./src/app/layout/layout.component.scss.shim.ngstyle.js":
/*!**************************************************************!*\
  !*** ./src/app/layout/layout.component.scss.shim.ngstyle.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = ["[_nghost-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  max-height: 100vh;\n  max-width: 100vw;\n  overflow: hidden; }\n\n.container[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  opacity: 0;\n  background: rgba(19, 21, 31, 0.85) url(/assets/blured-background.jpg) 50% 50% no-repeat;\n  transition: background-image 1s ease-in, opacity .1s linear; }\n\n.container.loaded[_ngcontent-%COMP%] {\n    opacity: 1; }\n\n@media screen and (max-width: 599px) {\n    .container[_ngcontent-%COMP%] {\n      top: 0; } }\n\n.content[_ngcontent-%COMP%] {\n  overflow: hidden; }\n\n.cube[_ngcontent-%COMP%] {\n  height: 90%;\n  width: 10em;\n  position: absolute;\n  background: rgba(20, 22, 22, 0);\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  -webkit-perspective: 1000px;\n          perspective: 1000px;\n  font-size: 100px;\n  -webkit-animation: fadeOut 2s linear 1 forwards;\n          animation: fadeOut 2s linear 1 forwards; }\n\n@-webkit-keyframes fadeOut {\n  0%, 80% {\n    background: rgba(20, 22, 22, 0.4); }\n  100% {\n    background: rgba(20, 22, 22, 0); } }\n\n@keyframes fadeOut {\n  0%, 80% {\n    background: rgba(20, 22, 22, 0.4); }\n  100% {\n    background: rgba(20, 22, 22, 0); } }\n\n@media screen and (max-height: 800px) {\n    .cube[_ngcontent-%COMP%] {\n      font-size: 85px; } }\n\n@media screen and (max-width: 1024px) {\n    .cube[_ngcontent-%COMP%] {\n      font-size: 9.6vw;\n      height: 95%; } }\n\n@media screen and (max-width: 599px) {\n    .cube[_ngcontent-%COMP%] {\n      height: 97.3%;\n      font-size: 9.5vw; } }\n\n.cube[_ngcontent-%COMP%]   .dark-screen[_ngcontent-%COMP%] {\n    background: #000;\n    opacity: 0;\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    transition: opacity .7s ease-out;\n    pointer-events: none;\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n\n.cube.is-loading[_ngcontent-%COMP%]   .side[_ngcontent-%COMP%] {\n    -webkit-animation: pulse 2s infinite;\n            animation: pulse 2s infinite; }\n\n@-webkit-keyframes pulse {\n  0%, 100% {\n    -webkit-transform: scale(1) translateZ(-5em);\n            transform: scale(1) translateZ(-5em); }\n  50% {\n    -webkit-transform: scale(1.01) translateZ(-5em);\n            transform: scale(1.01) translateZ(-5em); } }\n\n@keyframes pulse {\n  0%, 100% {\n    -webkit-transform: scale(1) translateZ(-5em);\n            transform: scale(1) translateZ(-5em); }\n  50% {\n    -webkit-transform: scale(1.01) translateZ(-5em);\n            transform: scale(1.01) translateZ(-5em); } }\n\n.cube.is-loading[_ngcontent-%COMP%]   .dark-screen[_ngcontent-%COMP%] {\n    -webkit-animation: pulseDarkScreen 2s infinite;\n            animation: pulseDarkScreen 2s infinite;\n    opacity: .7;\n    transition: opacity .3s ease-out; }\n\n@-webkit-keyframes pulseDarkScreen {\n  0%, 100% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  50% {\n    -webkit-transform: scale(1.01);\n            transform: scale(1.01); } }\n\n@keyframes pulseDarkScreen {\n  0%, 100% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  50% {\n    -webkit-transform: scale(1.01);\n            transform: scale(1.01); } }\n\n.side[_ngcontent-%COMP%] {\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  -webkit-transform: translateZ(-5em);\n          transform: translateZ(-5em);\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0; }\n\n[_nghost-%COMP%]     .side > :not(router-outlet) {\n  color: #fff;\n  box-shadow: 0 0 30px rgba(0, 0, 0, 0.6);\n  position: absolute;\n  -webkit-transform: rotateY(0deg) translateZ(5em);\n          transform: rotateY(0deg) translateZ(5em);\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  background: rgba(19, 21, 31, 0.85) url(/assets/blured-background.jpg) 50% 50% no-repeat; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L0Q6XFxwcm9ncmFtbWluZ1xcdHNhaXRlY2hcXHBhY2thZ2VzXFx1bml2ZXJzYWwtYXBwL3NyY1xcYXBwXFxsYXlvdXRcXGxheW91dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L0Q6XFxwcm9ncmFtbWluZ1xcdHNhaXRlY2hcXHBhY2thZ2VzXFx1bml2ZXJzYWwtYXBwL25vZGVfbW9kdWxlc1xcY29tcGFzcy1taXhpbnNcXGxpYlxcY29tcGFzc1xcY3NzM1xcX3NoYXJlZC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsbUJBQWtCO0VBQ2xCLE9BQU07RUFDTixTQUFRO0VBQ1IsVUFBUztFQUNULFFBQU87RUFDUCxrQkFBaUI7RUFDakIsaUJBQWdCO0VBQ2hCLGlCQUFnQixFQUNqQjs7QUFFRDtFQUNFLG1CQUFrQjtFQUNsQixRQUFPO0VBQ1AsU0FBUTtFQUNSLE9BQU07RUFDTixVQUFTO0VBQ1QsV0FBVTtFQUNWLHdGQUF1RjtFQUN2Riw0REFBMkQsRUFPNUQ7O0FBZkQ7SUFVSSxXQUFVLEVBQ1g7O0FBQ0Q7SUFaRjtNQWFJLE9BQU0sRUFFVCxFQUFBOztBQUVEO0VBQ0UsaUJBQWdCLEVBQ2pCOztBQUVEO0VBQ0UsWUFBVztFQUNYLFlBQVc7RUFDWCxtQkFBa0I7RUFDbEIsZ0NBQStCO0VBQy9CLFFBQU07RUFDTixTQUFPO0VBQ1AsT0FBTTtFQUNOLFVBQVM7RUFDVCxhQUFZO0VBQ1osNEJBQW1CO1VBQW5CLG9CQUFtQjtFQUNuQixpQkFBZ0I7RUFDaEIsZ0RBQXVDO1VBQXZDLHdDQUF1QyxFQW1FeEM7O0FBakVDO0VBQ0U7SUFDRSxrQ0FBaUMsRUFBQTtFQUVuQztJQUNFLGdDQUErQixFQUFBLEVBQUE7O0FBTG5DO0VBQ0U7SUFDRSxrQ0FBaUMsRUFBQTtFQUVuQztJQUNFLGdDQUErQixFQUFBLEVBQUE7O0FBSW5DO0lBdkJGO01Bd0JJLGdCQUFlLEVBdURsQixFQUFBOztBQXBEQztJQTNCRjtNQTRCSSxpQkFBZ0I7TUFDaEIsWUFBVyxFQWtEZCxFQUFBOztBQS9DQztJQWhDRjtNQWlDSSxjQUFhO01BQ2IsaUJBQWdCLEVBNkNuQixFQUFBOztBQS9FRDtJQXNDSSxpQkFBZ0I7SUFDaEIsV0FBVTtJQUNWLG1CQUFrQjtJQUNsQixRQUFPO0lBQ1AsU0FBUTtJQUNSLE9BQU07SUFDTixVQUFTO0lBQ1QsaUNBQWdDO0lBQ2hDLHFCQUFvQjtJQUNwQixjQUFhO0lBQ2Isd0JBQXVCO0lBQ3ZCLG9CQUFtQixFQUNwQjs7QUFsREg7SUFzRE0scUNBQTRCO1lBQTVCLDZCQUE0QixFQVM3Qjs7QUFSQztFQUNFO0lBQ0UsNkNBQW9DO1lBQXBDLHFDQUFvQyxFQUFBO0VBRXRDO0lBQ0UsZ0RBQXVDO1lBQXZDLHdDQUF1QyxFQUFBLEVBQUE7O0FBTDNDO0VBQ0U7SUFDRSw2Q0FBb0M7WUFBcEMscUNBQW9DLEVBQUE7RUFFdEM7SUFDRSxnREFBdUM7WUFBdkMsd0NBQXVDLEVBQUEsRUFBQTs7QUE1RGpEO0lBa0VNLCtDQUFzQztZQUF0Qyx1Q0FBc0M7SUFTdEMsWUFBVztJQUNYLGlDQUFnQyxFQUNqQzs7QUFWQztFQUNFO0lBQ0UsNEJBQW1CO1lBQW5CLG9CQUFtQixFQUFBO0VBRXJCO0lBQ0UsK0JBQXNCO1lBQXRCLHVCQUFzQixFQUFBLEVBQUE7O0FBTDFCO0VBQ0U7SUFDRSw0QkFBbUI7WUFBbkIsb0JBQW1CLEVBQUE7RUFFckI7SUFDRSwrQkFBc0I7WUFBdEIsdUJBQXNCLEVBQUEsRUFBQTs7QUFTaEM7RUFDRSxxQ0FBNEI7VUFBNUIsNkJBQTRCO0VBQzVCLG9DQUEyQjtVQUEzQiw0QkFBMkI7RUFDM0IsbUJBQWtCO0VBQ2xCLE9BQU07RUFDTixVQUFTO0VBQ1QsUUFBTztFQUNQLFNBQVEsRUFDVDs7QUFFRDtFQUNFLFlBQVU7RUMzR3FELHdDRDRHaEI7RUFDL0MsbUJBQWtCO0VBQ2xCLGlEQUF3QztVQUF4Qyx5Q0FBd0M7RUFDeEMsT0FBTTtFQUNOLFNBQVE7RUFDUixVQUFTO0VBQ1QsUUFBTztFQUNQLGNBQWE7RUFDYix1QkFBc0I7RUFDdEIsd0ZBQXVGLEVBQ3hGIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2xheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ35jb21wYXNzLW1peGlucy9saWIvY29tcGFzcy9jc3MzJztcblxuOmhvc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgbWF4LWhlaWdodDogMTAwdmg7XG4gIG1heC13aWR0aDogMTAwdnc7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgb3BhY2l0eTogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgxOSwgMjEsIDMxLCAwLjg1KSB1cmwoL2Fzc2V0cy9ibHVyZWQtYmFja2dyb3VuZC5qcGcpIDUwJSA1MCUgbm8tcmVwZWF0O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWltYWdlIDFzIGVhc2UtaW4sIG9wYWNpdHkgLjFzIGxpbmVhcjtcbiAgJi5sb2FkZWQge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgICB0b3A6IDA7XG4gIH1cbn1cblxuLmNvbnRlbnQge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uY3ViZSB7XG4gIGhlaWdodDogOTAlO1xuICB3aWR0aDogMTBlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIwLCAyMiwgMjIsIDApO1xuICBsZWZ0OjA7XG4gIHJpZ2h0OjA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW46IGF1dG87XG4gIHBlcnNwZWN0aXZlOiAxMDAwcHg7XG4gIGZvbnQtc2l6ZTogMTAwcHg7XG4gIGFuaW1hdGlvbjogZmFkZU91dCAycyBsaW5lYXIgMSBmb3J3YXJkcztcblxuICBAa2V5ZnJhbWVzIGZhZGVPdXQge1xuICAgIDAlLCA4MCUge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyMCwgMjIsIDIyLCAwLjQpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjAsIDIyLCAyMiwgMCk7XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDgwMHB4KSB7XG4gICAgZm9udC1zaXplOiA4NXB4O1xuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgZm9udC1zaXplOiA5LjZ2dztcbiAgICBoZWlnaHQ6IDk1JTtcbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gICAgaGVpZ2h0OiA5Ny4zJTtcbiAgICBmb250LXNpemU6IDkuNXZ3O1xuICB9XG5cbiAgLmRhcmstc2NyZWVuIHtcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC43cyBlYXNlLW91dDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAmLmlzLWxvYWRpbmcge1xuICAgIC5zaWRlIHtcbiAgICAgIGFuaW1hdGlvbjogcHVsc2UgMnMgaW5maW5pdGU7XG4gICAgICBAa2V5ZnJhbWVzIHB1bHNlIHtcbiAgICAgICAgMCUsIDEwMCUge1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlWigtNWVtKTtcbiAgICAgICAgfVxuICAgICAgICA1MCUge1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMSkgdHJhbnNsYXRlWigtNWVtKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5kYXJrLXNjcmVlbiB7XG4gICAgICBhbmltYXRpb246IHB1bHNlRGFya1NjcmVlbiAycyBpbmZpbml0ZTtcbiAgICAgIEBrZXlmcmFtZXMgcHVsc2VEYXJrU2NyZWVuIHtcbiAgICAgICAgMCUsIDEwMCUge1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgIH1cbiAgICAgICAgNTAlIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBvcGFjaXR5OiAuNztcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjNzIGVhc2Utb3V0O1xuICAgIH1cbiAgfVxufVxuXG4uc2lkZSB7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtNWVtKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuc2lkZSA+IDpub3Qocm91dGVyLW91dGxldCkge1xuICBjb2xvcjojZmZmO1xuICBAaW5jbHVkZSBib3gtc2hhZG93KDAgMCAzMHB4IHJnYmEoMCwgMCwgMCwgMC42KSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpIHRyYW5zbGF0ZVooNWVtKTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE5LCAyMSwgMzEsIDAuODUpIHVybCgvYXNzZXRzL2JsdXJlZC1iYWNrZ3JvdW5kLmpwZykgNTAlIDUwJSBuby1yZXBlYXQ7XG59XG5cbiIsIkBpbXBvcnQgXCIuLi9zdXBwb3J0XCI7XG5cbi8vIFRoaXMgbWl4aW4gcHJvdmlkZXMgYmFzaWMgc3VwcG9ydCBmb3IgQ1NTMyBwcm9wZXJ0aWVzIGFuZFxuLy8gdGhlaXIgY29ycmVzcG9uZGluZyBleHBlcmltZW50YWwgQ1NTMiBwcm9wZXJ0aWVzIHdoZW5cbi8vIHRoZSBpbXBsZW1lbnRhdGlvbnMgYXJlIGlkZW50aWNhbCBleGNlcHQgZm9yIHRoZSBwcm9wZXJ0eVxuLy8gcHJlZml4LlxuQG1peGluIGV4cGVyaW1lbnRhbCgkcHJvcGVydHksICR2YWx1ZSxcbiAgJG1veiAgICAgIDogJGV4cGVyaW1lbnRhbC1zdXBwb3J0LWZvci1tb3ppbGxhLFxuICAkd2Via2l0ICAgOiAkZXhwZXJpbWVudGFsLXN1cHBvcnQtZm9yLXdlYmtpdCxcbiAgJG8gICAgICAgIDogJGV4cGVyaW1lbnRhbC1zdXBwb3J0LWZvci1vcGVyYSxcbiAgJG1zICAgICAgIDogJGV4cGVyaW1lbnRhbC1zdXBwb3J0LWZvci1taWNyb3NvZnQsXG4gICRraHRtbCAgICA6ICRleHBlcmltZW50YWwtc3VwcG9ydC1mb3Ita2h0bWwsXG4gICRvZmZpY2lhbCA6IHRydWVcbikge1xuICBAaWYgJHdlYmtpdCAgYW5kICRleHBlcmltZW50YWwtc3VwcG9ydC1mb3Itd2Via2l0ICAgIHsgLXdlYmtpdC0jeyRwcm9wZXJ0eX0gOiAkdmFsdWU7IH1cbiAgQGlmICRraHRtbCAgIGFuZCAkZXhwZXJpbWVudGFsLXN1cHBvcnQtZm9yLWtodG1sICAgICB7ICAta2h0bWwtI3skcHJvcGVydHl9IDogJHZhbHVlOyB9XG4gIEBpZiAkbW96ICAgICBhbmQgJGV4cGVyaW1lbnRhbC1zdXBwb3J0LWZvci1tb3ppbGxhICAgeyAgICAtbW96LSN7JHByb3BlcnR5fSA6ICR2YWx1ZTsgfVxuICBAaWYgJG1zICAgICAgYW5kICRleHBlcmltZW50YWwtc3VwcG9ydC1mb3ItbWljcm9zb2Z0IHsgICAgIC1tcy0jeyRwcm9wZXJ0eX0gOiAkdmFsdWU7IH1cbiAgQGlmICRvICAgICAgIGFuZCAkZXhwZXJpbWVudGFsLXN1cHBvcnQtZm9yLW9wZXJhICAgICB7ICAgICAgLW8tI3skcHJvcGVydHl9IDogJHZhbHVlOyB9XG4gIEBpZiAkb2ZmaWNpYWwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyAgICAgICAgICN7JHByb3BlcnR5fSA6ICR2YWx1ZTsgfVxufVxuXG4vLyBTYW1lIGFzIGV4cGVyaW1lbnRhbCgpLCBidXQgZm9yIGNhc2VzIHdoZW4gdGhlIHByb3BlcnR5IGlzIHRoZSBzYW1lIGFuZCB0aGUgdmFsdWUgaXMgdmVuZG9yaXplZFxuQG1peGluIGV4cGVyaW1lbnRhbC12YWx1ZSgkcHJvcGVydHksICR2YWx1ZSxcbiAgJG1veiAgICAgIDogJGV4cGVyaW1lbnRhbC1zdXBwb3J0LWZvci1tb3ppbGxhLFxuICAkd2Via2l0ICAgOiAkZXhwZXJpbWVudGFsLXN1cHBvcnQtZm9yLXdlYmtpdCxcbiAgJG8gICAgICAgIDogJGV4cGVyaW1lbnRhbC1zdXBwb3J0LWZvci1vcGVyYSxcbiAgJG1zICAgICAgIDogJGV4cGVyaW1lbnRhbC1zdXBwb3J0LWZvci1taWNyb3NvZnQsXG4gICRraHRtbCAgICA6ICRleHBlcmltZW50YWwtc3VwcG9ydC1mb3Ita2h0bWwsXG4gICRvZmZpY2lhbCA6IHRydWVcbikge1xuICBAaWYgJHdlYmtpdCAgYW5kICRleHBlcmltZW50YWwtc3VwcG9ydC1mb3Itd2Via2l0ICAgIHsgI3skcHJvcGVydHl9IDogLXdlYmtpdC0jeyR2YWx1ZX07IH1cbiAgQGlmICRraHRtbCAgIGFuZCAkZXhwZXJpbWVudGFsLXN1cHBvcnQtZm9yLWtodG1sICAgICB7ICN7JHByb3BlcnR5fSA6ICAta2h0bWwtI3skdmFsdWV9OyB9XG4gIEBpZiAkbW96ICAgICBhbmQgJGV4cGVyaW1lbnRhbC1zdXBwb3J0LWZvci1tb3ppbGxhICAgeyAjeyRwcm9wZXJ0eX0gOiAgICAtbW96LSN7JHZhbHVlfTsgfVxuICBAaWYgJG1zICAgICAgYW5kICRleHBlcmltZW50YWwtc3VwcG9ydC1mb3ItbWljcm9zb2Z0IHsgI3skcHJvcGVydHl9IDogICAgIC1tcy0jeyR2YWx1ZX07IH1cbiAgQGlmICRvICAgICAgIGFuZCAkZXhwZXJpbWVudGFsLXN1cHBvcnQtZm9yLW9wZXJhICAgICB7ICN7JHByb3BlcnR5fSA6ICAgICAgLW8tI3skdmFsdWV9OyB9XG4gIEBpZiAkb2ZmaWNpYWwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyAjeyRwcm9wZXJ0eX0gOiAgICAgICAgICN7JHZhbHVlfTsgfVxufVxuIl19 */"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
var routing_service_1 = __webpack_require__(/*! ../core/routing/routing.service */ "./src/app/core/routing/routing.service.ts");
var common_1 = __webpack_require__(/*! @angular/common */ "@angular/common");
var LayoutComponent = /** @class */ (function () {
    function LayoutComponent(platformId, routingService) {
        this.platformId = platformId;
        this.routingService = routingService;
        this.BACKGROUND_URL = '/assets/background.jpg';
        this.routerAnimationCanPulse = false;
        this.enterAnimationState = 'hidden';
        this.backgroundPulse = false;
    }
    Object.defineProperty(LayoutComponent.prototype, "isLoading", {
        get: function () {
            return this.routingService.getRoutingStatus()
                .pipe(operators_1.map(function (status) { return status === routing_service_1.RoutingStatus.Loading; }));
        },
        enumerable: true,
        configurable: true
    });
    LayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        Promise.resolve().then(function () { return _this.initRouterAnimations(); });
        if (common_1.isPlatformBrowser(this.platformId)) {
            this.preloadBackgroundImage();
        }
        else {
            this.backgroundUrl = this.BACKGROUND_URL;
        }
    };
    LayoutComponent.prototype.prepareRoute = function (outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    };
    LayoutComponent.prototype.initRouterAnimations = function () {
        var _this = this;
        if (common_1.isPlatformBrowser(this.platformId)) {
            this.enterAnimationState = 'visible';
        }
        this.routingService.getRoutingStatus()
            .subscribe(function (status) {
            if (status === routing_service_1.RoutingStatus.Ended) {
                if (!_this.routerAnimationCanPulse) {
                    _this.routerAnimationCanPulse = true;
                }
                else {
                    _this.backgroundPulse = true;
                    setTimeout(function () { return _this.backgroundPulse = false; }, 150);
                }
            }
        });
    };
    LayoutComponent.prototype.preloadBackgroundImage = function () {
        var _this = this;
        var image = new Image();
        image.src = this.BACKGROUND_URL;
        if (image.complete) {
            this.backgroundUrl = image.src;
        }
        else {
            image.addEventListener('load', function () { return _this.backgroundUrl = image.src; });
        }
    };
    return LayoutComponent;
}());
exports.LayoutComponent = LayoutComponent;


/***/ }),

/***/ "./src/app/screens/dnd-and-pwa/dnd-and-pwa.module.ngfactory.js":
/*!*********************************************************************!*\
  !*** ./src/app/screens/dnd-and-pwa/dnd-and-pwa.module.ngfactory.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./dnd-and-pwa.module */ "./src/app/screens/dnd-and-pwa/dnd-and-pwa.module.ts");
var i2 = __webpack_require__(/*! ../../../../node_modules/@angular/material/tooltip/typings/index.ngfactory */ "./node_modules/@angular/material/tooltip/typings/index.ngfactory.js");
var i3 = __webpack_require__(/*! ../../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
var i4 = __webpack_require__(/*! ./dnd-and-pwa/dnd-and-pwa.component.ngfactory */ "./src/app/screens/dnd-and-pwa/dnd-and-pwa/dnd-and-pwa.component.ngfactory.js");
var i5 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i6 = __webpack_require__(/*! @angular/cdk/observers */ "@angular/cdk/observers");
var i7 = __webpack_require__(/*! @angular/cdk/overlay */ "@angular/cdk/overlay");
var i8 = __webpack_require__(/*! @angular/cdk/bidi */ "@angular/cdk/bidi");
var i9 = __webpack_require__(/*! @angular/material/tooltip */ "@angular/material/tooltip");
var i10 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var i11 = __webpack_require__(/*! @angular/material/core */ "@angular/material/core");
var i12 = __webpack_require__(/*! @angular/cdk/platform */ "@angular/cdk/platform");
var i13 = __webpack_require__(/*! @angular/material/button */ "@angular/material/button");
var i14 = __webpack_require__(/*! @angular/material/icon */ "@angular/material/icon");
var i15 = __webpack_require__(/*! @angular/cdk/a11y */ "@angular/cdk/a11y");
var i16 = __webpack_require__(/*! @angular/cdk/portal */ "@angular/cdk/portal");
var i17 = __webpack_require__(/*! @angular/cdk/scrolling */ "@angular/cdk/scrolling");
var i18 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i19 = __webpack_require__(/*! ./dnd-and-pwa/dnd-and-pwa.component */ "./src/app/screens/dnd-and-pwa/dnd-and-pwa/dnd-and-pwa.component.ts");
var DndAndPwaModuleNgFactory = i0.ɵcmf(i1.DndAndPwaModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i2.TooltipComponentNgFactory, i3.ɵEmptyOutletComponentNgFactory, i4.DndAndPwaComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i5.NgLocalization, i5.NgLocaleLocalization, [i0.LOCALE_ID, [2, i5.ɵangular_packages_common_common_a]]), i0.ɵmpd(4608, i6.MutationObserverFactory, i6.MutationObserverFactory, []), i0.ɵmpd(4608, i7.Overlay, i7.Overlay, [i7.ScrollStrategyOptions, i7.OverlayContainer, i0.ComponentFactoryResolver, i7.OverlayPositionBuilder, i7.OverlayKeyboardDispatcher, i0.Injector, i0.NgZone, i5.DOCUMENT, i8.Directionality, [2, i5.Location]]), i0.ɵmpd(5120, i7.ɵc, i7.ɵd, [i7.Overlay]), i0.ɵmpd(5120, i9.MAT_TOOLTIP_SCROLL_STRATEGY, i9.MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY, [i7.Overlay]), i0.ɵmpd(4608, i10.HAMMER_GESTURE_CONFIG, i11.GestureConfig, [[2, i11.MAT_HAMMER_OPTIONS], [2, i11.MatCommonModule]]), i0.ɵmpd(1073742336, i5.CommonModule, i5.CommonModule, []), i0.ɵmpd(1073742336, i8.BidiModule, i8.BidiModule, []), i0.ɵmpd(1073742336, i11.MatCommonModule, i11.MatCommonModule, [[2, i11.MATERIAL_SANITY_CHECKS], [2, i10.HAMMER_LOADER]]), i0.ɵmpd(1073742336, i12.PlatformModule, i12.PlatformModule, []), i0.ɵmpd(1073742336, i11.MatRippleModule, i11.MatRippleModule, []), i0.ɵmpd(1073742336, i13.MatButtonModule, i13.MatButtonModule, []), i0.ɵmpd(1073742336, i14.MatIconModule, i14.MatIconModule, []), i0.ɵmpd(1073742336, i6.ObserversModule, i6.ObserversModule, []), i0.ɵmpd(1073742336, i15.A11yModule, i15.A11yModule, []), i0.ɵmpd(1073742336, i16.PortalModule, i16.PortalModule, []), i0.ɵmpd(1073742336, i17.ScrollingModule, i17.ScrollingModule, []), i0.ɵmpd(1073742336, i7.OverlayModule, i7.OverlayModule, []), i0.ɵmpd(1073742336, i9.MatTooltipModule, i9.MatTooltipModule, []), i0.ɵmpd(1073742336, i18.RouterModule, i18.RouterModule, [[2, i18.ɵangular_packages_router_router_a], [2, i18.Router]]), i0.ɵmpd(1073742336, i1.DndAndPwaModule, i1.DndAndPwaModule, []), i0.ɵmpd(1024, i18.ROUTES, function () { return [[{ path: "", component: i19.DndAndPwaComponent }]]; }, [])]); });
exports.DndAndPwaModuleNgFactory = DndAndPwaModuleNgFactory;


/***/ }),

/***/ "./src/app/screens/dnd-and-pwa/dnd-and-pwa.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/screens/dnd-and-pwa/dnd-and-pwa.module.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DndAndPwaModule = /** @class */ (function () {
    function DndAndPwaModule() {
    }
    return DndAndPwaModule;
}());
exports.DndAndPwaModule = DndAndPwaModule;


/***/ }),

/***/ "./src/app/screens/dnd-and-pwa/dnd-and-pwa/dnd-and-pwa.component.ngfactory.js":
/*!************************************************************************************!*\
  !*** ./src/app/screens/dnd-and-pwa/dnd-and-pwa/dnd-and-pwa.component.ngfactory.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./dnd-and-pwa.component.scss.shim.ngstyle */ "./src/app/screens/dnd-and-pwa/dnd-and-pwa/dnd-and-pwa.component.scss.shim.ngstyle.js");
var i1 = __webpack_require__(/*! ../../screens-style.scss.shim.ngstyle */ "./src/app/screens/screens-style.scss.shim.ngstyle.js");
var i2 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i3 = __webpack_require__(/*! @angular/material/tooltip */ "@angular/material/tooltip");
var i4 = __webpack_require__(/*! @angular/cdk/overlay */ "@angular/cdk/overlay");
var i5 = __webpack_require__(/*! @angular/cdk/scrolling */ "@angular/cdk/scrolling");
var i6 = __webpack_require__(/*! @angular/cdk/platform */ "@angular/cdk/platform");
var i7 = __webpack_require__(/*! @angular/cdk/a11y */ "@angular/cdk/a11y");
var i8 = __webpack_require__(/*! @angular/cdk/bidi */ "@angular/cdk/bidi");
var i9 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var i10 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i11 = __webpack_require__(/*! ../../../../../node_modules/@angular/material/icon/typings/index.ngfactory */ "./node_modules/@angular/material/icon/typings/index.ngfactory.js");
var i12 = __webpack_require__(/*! @angular/material/icon */ "@angular/material/icon");
var i13 = __webpack_require__(/*! ./dnd-and-pwa.component */ "./src/app/screens/dnd-and-pwa/dnd-and-pwa/dnd-and-pwa.component.ts");
var i14 = __webpack_require__(/*! ng-lazy-services */ "./dist/ng-lazy-services/bundles/ng-lazy-services.umd.js");
var styles_DndAndPwaComponent = [i0.styles, i1.styles];
var RenderType_DndAndPwaComponent = i2.ɵcrt({ encapsulation: 0, styles: styles_DndAndPwaComponent, data: {} });
exports.RenderType_DndAndPwaComponent = RenderType_DndAndPwaComponent;
function View_DndAndPwaComponent_0(_l) { return i2.ɵvid(0, [i2.ɵqud(402653184, 1, { div: 0 }), (_l()(), i2.ɵeld(1, 0, null, null, 7, "section", [["class", "home"]], null, null, null, null, null)), (_l()(), i2.ɵeld(2, 16777216, null, null, 5, "button", [["matTooltip", "Go to home page"], ["routerLink", "/"]], null, [[null, "longpress"], [null, "keydown"], [null, "touchend"], [null, "click"]], function (_v, en, $event) { var ad = true; if (("longpress" === en)) {
        var pd_0 = (i2.ɵnov(_v, 3).show() !== false);
        ad = (pd_0 && ad);
    } if (("keydown" === en)) {
        var pd_1 = (i2.ɵnov(_v, 3)._handleKeydown($event) !== false);
        ad = (pd_1 && ad);
    } if (("touchend" === en)) {
        var pd_2 = (i2.ɵnov(_v, 3)._handleTouchend() !== false);
        ad = (pd_2 && ad);
    } if (("click" === en)) {
        var pd_3 = (i2.ɵnov(_v, 4).onClick() !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i2.ɵdid(3, 147456, null, 0, i3.MatTooltip, [i4.Overlay, i2.ElementRef, i5.ScrollDispatcher, i2.ViewContainerRef, i2.NgZone, i6.Platform, i7.AriaDescriber, i7.FocusMonitor, i3.MAT_TOOLTIP_SCROLL_STRATEGY, [2, i8.Directionality], [2, i3.MAT_TOOLTIP_DEFAULT_OPTIONS], [2, i9.HAMMER_LOADER]], { position: [0, "position"], message: [1, "message"] }, null), i2.ɵdid(4, 16384, null, 0, i10.RouterLink, [i10.Router, i10.ActivatedRoute, [8, null], i2.Renderer2, i2.ElementRef], { routerLink: [0, "routerLink"] }, null), (_l()(), i2.ɵeld(5, 0, null, null, 2, "mat-icon", [["aria-label", "Go to home page"], ["class", "mat-icon"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, i11.View_MatIcon_0, i11.RenderType_MatIcon)), i2.ɵdid(6, 9158656, null, 0, i12.MatIcon, [i2.ElementRef, i12.MatIconRegistry, [8, null], [2, i12.MAT_ICON_LOCATION]], null, null), (_l()(), i2.ɵted(-1, 0, ["arrow_back"])), (_l()(), i2.ɵeld(8, 0, [[1, 0], ["div", 1]], null, 0, "div", [["style", "margin-top: 50px; height: 100%;"]], null, null, null, null, null))], function (_ck, _v) { var currVal_0 = "right"; var currVal_1 = "Go to home page"; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_2 = "/"; _ck(_v, 4, 0, currVal_2); _ck(_v, 6, 0); }, function (_ck, _v) { var currVal_3 = i2.ɵnov(_v, 6).inline; var currVal_4 = (((i2.ɵnov(_v, 6).color !== "primary") && (i2.ɵnov(_v, 6).color !== "accent")) && (i2.ɵnov(_v, 6).color !== "warn")); _ck(_v, 5, 0, currVal_3, currVal_4); }); }
exports.View_DndAndPwaComponent_0 = View_DndAndPwaComponent_0;
function View_DndAndPwaComponent_Host_0(_l) { return i2.ɵvid(0, [(_l()(), i2.ɵeld(0, 0, null, null, 1, "app-dnd-and-pwa", [], null, null, null, View_DndAndPwaComponent_0, RenderType_DndAndPwaComponent)), i2.ɵdid(1, 245760, null, 0, i13.DndAndPwaComponent, [i14.NgLazyServicesLoaderService, i2.PLATFORM_ID], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_DndAndPwaComponent_Host_0 = View_DndAndPwaComponent_Host_0;
var DndAndPwaComponentNgFactory = i2.ɵccf("app-dnd-and-pwa", i13.DndAndPwaComponent, View_DndAndPwaComponent_Host_0, {}, {}, []);
exports.DndAndPwaComponentNgFactory = DndAndPwaComponentNgFactory;


/***/ }),

/***/ "./src/app/screens/dnd-and-pwa/dnd-and-pwa/dnd-and-pwa.component.scss.shim.ngstyle.js":
/*!********************************************************************************************!*\
  !*** ./src/app/screens/dnd-and-pwa/dnd-and-pwa/dnd-and-pwa.component.scss.shim.ngstyle.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjcmVlbnMvZG5kLWFuZC1wd2EvZG5kLWFuZC1wd2EvZG5kLWFuZC1wd2EuY29tcG9uZW50LnNjc3MifQ== */"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/screens/dnd-and-pwa/dnd-and-pwa/dnd-and-pwa.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/screens/dnd-and-pwa/dnd-and-pwa/dnd-and-pwa.component.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var ng_lazy_services_1 = __webpack_require__(/*! ng-lazy-services */ "./dist/ng-lazy-services/bundles/ng-lazy-services.umd.js");
var dynamic_modules_1 = __webpack_require__(/*! src/app/dynamic/dynamic-modules */ "./src/app/dynamic/dynamic-modules.ts");
var common_1 = __webpack_require__(/*! @angular/common */ "@angular/common");
var DndAndPwaComponent = /** @class */ (function () {
    function DndAndPwaComponent(loader, platformId) {
        this.loader = loader;
        this.platformId = platformId;
    }
    DndAndPwaComponent.prototype.ngOnInit = function () {
        if (common_1.isPlatformBrowser(this.platformId)) {
            this.initializeWebixTree();
        }
    };
    DndAndPwaComponent.prototype.ngOnDestroy = function () {
        if (this.tree) {
            this.tree.destructor();
        }
    };
    DndAndPwaComponent.prototype.loadD3 = function () {
        this.loader.load(dynamic_modules_1.DynamicModule.D3).subscribe(function (d3Service) {
            // d3Service.init();
        });
    };
    DndAndPwaComponent.prototype.initializeWebixTree = function () {
        var _this = this;
        console.log('webix', webix);
        this.tree = webix.ui({
            container: this.div.nativeElement,
            view: 'tree',
            select: true,
            multiselect: true,
            drag: true,
            height: 500,
            data: {
                id: 'root',
                value: 'Cars',
                open: true,
                data: [
                    {
                        id: '1',
                        open: true,
                        value: 'title 1',
                        data: [
                            { id: '1.1', value: 'title 1.1' },
                            { id: '1.2', value: 'title 1.2' },
                            { id: '1.3', value: 'title 1.3' }
                        ]
                    },
                    {
                        id: '2',
                        value: 'title 2',
                        open: true,
                        data: [
                            { id: '2.1', value: 'title 2.1' },
                            {
                                id: '2.2',
                                value: 'title 2.2',
                                data: [
                                    { id: '2.2.1', value: 'title 2.2.1' },
                                    { id: '2.2.2', value: 'title 2.2.2' },
                                    { id: '2.2.3', value: 'title 2.2.3' }
                                ]
                            }
                        ]
                    }
                ]
            }
        });
        this.tree.resize();
        this.tree.attachEvent('onBeforeDrag', function (context) {
            if (this.getItem(context.target) && this.getItem(context.target).$count && this.getItem(context.target).open) {
                context.parent = context.target;
                context.index = 0;
            }
            else {
                context.index++;
            }
        });
        this.tree.attachEvent('onItemClick', function (id, e, node) {
            console.log(_this.tree.getItem(id));
            var item = _this.tree.getNextSiblingId(id);
            console.log(item);
        });
    };
    return DndAndPwaComponent;
}());
exports.DndAndPwaComponent = DndAndPwaComponent;


/***/ }),

/***/ "./src/app/screens/emoji-chat/emoji-chat.module.ngfactory.js":
/*!*******************************************************************!*\
  !*** ./src/app/screens/emoji-chat/emoji-chat.module.ngfactory.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./emoji-chat.module */ "./src/app/screens/emoji-chat/emoji-chat.module.ts");
var i2 = __webpack_require__(/*! ../../../../node_modules/@angular/material/tooltip/typings/index.ngfactory */ "./node_modules/@angular/material/tooltip/typings/index.ngfactory.js");
var i3 = __webpack_require__(/*! ../../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
var i4 = __webpack_require__(/*! ./emoji-chat/emoji-chat.component.ngfactory */ "./src/app/screens/emoji-chat/emoji-chat/emoji-chat.component.ngfactory.js");
var i5 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i6 = __webpack_require__(/*! @angular/cdk/observers */ "@angular/cdk/observers");
var i7 = __webpack_require__(/*! @angular/cdk/overlay */ "@angular/cdk/overlay");
var i8 = __webpack_require__(/*! @angular/cdk/bidi */ "@angular/cdk/bidi");
var i9 = __webpack_require__(/*! @angular/material/tooltip */ "@angular/material/tooltip");
var i10 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var i11 = __webpack_require__(/*! @angular/material/core */ "@angular/material/core");
var i12 = __webpack_require__(/*! @angular/cdk/platform */ "@angular/cdk/platform");
var i13 = __webpack_require__(/*! @angular/material/button */ "@angular/material/button");
var i14 = __webpack_require__(/*! @angular/material/icon */ "@angular/material/icon");
var i15 = __webpack_require__(/*! @angular/cdk/a11y */ "@angular/cdk/a11y");
var i16 = __webpack_require__(/*! @angular/cdk/portal */ "@angular/cdk/portal");
var i17 = __webpack_require__(/*! @angular/cdk/scrolling */ "@angular/cdk/scrolling");
var i18 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i19 = __webpack_require__(/*! ./emoji-chat/emoji-chat.component */ "./src/app/screens/emoji-chat/emoji-chat/emoji-chat.component.ts");
var EmojiChatModuleNgFactory = i0.ɵcmf(i1.EmojiChatModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i2.TooltipComponentNgFactory, i3.ɵEmptyOutletComponentNgFactory, i4.EmojiChatComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i5.NgLocalization, i5.NgLocaleLocalization, [i0.LOCALE_ID, [2, i5.ɵangular_packages_common_common_a]]), i0.ɵmpd(4608, i6.MutationObserverFactory, i6.MutationObserverFactory, []), i0.ɵmpd(4608, i7.Overlay, i7.Overlay, [i7.ScrollStrategyOptions, i7.OverlayContainer, i0.ComponentFactoryResolver, i7.OverlayPositionBuilder, i7.OverlayKeyboardDispatcher, i0.Injector, i0.NgZone, i5.DOCUMENT, i8.Directionality, [2, i5.Location]]), i0.ɵmpd(5120, i7.ɵc, i7.ɵd, [i7.Overlay]), i0.ɵmpd(5120, i9.MAT_TOOLTIP_SCROLL_STRATEGY, i9.MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY, [i7.Overlay]), i0.ɵmpd(4608, i10.HAMMER_GESTURE_CONFIG, i11.GestureConfig, [[2, i11.MAT_HAMMER_OPTIONS], [2, i11.MatCommonModule]]), i0.ɵmpd(1073742336, i5.CommonModule, i5.CommonModule, []), i0.ɵmpd(1073742336, i8.BidiModule, i8.BidiModule, []), i0.ɵmpd(1073742336, i11.MatCommonModule, i11.MatCommonModule, [[2, i11.MATERIAL_SANITY_CHECKS], [2, i10.HAMMER_LOADER]]), i0.ɵmpd(1073742336, i12.PlatformModule, i12.PlatformModule, []), i0.ɵmpd(1073742336, i11.MatRippleModule, i11.MatRippleModule, []), i0.ɵmpd(1073742336, i13.MatButtonModule, i13.MatButtonModule, []), i0.ɵmpd(1073742336, i14.MatIconModule, i14.MatIconModule, []), i0.ɵmpd(1073742336, i6.ObserversModule, i6.ObserversModule, []), i0.ɵmpd(1073742336, i15.A11yModule, i15.A11yModule, []), i0.ɵmpd(1073742336, i16.PortalModule, i16.PortalModule, []), i0.ɵmpd(1073742336, i17.ScrollingModule, i17.ScrollingModule, []), i0.ɵmpd(1073742336, i7.OverlayModule, i7.OverlayModule, []), i0.ɵmpd(1073742336, i9.MatTooltipModule, i9.MatTooltipModule, []), i0.ɵmpd(1073742336, i18.RouterModule, i18.RouterModule, [[2, i18.ɵangular_packages_router_router_a], [2, i18.Router]]), i0.ɵmpd(1073742336, i1.EmojiChatModule, i1.EmojiChatModule, []), i0.ɵmpd(1024, i18.ROUTES, function () { return [[{ path: "", component: i19.EmojiChatComponent }]]; }, [])]); });
exports.EmojiChatModuleNgFactory = EmojiChatModuleNgFactory;


/***/ }),

/***/ "./src/app/screens/emoji-chat/emoji-chat.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/screens/emoji-chat/emoji-chat.module.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EmojiChatModule = /** @class */ (function () {
    function EmojiChatModule() {
    }
    return EmojiChatModule;
}());
exports.EmojiChatModule = EmojiChatModule;


/***/ }),

/***/ "./src/app/screens/emoji-chat/emoji-chat/emoji-chat.component.ngfactory.js":
/*!*********************************************************************************!*\
  !*** ./src/app/screens/emoji-chat/emoji-chat/emoji-chat.component.ngfactory.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ../../screens-style.scss.shim.ngstyle */ "./src/app/screens/screens-style.scss.shim.ngstyle.js");
var i1 = __webpack_require__(/*! ./emoji-chat.component.scss.shim.ngstyle */ "./src/app/screens/emoji-chat/emoji-chat/emoji-chat.component.scss.shim.ngstyle.js");
var i2 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i3 = __webpack_require__(/*! @angular/material/tooltip */ "@angular/material/tooltip");
var i4 = __webpack_require__(/*! @angular/cdk/overlay */ "@angular/cdk/overlay");
var i5 = __webpack_require__(/*! @angular/cdk/scrolling */ "@angular/cdk/scrolling");
var i6 = __webpack_require__(/*! @angular/cdk/platform */ "@angular/cdk/platform");
var i7 = __webpack_require__(/*! @angular/cdk/a11y */ "@angular/cdk/a11y");
var i8 = __webpack_require__(/*! @angular/cdk/bidi */ "@angular/cdk/bidi");
var i9 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var i10 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i11 = __webpack_require__(/*! ../../../../../node_modules/@angular/material/icon/typings/index.ngfactory */ "./node_modules/@angular/material/icon/typings/index.ngfactory.js");
var i12 = __webpack_require__(/*! @angular/material/icon */ "@angular/material/icon");
var i13 = __webpack_require__(/*! ./emoji-chat.component */ "./src/app/screens/emoji-chat/emoji-chat/emoji-chat.component.ts");
var styles_EmojiChatComponent = [i0.styles, i1.styles];
var RenderType_EmojiChatComponent = i2.ɵcrt({ encapsulation: 0, styles: styles_EmojiChatComponent, data: {} });
exports.RenderType_EmojiChatComponent = RenderType_EmojiChatComponent;
function View_EmojiChatComponent_0(_l) { return i2.ɵvid(0, [i2.ɵqud(402653184, 1, { section: 0 }), i2.ɵqud(402653184, 2, { chat: 0 }), i2.ɵqud(402653184, 3, { input: 0 }), (_l()(), i2.ɵeld(3, 0, null, null, 16, "header", [], null, null, null, null, null)), (_l()(), i2.ɵeld(4, 16777216, null, null, 5, "button", [["color", "accent"], ["matTooltip", "Go to home page"], ["routerLink", "/"]], null, [[null, "longpress"], [null, "keydown"], [null, "touchend"], [null, "click"]], function (_v, en, $event) { var ad = true; if (("longpress" === en)) {
        var pd_0 = (i2.ɵnov(_v, 5).show() !== false);
        ad = (pd_0 && ad);
    } if (("keydown" === en)) {
        var pd_1 = (i2.ɵnov(_v, 5)._handleKeydown($event) !== false);
        ad = (pd_1 && ad);
    } if (("touchend" === en)) {
        var pd_2 = (i2.ɵnov(_v, 5)._handleTouchend() !== false);
        ad = (pd_2 && ad);
    } if (("click" === en)) {
        var pd_3 = (i2.ɵnov(_v, 6).onClick() !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i2.ɵdid(5, 147456, null, 0, i3.MatTooltip, [i4.Overlay, i2.ElementRef, i5.ScrollDispatcher, i2.ViewContainerRef, i2.NgZone, i6.Platform, i7.AriaDescriber, i7.FocusMonitor, i3.MAT_TOOLTIP_SCROLL_STRATEGY, [2, i8.Directionality], [2, i3.MAT_TOOLTIP_DEFAULT_OPTIONS], [2, i9.HAMMER_LOADER]], { position: [0, "position"], message: [1, "message"] }, null), i2.ɵdid(6, 16384, null, 0, i10.RouterLink, [i10.Router, i10.ActivatedRoute, [8, null], i2.Renderer2, i2.ElementRef], { routerLink: [0, "routerLink"] }, null), (_l()(), i2.ɵeld(7, 0, null, null, 2, "mat-icon", [["aria-label", "Go to home page"], ["class", "mat-icon"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, i11.View_MatIcon_0, i11.RenderType_MatIcon)), i2.ɵdid(8, 9158656, null, 0, i12.MatIcon, [i2.ElementRef, i12.MatIconRegistry, [8, null], [2, i12.MAT_ICON_LOCATION]], null, null), (_l()(), i2.ɵted(-1, 0, ["arrow_back"])), (_l()(), i2.ɵeld(10, 0, null, null, 4, "div", [["class", "title"]], null, null, null, null, null)), (_l()(), i2.ɵeld(11, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i2.ɵted(-1, null, [" Emoji Chat "])), (_l()(), i2.ɵeld(13, 0, null, null, 1, "small", [], null, null, null, null, null)), (_l()(), i2.ɵted(-1, null, ["canvas, websockets (socket.io)"])), (_l()(), i2.ɵeld(15, 0, null, null, 4, "div", [["class", "edit-emoji"]], null, null, null, null, null)), (_l()(), i2.ɵted(-1, null, [" \uD83D\uDE00 "])), (_l()(), i2.ɵeld(17, 16777216, null, null, 2, "button", [["matTooltip", "Edit your Emoji"]], null, [[null, "longpress"], [null, "keydown"], [null, "touchend"]], function (_v, en, $event) { var ad = true; if (("longpress" === en)) {
        var pd_0 = (i2.ɵnov(_v, 18).show() !== false);
        ad = (pd_0 && ad);
    } if (("keydown" === en)) {
        var pd_1 = (i2.ɵnov(_v, 18)._handleKeydown($event) !== false);
        ad = (pd_1 && ad);
    } if (("touchend" === en)) {
        var pd_2 = (i2.ɵnov(_v, 18)._handleTouchend() !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), i2.ɵdid(18, 147456, null, 0, i3.MatTooltip, [i4.Overlay, i2.ElementRef, i5.ScrollDispatcher, i2.ViewContainerRef, i2.NgZone, i6.Platform, i7.AriaDescriber, i7.FocusMonitor, i3.MAT_TOOLTIP_SCROLL_STRATEGY, [2, i8.Directionality], [2, i3.MAT_TOOLTIP_DEFAULT_OPTIONS], [2, i9.HAMMER_LOADER]], { position: [0, "position"], message: [1, "message"] }, null), (_l()(), i2.ɵted(-1, null, [" Edit your Emoji "])), (_l()(), i2.ɵeld(20, 0, [[1, 0], ["section", 1]], null, 1, "section", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.focusInput() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i2.ɵeld(21, 0, [[2, 0], ["chat", 1]], null, 0, "canvas", [], null, null, null, null, null)), (_l()(), i2.ɵeld(22, 0, null, null, 3, "footer", [], null, null, null, null, null)), (_l()(), i2.ɵeld(23, 0, [[3, 0], ["input", 1]], null, 0, "input", [["type", "text"]], null, null, null, null, null)), (_l()(), i2.ɵeld(24, 0, null, null, 1, "button", [], null, null, null, null, null)), (_l()(), i2.ɵted(-1, null, ["Send"]))], function (_ck, _v) { var currVal_0 = "right"; var currVal_1 = "Go to home page"; _ck(_v, 5, 0, currVal_0, currVal_1); var currVal_2 = "/"; _ck(_v, 6, 0, currVal_2); _ck(_v, 8, 0); var currVal_5 = "below"; var currVal_6 = "Edit your Emoji"; _ck(_v, 18, 0, currVal_5, currVal_6); }, function (_ck, _v) { var currVal_3 = i2.ɵnov(_v, 8).inline; var currVal_4 = (((i2.ɵnov(_v, 8).color !== "primary") && (i2.ɵnov(_v, 8).color !== "accent")) && (i2.ɵnov(_v, 8).color !== "warn")); _ck(_v, 7, 0, currVal_3, currVal_4); }); }
exports.View_EmojiChatComponent_0 = View_EmojiChatComponent_0;
function View_EmojiChatComponent_Host_0(_l) { return i2.ɵvid(0, [(_l()(), i2.ɵeld(0, 0, null, null, 1, "app-emoji-chat", [], null, [["window", "resize"]], function (_v, en, $event) { var ad = true; if (("window:resize" === en)) {
        var pd_0 = (i2.ɵnov(_v, 1).canvasRender($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_EmojiChatComponent_0, RenderType_EmojiChatComponent)), i2.ɵdid(1, 114688, null, 0, i13.EmojiChatComponent, [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_EmojiChatComponent_Host_0 = View_EmojiChatComponent_Host_0;
var EmojiChatComponentNgFactory = i2.ɵccf("app-emoji-chat", i13.EmojiChatComponent, View_EmojiChatComponent_Host_0, {}, {}, []);
exports.EmojiChatComponentNgFactory = EmojiChatComponentNgFactory;


/***/ }),

/***/ "./src/app/screens/emoji-chat/emoji-chat/emoji-chat.component.scss.shim.ngstyle.js":
/*!*****************************************************************************************!*\
  !*** ./src/app/screens/emoji-chat/emoji-chat/emoji-chat.component.scss.shim.ngstyle.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = ["header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 35px;\n  background: rgba(28, 31, 31, 0.6);\n  height: 126px;\n  font-size: 14px; }\n  header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    flex-grow: 1;\n    margin-left: 15px; }\n  header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n      margin: 0;\n      font-weight: 300;\n      font-size: 24px; }\n  header[_ngcontent-%COMP%]   .edit-emoji[_ngcontent-%COMP%] {\n    font-size: 36px;\n    line-height: 1;\n    display: flex;\n    align-items: center; }\n  header[_ngcontent-%COMP%]   .edit-emoji[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n      margin-left: 10px; }\n  [_nghost-%COMP%]    > section[_ngcontent-%COMP%] {\n  padding: 0;\n  overflow: hidden; }\n  canvas[_ngcontent-%COMP%] {\n  flex-grow: 1; }\n  footer[_ngcontent-%COMP%] {\n  font-size: 16px;\n  background: rgba(28, 31, 31, 0.6);\n  display: flex; }\n  footer[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    flex-grow: 1;\n    font-size: 16px;\n    padding: 10px 15px;\n    background: transparent;\n    border: none;\n    outline: none;\n    font-size: 14px;\n    color: #fff; }\n  footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding: 10px 15px; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NyZWVucy9lbW9qaS1jaGF0L2Vtb2ppLWNoYXQvRDpcXHByb2dyYW1taW5nXFx0c2FpdGVjaFxccGFja2FnZXNcXHVuaXZlcnNhbC1hcHAvc3JjXFxhcHBcXHNjcmVlbnNcXGVtb2ppLWNoYXRcXGVtb2ppLWNoYXRcXGVtb2ppLWNoYXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFhO0VBQ2IsNEJBQTJCO0VBQzNCLG9CQUFtQjtFQUNuQixjQUFhO0VBQ2Isa0NBQWlDO0VBQ2pDLGNBQWE7RUFDYixnQkFBZSxFQW1CaEI7RUExQkQ7SUFTSSxhQUFZO0lBQ1osa0JBQWlCLEVBTWxCO0VBaEJIO01BWU0sVUFBUztNQUNULGlCQUFnQjtNQUNoQixnQkFBZSxFQUNoQjtFQWZMO0lBa0JJLGdCQUFlO0lBQ2YsZUFBYztJQUNkLGNBQWE7SUFDYixvQkFBbUIsRUFJcEI7RUF6Qkg7TUF1Qk0sa0JBQWlCLEVBQ2xCO0VBSUw7RUFDRSxXQUFVO0VBQ1YsaUJBQWdCLEVBQ2pCO0VBRUQ7RUFDRSxhQUFZLEVBQ2I7RUFFRDtFQUNFLGdCQUFlO0VBQ2Ysa0NBQWlDO0VBQ2pDLGNBQWEsRUFjZDtFQWpCRDtJQUtJLGFBQVk7SUFDWixnQkFBZTtJQUNmLG1CQUFrQjtJQUNsQix3QkFBdUI7SUFDdkIsYUFBWTtJQUNaLGNBQWE7SUFDYixnQkFBZTtJQUNmLFlBQVcsRUFDWjtFQWJIO0lBZUksbUJBQWtCLEVBQ25CIiwiZmlsZSI6InNyYy9hcHAvc2NyZWVucy9lbW9qaS1jaGF0L2Vtb2ppLWNoYXQvZW1vamktY2hhdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMzVweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyOCwgMzEsIDMxLCAwLjYpO1xuICBoZWlnaHQ6IDEyNnB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIC50aXRsZSB7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIGgyIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgfVxuICB9XG4gIC5lZGl0LWVtb2ppIHtcbiAgICBmb250LXNpemU6IDM2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGEge1xuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgfVxuICB9XG59XG5cbjpob3N0ID4gc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbmNhbnZhcyB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuZm9vdGVyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI4LCAzMSwgMzEsIDAuNik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGlucHV0IHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIH1cbn1cbiJdfQ== */"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/screens/emoji-chat/emoji-chat/emoji-chat.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/screens/emoji-chat/emoji-chat/emoji-chat.component.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var EmojiChatComponent = /** @class */ (function () {
    function EmojiChatComponent() {
        this.users = [];
        this.pulseMe = -1;
        this.pulseMeStart = true;
    }
    EmojiChatComponent.prototype.focusInput = function () {
        this.input.nativeElement.focus();
    };
    EmojiChatComponent.prototype.ngOnInit = function () {
        this.canvas = this.chat.nativeElement;
        this.context = this.canvas.getContext('2d');
        // Add 100 users just for testing:
        for (var i = 0; i < 12; i++) {
            this.users[i] = {
                avatar: String.fromCodePoint(128512 + Math.floor(Math.random() * 55)),
                nickname: 'Nickname'
            };
        }
        this.canvasRender();
        this.focusInput();
    };
    EmojiChatComponent.prototype.render = function () {
        var _this = this;
        var _a = this.canvas, width = _a.width, height = _a.height;
        this.context.clearRect(0, 0, width, height);
        this.users.forEach(function (user) {
            var coords = user.coords, iconSize = user.iconSize, avatar = user.avatar, isMe = user.isMe;
            if (isMe) {
                var radius = iconSize * .85 + _this.pulseMe;
                _this.context.beginPath();
                _this.context.arc(coords.x + (iconSize * 0.68), coords.y - (iconSize * 0.33), radius, 0, 2 * Math.PI);
                _this.context.strokeStyle = 'white';
                var dashWidth = iconSize * 0.7;
                var dashCount = 4;
                var C = Math.PI * 2 * radius;
                var dashSpace = (C - dashCount * dashWidth) / dashCount;
                _this.context.setLineDash([dashWidth, dashSpace]);
                _this.context.stroke();
                if (_this.pulseMeStart) {
                    _this.pulseMe += 0.05;
                }
                else {
                    _this.pulseMe -= 0.05;
                }
                if (_this.pulseMe > 1) {
                    _this.pulseMeStart = false;
                }
                else if (_this.pulseMe < -1) {
                    _this.pulseMeStart = true;
                }
            }
            _this.context.fillStyle = '#fff';
            _this.context.font = iconSize + "px icon";
            _this.context.fillText(avatar, coords.x, coords.y);
        });
        requestAnimationFrame(this.render.bind(this));
    };
    EmojiChatComponent.prototype.canvasRender = function () {
        this.calculateRandomPositions();
        requestAnimationFrame(this.render.bind(this));
    };
    EmojiChatComponent.prototype.updateCanvasSize = function () {
        this.canvas.width = this.section.nativeElement.clientWidth;
        this.canvas.height = this.section.nativeElement.clientHeight;
        return [this.canvas.width, this.canvas.height];
    };
    EmojiChatComponent.prototype.getColumnsAndRows = function (ratio, length) {
        var columns = 1;
        var rows = 1;
        while (columns * rows < length) {
            if (columns / rows === 1) {
                if (ratio < 1) {
                    rows += 1;
                }
                else {
                    columns += 1;
                }
            }
            else {
                if (columns / rows < ratio) {
                    columns += 1;
                }
                else {
                    rows += 1;
                }
            }
        }
        return [columns, rows];
    };
    EmojiChatComponent.prototype.getStep = function (coord, options) {
        var width = options.width, height = options.height, columns = options.columns, rows = options.rows, padding = options.padding, size = options.size;
        var step;
        if (coord === 'x') {
            step = (width - (padding * 2) - size) / ((columns - 1) || columns);
        }
        else if (coord === 'y') {
            step = (height - (padding * 2) - size) / ((rows - 1) || rows);
        }
        return step;
    };
    EmojiChatComponent.prototype.calculateRandomPositions = function () {
        var _a = this.updateCanvasSize(), width = _a[0], height = _a[1];
        var length = this.users.length;
        var ratio = width / height;
        var _b = this.getColumnsAndRows(ratio, length), columns = _b[0], rows = _b[1];
        var padding = 20 + (height / rows) / 3;
        var size = (height - (padding * 2)) / rows / 3;
        var xStep = this.getStep('x', { width: width, height: height, columns: columns, rows: rows, padding: padding, size: size });
        var yStep = this.getStep('y', { width: width, height: height, columns: columns, rows: rows, padding: padding, size: size });
        var userId = 0;
        for (var y = padding + (size / 2); y <= height - padding && userId < length; y += yStep) {
            for (var x = padding + (size / 2); x <= width - padding && userId < length; x += xStep) {
                var max = size * 1.7;
                var min = size * 0.7;
                var iconSize = Math.floor(Math.random() * (max - min)) + min;
                var coords = {
                    x: x - (iconSize * 1.37 / 2),
                    y: y + (iconSize * 0.7 / 2)
                };
                coords.x += Math.floor(Math.random() * (size / 5 * 4)) - size / 5 * 2;
                coords.y += Math.floor(Math.random() * (size / 5 * 4)) - size / 5 * 2;
                this.users[userId] = tslib_1.__assign({}, this.users[userId], { coords: coords,
                    iconSize: iconSize, isMe: Boolean(userId === 2) // TODO
                 });
                userId += 1;
            }
        }
    };
    return EmojiChatComponent;
}());
exports.EmojiChatComponent = EmojiChatComponent;


/***/ }),

/***/ "./src/app/screens/graphql-and-websockets/graphql-and-websockets.module.ngfactory.js":
/*!*******************************************************************************************!*\
  !*** ./src/app/screens/graphql-and-websockets/graphql-and-websockets.module.ngfactory.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./graphql-and-websockets.module */ "./src/app/screens/graphql-and-websockets/graphql-and-websockets.module.ts");
var i2 = __webpack_require__(/*! ../../../../node_modules/@angular/material/tooltip/typings/index.ngfactory */ "./node_modules/@angular/material/tooltip/typings/index.ngfactory.js");
var i3 = __webpack_require__(/*! ../../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
var i4 = __webpack_require__(/*! ./graphql-and-websockets/graphql-and-websockets.component.ngfactory */ "./src/app/screens/graphql-and-websockets/graphql-and-websockets/graphql-and-websockets.component.ngfactory.js");
var i5 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i6 = __webpack_require__(/*! @angular/cdk/observers */ "@angular/cdk/observers");
var i7 = __webpack_require__(/*! @angular/cdk/overlay */ "@angular/cdk/overlay");
var i8 = __webpack_require__(/*! @angular/cdk/bidi */ "@angular/cdk/bidi");
var i9 = __webpack_require__(/*! @angular/material/tooltip */ "@angular/material/tooltip");
var i10 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var i11 = __webpack_require__(/*! @angular/material/core */ "@angular/material/core");
var i12 = __webpack_require__(/*! @angular/cdk/platform */ "@angular/cdk/platform");
var i13 = __webpack_require__(/*! @angular/material/button */ "@angular/material/button");
var i14 = __webpack_require__(/*! @angular/material/icon */ "@angular/material/icon");
var i15 = __webpack_require__(/*! @angular/cdk/a11y */ "@angular/cdk/a11y");
var i16 = __webpack_require__(/*! @angular/cdk/portal */ "@angular/cdk/portal");
var i17 = __webpack_require__(/*! @angular/cdk/scrolling */ "@angular/cdk/scrolling");
var i18 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i19 = __webpack_require__(/*! ./graphql-and-websockets/graphql-and-websockets.component */ "./src/app/screens/graphql-and-websockets/graphql-and-websockets/graphql-and-websockets.component.ts");
var GraphqlAndWebsocketsModuleNgFactory = i0.ɵcmf(i1.GraphqlAndWebsocketsModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i2.TooltipComponentNgFactory, i3.ɵEmptyOutletComponentNgFactory, i4.GraphqlAndWebsocketsComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i5.NgLocalization, i5.NgLocaleLocalization, [i0.LOCALE_ID, [2, i5.ɵangular_packages_common_common_a]]), i0.ɵmpd(4608, i6.MutationObserverFactory, i6.MutationObserverFactory, []), i0.ɵmpd(4608, i7.Overlay, i7.Overlay, [i7.ScrollStrategyOptions, i7.OverlayContainer, i0.ComponentFactoryResolver, i7.OverlayPositionBuilder, i7.OverlayKeyboardDispatcher, i0.Injector, i0.NgZone, i5.DOCUMENT, i8.Directionality, [2, i5.Location]]), i0.ɵmpd(5120, i7.ɵc, i7.ɵd, [i7.Overlay]), i0.ɵmpd(5120, i9.MAT_TOOLTIP_SCROLL_STRATEGY, i9.MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY, [i7.Overlay]), i0.ɵmpd(4608, i10.HAMMER_GESTURE_CONFIG, i11.GestureConfig, [[2, i11.MAT_HAMMER_OPTIONS], [2, i11.MatCommonModule]]), i0.ɵmpd(1073742336, i5.CommonModule, i5.CommonModule, []), i0.ɵmpd(1073742336, i8.BidiModule, i8.BidiModule, []), i0.ɵmpd(1073742336, i11.MatCommonModule, i11.MatCommonModule, [[2, i11.MATERIAL_SANITY_CHECKS], [2, i10.HAMMER_LOADER]]), i0.ɵmpd(1073742336, i12.PlatformModule, i12.PlatformModule, []), i0.ɵmpd(1073742336, i11.MatRippleModule, i11.MatRippleModule, []), i0.ɵmpd(1073742336, i13.MatButtonModule, i13.MatButtonModule, []), i0.ɵmpd(1073742336, i14.MatIconModule, i14.MatIconModule, []), i0.ɵmpd(1073742336, i6.ObserversModule, i6.ObserversModule, []), i0.ɵmpd(1073742336, i15.A11yModule, i15.A11yModule, []), i0.ɵmpd(1073742336, i16.PortalModule, i16.PortalModule, []), i0.ɵmpd(1073742336, i17.ScrollingModule, i17.ScrollingModule, []), i0.ɵmpd(1073742336, i7.OverlayModule, i7.OverlayModule, []), i0.ɵmpd(1073742336, i9.MatTooltipModule, i9.MatTooltipModule, []), i0.ɵmpd(1073742336, i18.RouterModule, i18.RouterModule, [[2, i18.ɵangular_packages_router_router_a], [2, i18.Router]]), i0.ɵmpd(1073742336, i1.GraphqlAndWebsocketsModule, i1.GraphqlAndWebsocketsModule, []), i0.ɵmpd(1024, i18.ROUTES, function () { return [[{ path: "", component: i19.GraphqlAndWebsocketsComponent }]]; }, [])]); });
exports.GraphqlAndWebsocketsModuleNgFactory = GraphqlAndWebsocketsModuleNgFactory;


/***/ }),

/***/ "./src/app/screens/graphql-and-websockets/graphql-and-websockets.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/screens/graphql-and-websockets/graphql-and-websockets.module.ts ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GraphqlAndWebsocketsModule = /** @class */ (function () {
    function GraphqlAndWebsocketsModule() {
    }
    return GraphqlAndWebsocketsModule;
}());
exports.GraphqlAndWebsocketsModule = GraphqlAndWebsocketsModule;


/***/ }),

/***/ "./src/app/screens/graphql-and-websockets/graphql-and-websockets/graphql-and-websockets.component.ngfactory.js":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/screens/graphql-and-websockets/graphql-and-websockets/graphql-and-websockets.component.ngfactory.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./graphql-and-websockets.component.scss.shim.ngstyle */ "./src/app/screens/graphql-and-websockets/graphql-and-websockets/graphql-and-websockets.component.scss.shim.ngstyle.js");
var i1 = __webpack_require__(/*! ../../screens-style.scss.shim.ngstyle */ "./src/app/screens/screens-style.scss.shim.ngstyle.js");
var i2 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i3 = __webpack_require__(/*! ../../../../../node_modules/@angular/material/button/typings/index.ngfactory */ "./node_modules/@angular/material/button/typings/index.ngfactory.js");
var i4 = __webpack_require__(/*! @angular/material/button */ "@angular/material/button");
var i5 = __webpack_require__(/*! @angular/cdk/platform */ "@angular/cdk/platform");
var i6 = __webpack_require__(/*! @angular/cdk/a11y */ "@angular/cdk/a11y");
var i7 = __webpack_require__(/*! @angular/platform-browser/animations */ "@angular/platform-browser/animations");
var i8 = __webpack_require__(/*! @angular/material/tooltip */ "@angular/material/tooltip");
var i9 = __webpack_require__(/*! @angular/cdk/overlay */ "@angular/cdk/overlay");
var i10 = __webpack_require__(/*! @angular/cdk/scrolling */ "@angular/cdk/scrolling");
var i11 = __webpack_require__(/*! @angular/cdk/bidi */ "@angular/cdk/bidi");
var i12 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var i13 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i14 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i15 = __webpack_require__(/*! ../../../../../node_modules/@angular/material/icon/typings/index.ngfactory */ "./node_modules/@angular/material/icon/typings/index.ngfactory.js");
var i16 = __webpack_require__(/*! @angular/material/icon */ "@angular/material/icon");
var i17 = __webpack_require__(/*! ./graphql-and-websockets.component */ "./src/app/screens/graphql-and-websockets/graphql-and-websockets/graphql-and-websockets.component.ts");
var styles_GraphqlAndWebsocketsComponent = [i0.styles, i1.styles];
var RenderType_GraphqlAndWebsocketsComponent = i2.ɵcrt({ encapsulation: 0, styles: styles_GraphqlAndWebsocketsComponent, data: {} });
exports.RenderType_GraphqlAndWebsocketsComponent = RenderType_GraphqlAndWebsocketsComponent;
function View_GraphqlAndWebsocketsComponent_0(_l) { return i2.ɵvid(0, [(_l()(), i2.ɵeld(0, 0, null, null, 10, "section", [["class", "home"]], null, null, null, null, null)), (_l()(), i2.ɵeld(1, 0, null, null, 9, "nav", [], null, null, null, null, null)), (_l()(), i2.ɵeld(2, 0, null, null, 0, "a", [["href", ""]], null, null, null, null, null)), (_l()(), i2.ɵeld(3, 0, null, null, 0, "a", [["href", ""]], null, null, null, null, null)), (_l()(), i2.ɵeld(4, 16777216, null, null, 6, "a", [["color", "white"], ["mat-mini-fab", ""], ["mat-raised-button", ""], ["matTooltip", "Go to home page"], ["routerLink", "/"]], [[1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null], [1, "target", 0], [8, "href", 4]], [[null, "click"], [null, "longpress"], [null, "keydown"], [null, "touchend"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i2.ɵnov(_v, 5)._haltDisabledEvents($event) !== false);
        ad = (pd_0 && ad);
    } if (("longpress" === en)) {
        var pd_1 = (i2.ɵnov(_v, 6).show() !== false);
        ad = (pd_1 && ad);
    } if (("keydown" === en)) {
        var pd_2 = (i2.ɵnov(_v, 6)._handleKeydown($event) !== false);
        ad = (pd_2 && ad);
    } if (("touchend" === en)) {
        var pd_3 = (i2.ɵnov(_v, 6)._handleTouchend() !== false);
        ad = (pd_3 && ad);
    } if (("click" === en)) {
        var pd_4 = (i2.ɵnov(_v, 7).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_4 && ad);
    } return ad; }, i3.View_MatAnchor_0, i3.RenderType_MatAnchor)), i2.ɵdid(5, 180224, null, 0, i4.MatAnchor, [i5.Platform, i6.FocusMonitor, i2.ElementRef, [2, i7.ANIMATION_MODULE_TYPE]], { color: [0, "color"] }, null), i2.ɵdid(6, 147456, null, 0, i8.MatTooltip, [i9.Overlay, i2.ElementRef, i10.ScrollDispatcher, i2.ViewContainerRef, i2.NgZone, i5.Platform, i6.AriaDescriber, i6.FocusMonitor, i8.MAT_TOOLTIP_SCROLL_STRATEGY, [2, i11.Directionality], [2, i8.MAT_TOOLTIP_DEFAULT_OPTIONS], [2, i12.HAMMER_LOADER]], { position: [0, "position"], message: [1, "message"] }, null), i2.ɵdid(7, 671744, null, 0, i13.RouterLinkWithHref, [i13.Router, i13.ActivatedRoute, i14.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i2.ɵeld(8, 0, null, 0, 2, "mat-icon", [["aria-label", "Go to home page"], ["class", "mat-icon"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, i15.View_MatIcon_0, i15.RenderType_MatIcon)), i2.ɵdid(9, 9158656, null, 0, i16.MatIcon, [i2.ElementRef, i16.MatIconRegistry, [8, null], [2, i16.MAT_ICON_LOCATION]], null, null), (_l()(), i2.ɵted(-1, 0, ["arrow_forward"]))], function (_ck, _v) { var currVal_6 = "white"; _ck(_v, 5, 0, currVal_6); var currVal_7 = "left"; var currVal_8 = "Go to home page"; _ck(_v, 6, 0, currVal_7, currVal_8); var currVal_9 = "/"; _ck(_v, 7, 0, currVal_9); _ck(_v, 9, 0); }, function (_ck, _v) { var currVal_0 = (i2.ɵnov(_v, 5).disabled ? (0 - 1) : (i2.ɵnov(_v, 5).tabIndex || 0)); var currVal_1 = (i2.ɵnov(_v, 5).disabled || null); var currVal_2 = i2.ɵnov(_v, 5).disabled.toString(); var currVal_3 = (i2.ɵnov(_v, 5)._animationMode === "NoopAnimations"); var currVal_4 = i2.ɵnov(_v, 7).target; var currVal_5 = i2.ɵnov(_v, 7).href; _ck(_v, 4, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); var currVal_10 = i2.ɵnov(_v, 9).inline; var currVal_11 = (((i2.ɵnov(_v, 9).color !== "primary") && (i2.ɵnov(_v, 9).color !== "accent")) && (i2.ɵnov(_v, 9).color !== "warn")); _ck(_v, 8, 0, currVal_10, currVal_11); }); }
exports.View_GraphqlAndWebsocketsComponent_0 = View_GraphqlAndWebsocketsComponent_0;
function View_GraphqlAndWebsocketsComponent_Host_0(_l) { return i2.ɵvid(0, [(_l()(), i2.ɵeld(0, 0, null, null, 1, "app-graphql-and-websockets", [], null, null, null, View_GraphqlAndWebsocketsComponent_0, RenderType_GraphqlAndWebsocketsComponent)), i2.ɵdid(1, 114688, null, 0, i17.GraphqlAndWebsocketsComponent, [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_GraphqlAndWebsocketsComponent_Host_0 = View_GraphqlAndWebsocketsComponent_Host_0;
var GraphqlAndWebsocketsComponentNgFactory = i2.ɵccf("app-graphql-and-websockets", i17.GraphqlAndWebsocketsComponent, View_GraphqlAndWebsocketsComponent_Host_0, {}, {}, []);
exports.GraphqlAndWebsocketsComponentNgFactory = GraphqlAndWebsocketsComponentNgFactory;


/***/ }),

/***/ "./src/app/screens/graphql-and-websockets/graphql-and-websockets/graphql-and-websockets.component.scss.shim.ngstyle.js":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/screens/graphql-and-websockets/graphql-and-websockets/graphql-and-websockets.component.scss.shim.ngstyle.js ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjcmVlbnMvZ3JhcGhxbC1hbmQtd2Vic29ja2V0cy9ncmFwaHFsLWFuZC13ZWJzb2NrZXRzL2dyYXBocWwtYW5kLXdlYnNvY2tldHMuY29tcG9uZW50LnNjc3MifQ== */"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/screens/graphql-and-websockets/graphql-and-websockets/graphql-and-websockets.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/screens/graphql-and-websockets/graphql-and-websockets/graphql-and-websockets.component.ts ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var GraphqlAndWebsocketsComponent = /** @class */ (function () {
    function GraphqlAndWebsocketsComponent() {
    }
    GraphqlAndWebsocketsComponent.prototype.ngOnInit = function () {
    };
    return GraphqlAndWebsocketsComponent;
}());
exports.GraphqlAndWebsocketsComponent = GraphqlAndWebsocketsComponent;


/***/ }),

/***/ "./src/app/screens/home/components/chat-message/chat-message.component.ngfactory.js":
/*!******************************************************************************************!*\
  !*** ./src/app/screens/home/components/chat-message/chat-message.component.ngfactory.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./chat-message.component.scss.shim.ngstyle */ "./src/app/screens/home/components/chat-message/chat-message.component.scss.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i3 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i4 = __webpack_require__(/*! ./chat-message.component */ "./src/app/screens/home/components/chat-message/chat-message.component.ts");
var i5 = __webpack_require__(/*! ../../services/scrolling.service */ "./src/app/screens/home/services/scrolling.service.ts");
var styles_ChatMessageComponent = [i0.styles];
var RenderType_ChatMessageComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_ChatMessageComponent, data: { "animation": [{ type: 7, name: "animation", definitions: [{ type: 1, expr: ":enter", animation: [{ type: 11, selector: ":self", animation: [{ type: 6, styles: { opacity: 0 }, offset: null }, { type: 4, styles: { type: 6, styles: { opacity: 0 }, offset: null }, timings: 50 }, { type: 4, styles: { type: 6, styles: { opacity: 1 }, offset: null }, timings: 150 }], options: null }, { type: 11, selector: "@contentAnimation", animation: [{ type: 9, options: null }], options: null }], options: null }, { type: 1, expr: ":leave", animation: { type: 4, styles: { type: 6, styles: { opacity: 0 }, offset: null }, timings: 500 }, options: null }], options: {} }, { type: 7, name: "contentAnimation", definitions: [{ type: 1, expr: ":enter", animation: [{ type: 6, styles: { opacity: 0, transform: "scale(0.95) translateY(-6px)" }, offset: null }, { type: 4, styles: { type: 6, styles: { opacity: 0, transform: "scale(0.95) translateY(-6px)" }, offset: null }, timings: 100 }, { type: 4, styles: { type: 6, styles: { opacity: 1, transform: "scale(1.03) translateY(0px)" }, offset: null }, timings: 150 }, { type: 4, styles: { type: 6, styles: { opacity: 1, transform: "scale(1) translateY(0px)" }, offset: null }, timings: 150 }], options: null }, { type: 1, expr: ":leave", animation: { type: 4, styles: { type: 6, styles: { opacity: 0 }, offset: null }, timings: 500 }, options: null }], options: {} }] } });
exports.RenderType_ChatMessageComponent = RenderType_ChatMessageComponent;
function View_ChatMessageComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 0, "img", [["src", "/assets/person.svg"]], null, null, null, null, null))], null, null); }
function View_ChatMessageComponent_2(_l) { return i1.ɵvid(0, [i1.ɵncd(null, 0), (_l()(), i1.ɵand(0, null, null, 0))], null, null); }
function View_ChatMessageComponent_3(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 0, "span", [], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 0, "span", [], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 0, "span", [], null, null, null, null, null))], null, null); }
function View_ChatMessageComponent_0(_l) { return i1.ɵvid(0, [i1.ɵpid(0, i2.LowerCasePipe, []), i1.ɵpid(0, i2.DatePipe, [i1.LOCALE_ID]), i1.ɵqud(402653184, 1, { wrapper: 0 }), i1.ɵqud(402653184, 2, { avatar: 0 }), (_l()(), i1.ɵeld(4, 0, null, null, 21, "div", [["class", "message"]], [[24, "@animation", 0]], null, null, null, null)), i1.ɵdid(5, 278528, null, 0, i2.NgClass, [i1.IterableDiffers, i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i1.ɵpod(6, { bot: 0, user: 1, alone: 2, first: 3, between: 4, last: 5, commands: 6, loading: 7, welcome: 8, "message-for-next-group": 9 }), (_l()(), i1.ɵeld(7, 0, [[2, 0], ["avatar", 1]], null, 5, "div", [["class", "avatar"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 10).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(8, 278528, null, 0, i2.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(9, { backgroundPosition: 0, opacity: 1 }), i1.ɵdid(10, 16384, null, 0, i3.RouterLink, [i3.Router, i3.ActivatedRoute, [8, null], i1.Renderer2, i1.ElementRef], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ChatMessageComponent_1)), i1.ɵdid(12, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(13, 0, null, null, 12, "div", [["class", "content-wrapper"]], null, null, null, null, null)), (_l()(), i1.ɵeld(14, 0, null, null, 5, "div", [["class", "message-info"]], null, null, null, null, null)), (_l()(), i1.ɵted(15, null, ["", " "])), (_l()(), i1.ɵeld(16, 0, null, null, 3, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(17, null, ["", ""])), i1.ɵppd(18, 2), i1.ɵppd(19, 1), (_l()(), i1.ɵeld(20, 0, null, null, 5, "div", [["class", "content"]], [[24, "@contentAnimation", 0]], null, null, null, null)), i1.ɵdid(21, 278528, null, 0, i2.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(22, { backgroundPosition: 0, opacity: 1 }), (_l()(), i1.ɵeld(23, 0, [[1, 0], ["wrapper", 1]], null, 2, "div", [], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ChatMessageComponent_2)), i1.ɵdid(25, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), (_l()(), i1.ɵand(0, [["loadingBlock", 2]], null, 0, null, View_ChatMessageComponent_3))], function (_ck, _v) { var _co = _v.component; var currVal_1 = "message"; var currVal_2 = _ck(_v, 6, 0, (_co.sender === _co.Sender.Bot), (_co.sender === _co.Sender.User), (_co.type === _co.Type.Alone), (_co.type === _co.Type.First), (_co.type === _co.Type.Between), (_co.type === _co.Type.Last), _co.isCommands, _co.loading, _co.welcome, _co.messageForNextGroup); _ck(_v, 5, 0, currVal_1, currVal_2); var currVal_3 = _ck(_v, 9, 0, (((_co.sender === _co.Sender.User) && _co.avatarBackgroundPosition) ? (((_co.avatarBackgroundPosition[0] + "px ") + _co.avatarBackgroundPosition[1]) + "px") : null), (((_co.sender === _co.Sender.Bot) || _co.avatarBackgroundPosition) ? 1 : 0)); _ck(_v, 8, 0, currVal_3); var currVal_4 = ((_co.sender === _co.Sender.User) ? "/emoji-chat" : null); _ck(_v, 10, 0, currVal_4); var currVal_5 = (_co.sender === _co.Sender.User); _ck(_v, 12, 0, currVal_5); var currVal_9 = _ck(_v, 22, 0, (((_co.sender === _co.Sender.User) && _co.contentBackgroundPosition) ? (((_co.contentBackgroundPosition[0] + "px ") + _co.contentBackgroundPosition[1]) + "px") : null), (((_co.sender === _co.Sender.Bot) || _co.contentBackgroundPosition) ? 1 : 0)); _ck(_v, 21, 0, currVal_9); var currVal_10 = !_co.loading; var currVal_11 = i1.ɵnov(_v, 26); _ck(_v, 25, 0, currVal_10, currVal_11); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = undefined; _ck(_v, 4, 0, currVal_0); var currVal_6 = _co.name; _ck(_v, 15, 0, currVal_6); var currVal_7 = i1.ɵunv(_v, 17, 0, _ck(_v, 19, 0, i1.ɵnov(_v, 0), i1.ɵunv(_v, 17, 0, _ck(_v, 18, 0, i1.ɵnov(_v, 1), _co.date, "shortTime")))); _ck(_v, 17, 0, currVal_7); var currVal_8 = undefined; _ck(_v, 20, 0, currVal_8); }); }
exports.View_ChatMessageComponent_0 = View_ChatMessageComponent_0;
function View_ChatMessageComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-chat-message", [], null, [["window", "resize"]], function (_v, en, $event) { var ad = true; if (("window:resize" === en)) {
        var pd_0 = (i1.ɵnov(_v, 1).updateBackgroundPosition($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_ChatMessageComponent_0, RenderType_ChatMessageComponent)), i1.ɵdid(1, 245760, null, 0, i4.ChatMessageComponent, [i5.ScrollingService, i1.PLATFORM_ID], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_ChatMessageComponent_Host_0 = View_ChatMessageComponent_Host_0;
var ChatMessageComponentNgFactory = i1.ɵccf("app-chat-message", i4.ChatMessageComponent, View_ChatMessageComponent_Host_0, { sender: "sender", type: "type", welcome: "welcome", loading: "loading", messageForNextGroup: "messageForNextGroup", date: "date", isCommands: "isCommands" }, {}, ["*"]);
exports.ChatMessageComponentNgFactory = ChatMessageComponentNgFactory;


/***/ }),

/***/ "./src/app/screens/home/components/chat-message/chat-message.component.scss.shim.ngstyle.js":
/*!**************************************************************************************************!*\
  !*** ./src/app/screens/home/components/chat-message/chat-message.component.scss.shim.ngstyle.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = ["[_nghost-%COMP%] {\n  width: 100%;\n  display: flex; }\n\n.avatar[_ngcontent-%COMP%] {\n  outline: none;\n  width: 48px;\n  height: 48px;\n  border-radius: 24px;\n  background: url(/assets/photos/mikhail-tsai.jpg) 50% 50% no-repeat;\n  background-position: top;\n  background-size: 115%;\n  flex-basis: 48px;\n  min-width: 48px; }\n\n@media screen and (max-width: 440px) {\n    .avatar[_ngcontent-%COMP%] {\n      width: 30px;\n      height: 30px;\n      flex-basis: 30px;\n      min-width: 30px; } }\n\n.content-wrapper[_ngcontent-%COMP%] {\n  margin-left: 16px;\n  max-width: 500px; }\n\n@media screen and (max-width: 440px) {\n    .content-wrapper[_ngcontent-%COMP%] {\n      margin-left: 5px; } }\n\n.message-info[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 200; }\n\n.message-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    letter-spacing: 0.5px; }\n\n.content[_ngcontent-%COMP%] {\n  background: #eef0ff;\n  margin-top: 7px;\n  font-size: 13.333px;\n  line-height: 22px;\n  font-weight: 500;\n  color: #28282c;\n  border-radius: 20px;\n  border-top-left-radius: 0px;\n  transition: border-radius .03s ease-in; }\n\n.content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    padding: 13.5px 18px 13.5px 18px; }\n\n@media screen and (max-width: 440px) {\n    .content[_ngcontent-%COMP%] {\n      font-size: 13px; }\n      .content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n        padding: 9.5px 15px 9.5px 15px; } }\n\n[_nghost-%COMP%]     .content ul {\n  margin: 0;\n  padding-left: 15px;\n  list-style-type: circle; }\n\n.loading[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 11px;\n  height: 11px;\n  border-radius: 6px;\n  background-color: #c3c3cd;\n  -webkit-transform: translateY(1px);\n          transform: translateY(1px);\n  -webkit-animation: loading 1.3s linear infinite;\n          animation: loading 1.3s linear infinite; }\n\n.loading[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(:last-child) {\n    margin-right: 7px; }\n\n.loading[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n    -webkit-animation-delay: 0.325s;\n            animation-delay: 0.325s; }\n\n.loading[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n    -webkit-animation-delay: 0.65s;\n            animation-delay: 0.65s; }\n\n@-webkit-keyframes loading {\n  0%, 75%, 100% {\n    background-color: #c3c3cd; }\n  37.5% {\n    background-color: #818181; } }\n\n@keyframes loading {\n  0%, 75%, 100% {\n    background-color: #c3c3cd; }\n  37.5% {\n    background-color: #818181; } }\n\n.message[_ngcontent-%COMP%] {\n  display: flex; }\n\n@media screen and (max-width: 440px) {\n    .message[_ngcontent-%COMP%] {\n      margin-right: 35px; } }\n\n.message.first[_ngcontent-%COMP%]:not(.welcome):not(.loading), .message.alone[_ngcontent-%COMP%]:not(.welcome):not(.loading), .message.loading.message-for-next-group[_ngcontent-%COMP%] {\n    margin-top: 22px; }\n\n@media screen and (max-width: 440px) {\n      .message.first[_ngcontent-%COMP%]:not(.welcome):not(.loading), .message.alone[_ngcontent-%COMP%]:not(.welcome):not(.loading), .message.loading.message-for-next-group[_ngcontent-%COMP%] {\n        margin-top: 12px; } }\n\n.message.first[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%], .message.between[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    border-bottom-left-radius: 0px; }\n\n.message.between[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%], .message.last[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%], .message.loading[_ngcontent-%COMP%]:not(.welcome):not(.message-for-next-group)   .avatar[_ngcontent-%COMP%] {\n    visibility: hidden;\n    opacity: 0; }\n\n.message.between[_ngcontent-%COMP%]   .message-info[_ngcontent-%COMP%], .message.last[_ngcontent-%COMP%]   .message-info[_ngcontent-%COMP%], .message.loading[_ngcontent-%COMP%]:not(.welcome):not(.message-for-next-group)   .message-info[_ngcontent-%COMP%] {\n    display: none; }\n\n.message.between[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%], .message.last[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%], .message.loading[_ngcontent-%COMP%]:not(.welcome):not(.message-for-next-group)   .content[_ngcontent-%COMP%] {\n    margin-top: 2px; }\n\n.user[_ngcontent-%COMP%] {\n  margin-left: auto;\n  flex-direction: row-reverse; }\n\n@media screen and (max-width: 440px) {\n    .user[_ngcontent-%COMP%] {\n      margin-right: 0px;\n      width: calc(100% - 35px); } }\n\n.user[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%] {\n    margin-left: 0px;\n    margin-right: 16px; }\n\n@media screen and (max-width: 440px) {\n      .user[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%] {\n        margin-right: 5px; } }\n\n.user[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .message-info[_ngcontent-%COMP%] {\n      text-align: right; }\n\n.user[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n      color: #fff;\n      border-radius: 20px;\n      border-top-right-radius: 0px;\n      background: url(/assets/blured-background.jpg) 50% 50% no-repeat; }\n\n.user[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n        background: rgba(28, 31, 31, 0.6);\n        border-radius: 20px;\n        border-top-right-radius: 0px; }\n\n.user[_ngcontent-%COMP%]:not(.commands)   .content[_ngcontent-%COMP%] {\n    font-weight: 400; }\n\n.user.commands[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    opacity: 0;\n    transition: opacity .3s ease-in; }\n\n.user.commands[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n      padding: 24px 16px 16px 24px;\n      background: rgba(28, 31, 31, 0.6); }\n\n.user[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n    background: url(/assets/blured-background.jpg) 50% 50% no-repeat;\n    position: relative; }\n\n.user[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]:before {\n      content: '';\n      background: rgba(28, 31, 31, 0.6);\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      border-radius: 50%; }\n\n.user[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n      position: absolute;\n      width: 18px;\n      height: 21px;\n      left: 0;\n      right: 0;\n      top: 0;\n      bottom: 2px;\n      margin: auto; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NyZWVucy9ob21lL2NvbXBvbmVudHMvY2hhdC1tZXNzYWdlL0Q6XFxwcm9ncmFtbWluZ1xcdHNhaXRlY2hcXHBhY2thZ2VzXFx1bml2ZXJzYWwtYXBwL3NyY1xcYXBwXFxzY3JlZW5zXFxob21lXFxjb21wb25lbnRzXFxjaGF0LW1lc3NhZ2VcXGNoYXQtbWVzc2FnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFlBQVc7RUFDWCxjQUFhLEVBQ2Q7O0FBRUQ7RUFDRSxjQUFhO0VBQ2IsWUFBVztFQUNYLGFBQVk7RUFDWixvQkFBbUI7RUFDbkIsbUVBQWtFO0VBQ2xFLHlCQUF3QjtFQUN4QixzQkFBcUI7RUFDckIsaUJBQWdCO0VBQ2hCLGdCQUFlLEVBT2hCOztBQU5DO0lBVkY7TUFXSSxZQUFXO01BQ1gsYUFBWTtNQUNaLGlCQUFnQjtNQUNoQixnQkFBZSxFQUVsQixFQUFBOztBQUVEO0VBQ0Usa0JBQWlCO0VBQ2pCLGlCQUFnQixFQUlqQjs7QUFIQztJQUhGO01BSUksaUJBQWdCLEVBRW5CLEVBQUE7O0FBRUQ7RUFDRSxnQkFBZTtFQUNmLGlCQUFnQixFQUlqQjs7QUFORDtJQUlJLHNCQUFxQixFQUN0Qjs7QUFHSDtFQUNFLG9CQUFtQjtFQUNuQixnQkFBZTtFQUNmLG9CQUFtQjtFQUNuQixrQkFBaUI7RUFDakIsaUJBQWdCO0VBQ2hCLGVBQWM7RUFDZCxvQkFoRDBCO0VBaUQxQiw0QkFBMkI7RUFDM0IsdUNBQXNDLEVBVXZDOztBQW5CRDtJQVdJLGlDQUFnQyxFQUNqQzs7QUFDRDtJQWJGO01BY0ksZ0JBQWUsRUFLbEI7TUFuQkQ7UUFnQk0sK0JBQThCLEVBQy9CLEVBQUE7O0FBSUw7RUFHTSxVQUFTO0VBQ1QsbUJBQWtCO0VBQ2xCLHdCQUF1QixFQUN4Qjs7QUFJTDtFQUdJLHNCQUFxQjtFQUNyQixZQUFXO0VBQ1gsYUFBWTtFQUNaLG1CQUFrQjtFQUNsQiwwQkFBeUI7RUFDekIsbUNBQTBCO1VBQTFCLDJCQUEwQjtFQUMxQixnREFBNEM7VUFBNUMsd0NBQTRDLEVBa0I3Qzs7QUEzQkg7SUFXTSxrQkFBaUIsRUFDbEI7O0FBWkw7SUFjTSxnQ0FBcUM7WUFBckMsd0JBQXFDLEVBQ3RDOztBQWZMO0lBaUJNLCtCQUF5QztZQUF6Qyx1QkFBeUMsRUFDMUM7O0FBQ0Q7RUFDRTtJQUNFLDBCQUF5QixFQUFBO0VBRTNCO0lBQ0UsMEJBQXlCLEVBQUEsRUFBQTs7QUFMN0I7RUFDRTtJQUNFLDBCQUF5QixFQUFBO0VBRTNCO0lBQ0UsMEJBQXlCLEVBQUEsRUFBQTs7QUFNakM7RUFDRSxjQUFhLEVBa0NkOztBQWhDQztJQUhGO01BSUksbUJBQWtCLEVBK0JyQixFQUFBOztBQW5DRDtJQVVJLGlCQUFnQixFQUlqQjs7QUFIQztNQVhKO1FBWU0saUJBQWdCLEVBRW5CLEVBQUE7O0FBZEg7SUFvQk0sK0JBQThCLEVBQy9COztBQXJCTDtJQXlCTSxtQkFBa0I7SUFDbEIsV0FBVSxFQUNYOztBQTNCTDtJQTZCTSxjQUFhLEVBQ2Q7O0FBOUJMO0lBZ0NNLGdCQUFlLEVBQ2hCOztBQUlMO0VBQ0Usa0JBQWlCO0VBQ2pCLDRCQUEyQixFQWtFNUI7O0FBakVDO0lBSEY7TUFJSSxrQkFBaUI7TUFDakIseUJBQXdCLEVBK0QzQixFQUFBOztBQXBFRDtJQVFJLGlCQUFnQjtJQUNoQixtQkFBa0IsRUFrQm5COztBQWpCQztNQVZKO1FBV00sa0JBQWlCLEVBZ0JwQixFQUFBOztBQTNCSDtNQWNNLGtCQUFpQixFQUNsQjs7QUFmTDtNQWlCTSxZQUFXO01BQ1gsb0JBN0pzQjtNQThKdEIsNkJBQTRCO01BQzVCLGlFQUFnRSxFQU1qRTs7QUExQkw7UUFzQlEsa0NBQWlDO1FBQ2pDLG9CQWxLb0I7UUFtS3BCLDZCQUE0QixFQUM3Qjs7QUF6QlA7SUE4Qk0saUJBQWdCLEVBQ2pCOztBQS9CTDtJQW1DTSxXQUFVO0lBQ1YsZ0NBQStCLEVBS2hDOztBQXpDTDtNQXNDUSw2QkFBNEI7TUFDNUIsa0NBQWlDLEVBQ2xDOztBQXhDUDtJQTRDSSxpRUFBZ0U7SUFDaEUsbUJBQWtCLEVBc0JuQjs7QUFuRUg7TUFnRE0sWUFBVztNQUNYLGtDQUFpQztNQUNqQyxtQkFBa0I7TUFDbEIsT0FBTTtNQUNOLFFBQU87TUFDUCxTQUFRO01BQ1IsVUFBUztNQUNULG1CQUFrQixFQUNuQjs7QUF4REw7TUEwRE0sbUJBQWtCO01BQ2xCLFlBQVc7TUFDWCxhQUFZO01BQ1osUUFBTztNQUNQLFNBQVE7TUFDUixPQUFNO01BQ04sWUFBVztNQUNYLGFBQVksRUFDYiIsImZpbGUiOiJzcmMvYXBwL3NjcmVlbnMvaG9tZS9jb21wb25lbnRzL2NoYXQtbWVzc2FnZS9jaGF0LW1lc3NhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29udGVudC1ib3JkZXItcmFkaXVzOiAyMHB4O1xuXG46aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uYXZhdGFyIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogNDhweDtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvcGhvdG9zL21pa2hhaWwtdHNhaS5qcGcpIDUwJSA1MCUgbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XG4gIGJhY2tncm91bmQtc2l6ZTogMTE1JTtcbiAgZmxleC1iYXNpczogNDhweDtcbiAgbWluLXdpZHRoOiA0OHB4O1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NDBweCkge1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBmbGV4LWJhc2lzOiAzMHB4O1xuICAgIG1pbi13aWR0aDogMzBweDtcbiAgfVxufVxuXG4uY29udGVudC13cmFwcGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ0MHB4KSB7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgfVxufVxuXG4ubWVzc2FnZS1pbmZvIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogMjAwO1xuICBzcGFuIHtcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIH1cbn1cblxuLmNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjZWVmMGZmO1xuICBtYXJnaW4tdG9wOiA3cHg7XG4gIGZvbnQtc2l6ZTogMTMuMzMzcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzI4MjgyYztcbiAgYm9yZGVyLXJhZGl1czogJGNvbnRlbnQtYm9yZGVyLXJhZGl1cztcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xuICB0cmFuc2l0aW9uOiBib3JkZXItcmFkaXVzIC4wM3MgZWFzZS1pbjtcbiAgJiA+IGRpdiB7XG4gICAgcGFkZGluZzogMTMuNXB4IDE4cHggMTMuNXB4IDE4cHg7XG4gIH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDQwcHgpIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgJiA+IGRpdiB7XG4gICAgICBwYWRkaW5nOiA5LjVweCAxNXB4IDkuNXB4IDE1cHg7XG4gICAgfVxuICB9XG59XG5cbjpob3N0IDo6bmctZGVlcCB7XG4gIC5jb250ZW50IHtcbiAgICB1bCB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgICBsaXN0LXN0eWxlLXR5cGU6IGNpcmNsZTtcbiAgICB9XG4gIH1cbn1cblxuLmxvYWRpbmcge1xuICAuY29udGVudCBzcGFuIHtcbiAgICAkZHVyYXRpb246IDEuM3M7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMXB4O1xuICAgIGhlaWdodDogMTFweDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MzYzNjZDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXB4KTtcbiAgICBhbmltYXRpb246IGxvYWRpbmcgJGR1cmF0aW9uIGxpbmVhciBpbmZpbml0ZTtcbiAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgbWFyZ2luLXJpZ2h0OiA3cHg7XG4gICAgfVxuICAgICY6bnRoLWNoaWxkKDIpIHtcbiAgICAgIGFuaW1hdGlvbi1kZWxheTogJGR1cmF0aW9uICogMC43NSAvIDM7XG4gICAgfVxuICAgICY6bnRoLWNoaWxkKDMpIHtcbiAgICAgIGFuaW1hdGlvbi1kZWxheTogJGR1cmF0aW9uICogMC43NSAvIDMgKiAyO1xuICAgIH1cbiAgICBAa2V5ZnJhbWVzIGxvYWRpbmcge1xuICAgICAgMCUsIDc1JSwgMTAwJSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjM2MzY2Q7XG4gICAgICB9XG4gICAgICAzNy41JSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4MTgxODE7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5tZXNzYWdlIHtcbiAgZGlzcGxheTogZmxleDtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NDBweCkge1xuICAgIG1hcmdpbi1yaWdodDogMzVweDtcbiAgfVxuXG4gICYuZmlyc3Q6bm90KC53ZWxjb21lKTpub3QoLmxvYWRpbmcpLFxuICAmLmFsb25lOm5vdCgud2VsY29tZSk6bm90KC5sb2FkaW5nKSxcbiAgJi5sb2FkaW5nLm1lc3NhZ2UtZm9yLW5leHQtZ3JvdXAge1xuICAgIG1hcmdpbi10b3A6IDIycHg7XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDQwcHgpIHtcbiAgICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgfVxuICB9XG4gICYubG9hZGluZy5tZXNzYWdlLWZvci1uZXh0LWdyb3VwIHtcblxuICB9XG4gICYuZmlyc3QsICYuYmV0d2VlbiB7XG4gICAgLmNvbnRlbnQge1xuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4O1xuICAgIH1cbiAgfVxuICAmLmJldHdlZW4sICYubGFzdCwgJi5sb2FkaW5nOm5vdCgud2VsY29tZSk6bm90KC5tZXNzYWdlLWZvci1uZXh0LWdyb3VwKSB7XG4gICAgLmF2YXRhciB7XG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICAubWVzc2FnZS1pbmZvIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5jb250ZW50IHtcbiAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICB9XG4gIH1cbn1cblxuLnVzZXIge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NDBweCkge1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzNXB4KTtcbiAgfVxuICAuY29udGVudC13cmFwcGVyIHtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NDBweCkge1xuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgfVxuICAgIC5tZXNzYWdlLWluZm8ge1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgfVxuICAgIC5jb250ZW50IHtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgYm9yZGVyLXJhZGl1czogJGNvbnRlbnQtYm9yZGVyLXJhZGl1cztcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9ibHVyZWQtYmFja2dyb3VuZC5qcGcpIDUwJSA1MCUgbm8tcmVwZWF0O1xuICAgICAgJiA+IGRpdiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjgsIDMxLCAzMSwgMC42KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogJGNvbnRlbnQtYm9yZGVyLXJhZGl1cztcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJjpub3QoLmNvbW1hbmRzKSB7XG4gICAgLmNvbnRlbnQge1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB9XG4gIH1cbiAgJi5jb21tYW5kcyB7XG4gICAgLmNvbnRlbnQge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjNzIGVhc2UtaW47XG4gICAgICAmID4gZGl2IHtcbiAgICAgICAgcGFkZGluZzogMjRweCAxNnB4IDE2cHggMjRweDtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyOCwgMzEsIDMxLCAwLjYpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAuYXZhdGFyIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9ibHVyZWQtYmFja2dyb3VuZC5qcGcpIDUwJSA1MCUgbm8tcmVwZWF0O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICY6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyOCwgMzEsIDMxLCAwLjYpO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIH1cbiAgICBpbWcge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgd2lkdGg6IDE4cHg7XG4gICAgICBoZWlnaHQ6IDIxcHg7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICB0b3A6IDA7XG4gICAgICBib3R0b206IDJweDtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/screens/home/components/chat-message/chat-message.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/screens/home/components/chat-message/chat-message.component.ts ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var scrolling_service_1 = __webpack_require__(/*! ../../services/scrolling.service */ "./src/app/screens/home/services/scrolling.service.ts");
var enums_1 = __webpack_require__(/*! ../../types/enums */ "./src/app/screens/home/types/enums.ts");
var common_1 = __webpack_require__(/*! @angular/common */ "@angular/common");
var ChatMessageComponent = /** @class */ (function () {
    function ChatMessageComponent(scrolling, platformId) {
        this.scrolling = scrolling;
        this.platformId = platformId;
        this.subscriptions = [];
        this.Sender = enums_1.Sender;
        this.Type = enums_1.Type;
        this.welcome = false;
        this.loading = false;
        this.messageForNextGroup = false;
        this.date = new Date();
        this.isCommands = false;
    }
    Object.defineProperty(ChatMessageComponent.prototype, "name", {
        get: function () {
            return this.sender === enums_1.Sender.Bot ? 'Mikhail Tsai' : 'You';
        },
        enumerable: true,
        configurable: true
    });
    ChatMessageComponent.prototype.ngOnInit = function () {
        var _this = this;
        Promise.resolve().then(function () { return _this.updateBackgroundPosition(); });
        this.subscriptions.push(this.scrolling.scroll$
            .subscribe(function () {
            return Promise.resolve().then(function () {
                return _this.updateBackgroundPosition();
            });
        }));
    };
    ChatMessageComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
    };
    ChatMessageComponent.prototype.updateBackgroundPosition = function () {
        if (common_1.isPlatformBrowser(this.platformId)) {
            var wrapper = this.wrapper.nativeElement.getBoundingClientRect();
            var avatar = this.avatar.nativeElement.getBoundingClientRect();
            var innerWidth_1 = window.innerWidth, innerHeight_1 = window.innerHeight;
            var BACKGROUND_WIDTH = 2400;
            var BACKGROUND_HEIGHT = 1200;
            this.contentBackgroundPosition = [
                0 - ((BACKGROUND_WIDTH - innerWidth_1) / 2) - wrapper.left,
                0 - ((BACKGROUND_HEIGHT - innerHeight_1) / 2) - wrapper.top
            ];
            this.avatarBackgroundPosition = [
                0 - ((BACKGROUND_WIDTH - innerWidth_1) / 2) - avatar.left,
                0 - ((BACKGROUND_HEIGHT - innerHeight_1) / 2) - avatar.top
            ];
        }
    };
    return ChatMessageComponent;
}());
exports.ChatMessageComponent = ChatMessageComponent;


/***/ }),

/***/ "./src/app/screens/home/components/header/header.component.ngfactory.js":
/*!******************************************************************************!*\
  !*** ./src/app/screens/home/components/header/header.component.ngfactory.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./header.component.scss.shim.ngstyle */ "./src/app/screens/home/components/header/header.component.scss.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! ./header.component */ "./src/app/screens/home/components/header/header.component.ts");
var styles_HeaderComponent = [i0.styles];
var RenderType_HeaderComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_HeaderComponent, data: {} });
exports.RenderType_HeaderComponent = RenderType_HeaderComponent;
function View_HeaderComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 12, "header", [], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 0, "div", [["class", "avatar"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 10, "div", [["class", "infoblock"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 5, "h1", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Mikhail Tsai "])), (_l()(), i1.ɵeld(5, 0, null, null, 3, "span", [], null, null, null, null, null)), (_l()(), i1.ɵeld(6, 0, null, null, 1, "i", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["-"])), (_l()(), i1.ɵted(-1, null, [" full stack web developer"])), (_l()(), i1.ɵeld(9, 0, null, null, 3, "div", [["class", "online"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Online "])), (_l()(), i1.ɵeld(11, 0, null, null, 1, "small", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["it's just a chat-like interface"]))], null, null); }
exports.View_HeaderComponent_0 = View_HeaderComponent_0;
function View_HeaderComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-header", [], null, null, null, View_HeaderComponent_0, RenderType_HeaderComponent)), i1.ɵdid(1, 114688, null, 0, i2.HeaderComponent, [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_HeaderComponent_Host_0 = View_HeaderComponent_Host_0;
var HeaderComponentNgFactory = i1.ɵccf("app-header", i2.HeaderComponent, View_HeaderComponent_Host_0, {}, {}, []);
exports.HeaderComponentNgFactory = HeaderComponentNgFactory;


/***/ }),

/***/ "./src/app/screens/home/components/header/header.component.scss.shim.ngstyle.js":
/*!**************************************************************************************!*\
  !*** ./src/app/screens/home/components/header/header.component.scss.shim.ngstyle.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = ["[_nghost-%COMP%] {\n  outline: none; }\n\nheader[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 0;\n  padding: 35px;\n  background: rgba(28, 31, 31, 0.6); }\n\n@media screen and (max-width: 480px) {\n    header[_ngcontent-%COMP%] {\n      padding: 15px; } }\n\n.avatar[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 28px;\n  background: url(/assets/photos/mikhail-tsai.jpg) no-repeat 50% 50%;\n  background-size: cover;\n  background-size: 115%;\n  background-position: top;\n  margin-left: 14px;\n  min-width: 56px; }\n\n@media screen and (max-width: 480px) {\n    .avatar[_ngcontent-%COMP%] {\n      width: 40px;\n      height: 40px;\n      min-width: 40px;\n      margin-left: 5px; } }\n\n.infoblock[_ngcontent-%COMP%] {\n  padding-left: 24px; }\n\n@media screen and (max-width: 480px) {\n    .infoblock[_ngcontent-%COMP%] {\n      padding-left: 12px; } }\n\n.infoblock[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin: 0;\n    font-weight: 300;\n    font-size: 24px; }\n\n.infoblock[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n      font-style: normal; }\n\n@media screen and (max-width: 480px) {\n      .infoblock[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n        font-size: 15px; }\n        .infoblock[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n          display: block; }\n        .infoblock[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n          display: none; } }\n\n.online[_ngcontent-%COMP%] {\n  font-size: 13px;\n  margin-top: 10px;\n  margin-left: 2px; }\n\n@media screen and (max-width: 480px) {\n    .online[_ngcontent-%COMP%] {\n      margin-top: 5px;\n      margin-left: 0px;\n      font-size: 11px; } }\n\n.online[_ngcontent-%COMP%]:before {\n    content: '';\n    display: inline-block;\n    background: #2aff6f;\n    width: 10px;\n    height: 10px;\n    margin-right: 5px;\n    border-radius: 50%; }\n\n.online[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n    font-size: 12px;\n    font-weight: 300; }\n\n@media screen and (max-width: 480px) {\n      .online[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n        font-size: 10px; } }\n\n.online[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]:before {\n      content: '|';\n      margin-left: 7px;\n      display: inline-block;\n      margin-right: 10px; }\n\n@media screen and (max-width: 480px) {\n        .online[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]:before {\n          margin-left: 2px;\n          margin-right: 5px; } }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NyZWVucy9ob21lL2NvbXBvbmVudHMvaGVhZGVyL0Q6XFxwcm9ncmFtbWluZ1xcdHNhaXRlY2hcXHBhY2thZ2VzXFx1bml2ZXJzYWwtYXBwL3NyY1xcYXBwXFxzY3JlZW5zXFxob21lXFxjb21wb25lbnRzXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWEsRUFDZDs7QUFFRDtFQUNFLGNBQWE7RUFDYixpQkFBZ0I7RUFDaEIsY0FBYTtFQUNiLGtDQUFpQyxFQUtsQzs7QUFIQztJQU5GO01BT0ksY0FBYSxFQUVoQixFQUFBOztBQUVEO0VBQ0UsWUFBVztFQUNYLGFBQVk7RUFDWixvQkFBbUI7RUFDbkIsbUVBQWtFO0VBQ2xFLHVCQUFzQjtFQUN0QixzQkFBcUI7RUFDckIseUJBQXdCO0VBQ3hCLGtCQUFpQjtFQUNqQixnQkFBZSxFQU9oQjs7QUFOQztJQVZGO01BV0ksWUFBVztNQUNYLGFBQVk7TUFDWixnQkFBZTtNQUNmLGlCQUFnQixFQUVuQixFQUFBOztBQUVEO0VBQ0UsbUJBQWtCLEVBcUJuQjs7QUFwQkM7SUFGRjtNQUdJLG1CQUFrQixFQW1CckIsRUFBQTs7QUF0QkQ7SUFNSSxVQUFTO0lBQ1QsaUJBQWdCO0lBQ2hCLGdCQUFlLEVBYWhCOztBQXJCSDtNQVVNLG1CQUFrQixFQUNuQjs7QUFDRDtNQVpKO1FBYU0sZ0JBQWUsRUFRbEI7UUFyQkg7VUFlUSxlQUFjLEVBQ2Y7UUFoQlA7VUFrQlEsY0FBYSxFQUNkLEVBQUE7O0FBS1A7RUFDRSxnQkFBZTtFQUNmLGlCQUFnQjtFQUNoQixpQkFBZ0IsRUFnQ2pCOztBQS9CQztJQUpGO01BS0ksZ0JBQWU7TUFDZixpQkFBZ0I7TUFDaEIsZ0JBQWUsRUE0QmxCLEVBQUE7O0FBbkNEO0lBVUksWUFBVztJQUNYLHNCQUFxQjtJQUNyQixvQkFBbUI7SUFDbkIsWUFBVztJQUNYLGFBQVk7SUFDWixrQkFBaUI7SUFDakIsbUJBQWtCLEVBQ25COztBQWpCSDtJQW1CSSxnQkFBZTtJQUNmLGlCQUFnQixFQWNqQjs7QUFiQztNQXJCSjtRQXNCTSxnQkFBZSxFQVlsQixFQUFBOztBQWxDSDtNQXlCTSxhQUFZO01BQ1osaUJBQWdCO01BQ2hCLHNCQUFxQjtNQUNyQixtQkFBa0IsRUFLbkI7O0FBSkM7UUE3Qk47VUE4QlEsaUJBQWdCO1VBQ2hCLGtCQUFpQixFQUVwQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2NyZWVucy9ob21lL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgcGFkZGluZzogMzVweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyOCwgMzEsIDMxLCAwLjYpO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgcGFkZGluZzogMTVweDtcbiAgfVxufVxuXG4uYXZhdGFyIHtcbiAgd2lkdGg6IDU2cHg7XG4gIGhlaWdodDogNTZweDtcbiAgYm9yZGVyLXJhZGl1czogMjhweDtcbiAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvcGhvdG9zL21pa2hhaWwtdHNhaS5qcGcpIG5vLXJlcGVhdCA1MCUgNTAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IDExNSU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcbiAgbWFyZ2luLWxlZnQ6IDE0cHg7XG4gIG1pbi13aWR0aDogNTZweDtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbWluLXdpZHRoOiA0MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIH1cbn1cblxuLmluZm9ibG9jayB7XG4gIHBhZGRpbmctbGVmdDogMjRweDtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEycHg7XG4gIH1cbiAgaDEge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBpIHtcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICB9XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIHNwYW4ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgICAgIGkge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4ub25saW5lIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgfVxuICAmOmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJhY2tncm91bmQ6ICMyYWZmNmY7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuICBzbWFsbCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICB9XG4gICAgJjpiZWZvcmUge1xuICAgICAgY29udGVudDogJ3wnO1xuICAgICAgbWFyZ2luLWxlZnQ6IDdweDtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAycHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/screens/home/components/header/header.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/screens/home/components/header/header.component.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;


/***/ }),

/***/ "./src/app/screens/home/home.module.ngfactory.js":
/*!*******************************************************!*\
  !*** ./src/app/screens/home/home.module.ngfactory.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./home.module */ "./src/app/screens/home/home.module.ts");
var i2 = __webpack_require__(/*! ../../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
var i3 = __webpack_require__(/*! ./home/home.component.ngfactory */ "./src/app/screens/home/home/home.component.ngfactory.js");
var i4 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i5 = __webpack_require__(/*! ../../shared/fluent/services/mouse.service */ "./src/app/shared/fluent/services/mouse.service.ts");
var i6 = __webpack_require__(/*! ./services/scrolling.service */ "./src/app/screens/home/services/scrolling.service.ts");
var i7 = __webpack_require__(/*! ./services/scenario.service */ "./src/app/screens/home/services/scenario.service.ts");
var i8 = __webpack_require__(/*! @angular/cdk/bidi */ "@angular/cdk/bidi");
var i9 = __webpack_require__(/*! @angular/material/core */ "@angular/material/core");
var i10 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var i11 = __webpack_require__(/*! @angular/material/icon */ "@angular/material/icon");
var i12 = __webpack_require__(/*! ../../shared/fluent/fluent.module */ "./src/app/shared/fluent/fluent.module.ts");
var i13 = __webpack_require__(/*! @angular/cdk/platform */ "@angular/cdk/platform");
var i14 = __webpack_require__(/*! @angular/cdk/scrolling */ "@angular/cdk/scrolling");
var i15 = __webpack_require__(/*! @angular/cdk/layout */ "@angular/cdk/layout");
var i16 = __webpack_require__(/*! ngx-scrollbar */ "ngx-scrollbar");
var i17 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i18 = __webpack_require__(/*! ./home/home.component */ "./src/app/screens/home/home/home.component.ts");
var HomeModuleNgFactory = i0.ɵcmf(i1.HomeModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i2.ɵEmptyOutletComponentNgFactory, i3.HomeComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i4.NgLocalization, i4.NgLocaleLocalization, [i0.LOCALE_ID, [2, i4.ɵangular_packages_common_common_a]]), i0.ɵmpd(4608, i5.MouseService, i5.MouseService, [i0.PLATFORM_ID]), i0.ɵmpd(4608, i6.ScrollingService, i6.ScrollingService, []), i0.ɵmpd(4608, i7.ScenarioService, i7.ScenarioService, [i6.ScrollingService, i0.PLATFORM_ID]), i0.ɵmpd(1073742336, i4.CommonModule, i4.CommonModule, []), i0.ɵmpd(1073742336, i8.BidiModule, i8.BidiModule, []), i0.ɵmpd(1073742336, i9.MatCommonModule, i9.MatCommonModule, [[2, i9.MATERIAL_SANITY_CHECKS], [2, i10.HAMMER_LOADER]]), i0.ɵmpd(1073742336, i11.MatIconModule, i11.MatIconModule, []), i0.ɵmpd(1073742336, i12.FluentModule, i12.FluentModule, []), i0.ɵmpd(1073742336, i13.PlatformModule, i13.PlatformModule, []), i0.ɵmpd(1073742336, i14.ScrollingModule, i14.ScrollingModule, []), i0.ɵmpd(1073742336, i15.LayoutModule, i15.LayoutModule, []), i0.ɵmpd(1073742336, i16.SmoothScrollModule, i16.SmoothScrollModule, []), i0.ɵmpd(1073742336, i16.NgScrollbarModule, i16.NgScrollbarModule, []), i0.ɵmpd(1073742336, i17.RouterModule, i17.RouterModule, [[2, i17.ɵangular_packages_router_router_a], [2, i17.Router]]), i0.ɵmpd(1073742336, i1.HomeModule, i1.HomeModule, []), i0.ɵmpd(1024, i17.ROUTES, function () { return [[{ path: "", component: i18.HomeComponent }]]; }, [])]); });
exports.HomeModuleNgFactory = HomeModuleNgFactory;


/***/ }),

/***/ "./src/app/screens/home/home.module.ts":
/*!*********************************************!*\
  !*** ./src/app/screens/home/home.module.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
exports.HomeModule = HomeModule;


/***/ }),

/***/ "./src/app/screens/home/home/home.component.ngfactory.js":
/*!***************************************************************!*\
  !*** ./src/app/screens/home/home/home.component.ngfactory.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./home.component.scss.shim.ngstyle */ "./src/app/screens/home/home/home.component.scss.shim.ngstyle.js");
var i1 = __webpack_require__(/*! ../../screens-style.scss.shim.ngstyle */ "./src/app/screens/screens-style.scss.shim.ngstyle.js");
var i2 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i3 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i4 = __webpack_require__(/*! ../../../shared/fluent/f-button/f-button.component.ngfactory */ "./src/app/shared/fluent/f-button/f-button.component.ngfactory.js");
var i5 = __webpack_require__(/*! ../../../shared/fluent/f-button/f-button.component */ "./src/app/shared/fluent/f-button/f-button.component.ts");
var i6 = __webpack_require__(/*! ../../../shared/fluent/services/mouse.service */ "./src/app/shared/fluent/services/mouse.service.ts");
var i7 = __webpack_require__(/*! ../components/chat-message/chat-message.component.ngfactory */ "./src/app/screens/home/components/chat-message/chat-message.component.ngfactory.js");
var i8 = __webpack_require__(/*! ../components/chat-message/chat-message.component */ "./src/app/screens/home/components/chat-message/chat-message.component.ts");
var i9 = __webpack_require__(/*! ../services/scrolling.service */ "./src/app/screens/home/services/scrolling.service.ts");
var i10 = __webpack_require__(/*! ../../../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
var i11 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i12 = __webpack_require__(/*! ../components/header/header.component.ngfactory */ "./src/app/screens/home/components/header/header.component.ngfactory.js");
var i13 = __webpack_require__(/*! ../components/header/header.component */ "./src/app/screens/home/components/header/header.component.ts");
var i14 = __webpack_require__(/*! ../../../../../node_modules/ngx-scrollbar/ngx-scrollbar.ngfactory */ "./node_modules/ngx-scrollbar/ngx-scrollbar.ngfactory.js");
var i15 = __webpack_require__(/*! ngx-scrollbar */ "ngx-scrollbar");
var i16 = __webpack_require__(/*! @angular/cdk/layout */ "@angular/cdk/layout");
var i17 = __webpack_require__(/*! ./home.component */ "./src/app/screens/home/home/home.component.ts");
var i18 = __webpack_require__(/*! ../services/scenario.service */ "./src/app/screens/home/services/scenario.service.ts");
var styles_HomeComponent = [i0.styles, i1.styles];
var RenderType_HomeComponent = i2.ɵcrt({ encapsulation: 0, styles: styles_HomeComponent, data: {} });
exports.RenderType_HomeComponent = RenderType_HomeComponent;
function View_HomeComponent_4(_l) { return i2.ɵvid(0, [(_l()(), i2.ɵeld(0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null); }
function View_HomeComponent_3(_l) { return i2.ɵvid(0, [(_l()(), i2.ɵeld(0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), i2.ɵand(16777216, null, null, 1, null, View_HomeComponent_4)), i2.ɵdid(2, 540672, null, 0, i3.NgTemplateOutlet, [i2.ViewContainerRef], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null), (_l()(), i2.ɵand(0, null, null, 0))], function (_ck, _v) { var currVal_0 = _v.parent.parent.context.$implicit; var currVal_1 = i2.ɵnov(_v.parent.parent.parent, 10); _ck(_v, 2, 0, currVal_0, currVal_1); }, null); }
function View_HomeComponent_5(_l) { return i2.ɵvid(0, [(_l()(), i2.ɵeld(0, 0, null, null, 12, null, null, null, null, null, null, null)), (_l()(), i2.ɵeld(1, 0, null, null, 2, "app-f-button", [], null, [[null, "click"], ["window", "resize"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("window:resize" === en)) {
        var pd_0 = (i2.ɵnov(_v, 2).updateRect($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.onCommand(_co.Commands.FavoriteTechnologyStack, _v.parent.parent.context.$implicit) !== false);
        ad = (pd_1 && ad);
    } return ad; }, i4.View_FButtonComponent_0, i4.RenderType_FButtonComponent)), i2.ɵdid(2, 4308992, null, 0, i5.FButtonComponent, [i6.MouseService, i2.PLATFORM_ID], { subscribeTo: [0, "subscribeTo"], wrapper: [1, "wrapper"] }, null), (_l()(), i2.ɵted(3, 0, [" ", " "])), (_l()(), i2.ɵeld(4, 0, null, null, 2, "app-f-button", [], null, [[null, "click"], ["window", "resize"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("window:resize" === en)) {
        var pd_0 = (i2.ɵnov(_v, 5).updateRect($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.onCommand(_co.Commands.DemoExamples, _v.parent.parent.context.$implicit) !== false);
        ad = (pd_1 && ad);
    } return ad; }, i4.View_FButtonComponent_0, i4.RenderType_FButtonComponent)), i2.ɵdid(5, 4308992, null, 0, i5.FButtonComponent, [i6.MouseService, i2.PLATFORM_ID], { subscribeTo: [0, "subscribeTo"], wrapper: [1, "wrapper"] }, null), (_l()(), i2.ɵted(6, 0, [" ", " "])), (_l()(), i2.ɵeld(7, 0, null, null, 2, "app-f-button", [], null, [[null, "click"], ["window", "resize"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("window:resize" === en)) {
        var pd_0 = (i2.ɵnov(_v, 8).updateRect($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.onCommand(_co.Commands.GetInTouch, _v.parent.parent.context.$implicit) !== false);
        ad = (pd_1 && ad);
    } return ad; }, i4.View_FButtonComponent_0, i4.RenderType_FButtonComponent)), i2.ɵdid(8, 4308992, null, 0, i5.FButtonComponent, [i6.MouseService, i2.PLATFORM_ID], { subscribeTo: [0, "subscribeTo"], wrapper: [1, "wrapper"] }, null), (_l()(), i2.ɵted(9, 0, [" ", " "])), (_l()(), i2.ɵeld(10, 0, null, null, 2, "app-f-button", [], null, [[null, "click"], ["window", "resize"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("window:resize" === en)) {
        var pd_0 = (i2.ɵnov(_v, 11).updateRect($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.onCommand(_co.Commands.ComingSoon, _v.parent.parent.context.$implicit) !== false);
        ad = (pd_1 && ad);
    } return ad; }, i4.View_FButtonComponent_0, i4.RenderType_FButtonComponent)), i2.ɵdid(11, 4308992, null, 0, i5.FButtonComponent, [i6.MouseService, i2.PLATFORM_ID], { subscribeTo: [0, "subscribeTo"], wrapper: [1, "wrapper"] }, null), (_l()(), i2.ɵted(12, 0, [" ", " "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.scroll$; var currVal_1 = _co.getWrapper(i2.ɵnov(_v.parent, 1)); _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_3 = _co.scroll$; var currVal_4 = _co.getWrapper(i2.ɵnov(_v.parent, 1)); _ck(_v, 5, 0, currVal_3, currVal_4); var currVal_6 = _co.scroll$; var currVal_7 = _co.getWrapper(i2.ɵnov(_v.parent, 1)); _ck(_v, 8, 0, currVal_6, currVal_7); var currVal_9 = _co.scroll$; var currVal_10 = _co.getWrapper(i2.ɵnov(_v.parent, 1)); _ck(_v, 11, 0, currVal_9, currVal_10); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.textsOfCommands[_co.Commands.FavoriteTechnologyStack]; _ck(_v, 3, 0, currVal_2); var currVal_5 = _co.textsOfCommands[_co.Commands.DemoExamples]; _ck(_v, 6, 0, currVal_5); var currVal_8 = _co.textsOfCommands[_co.Commands.GetInTouch]; _ck(_v, 9, 0, currVal_8); var currVal_11 = _co.textsOfCommands[_co.Commands.ComingSoon]; _ck(_v, 12, 0, currVal_11); }); }
function View_HomeComponent_2(_l) { return i2.ɵvid(0, [(_l()(), i2.ɵeld(0, 0, null, null, 5, "app-chat-message", [], [[8, "className", 0]], [["window", "resize"]], function (_v, en, $event) { var ad = true; if (("window:resize" === en)) {
        var pd_0 = (i2.ɵnov(_v, 1).updateBackgroundPosition($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, i7.View_ChatMessageComponent_0, i7.RenderType_ChatMessageComponent)), i2.ɵdid(1, 245760, [["questionWrapper", 4]], 0, i8.ChatMessageComponent, [i9.ScrollingService, i2.PLATFORM_ID], { sender: [0, "sender"], type: [1, "type"], welcome: [2, "welcome"], loading: [3, "loading"], messageForNextGroup: [4, "messageForNextGroup"], date: [5, "date"], isCommands: [6, "isCommands"] }, null), (_l()(), i2.ɵand(16777216, null, 0, 1, null, View_HomeComponent_3)), i2.ɵdid(3, 16384, null, 0, i3.NgIf, [i2.ViewContainerRef, i2.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i2.ɵand(16777216, null, 0, 1, null, View_HomeComponent_5)), i2.ɵdid(5, 16384, null, 0, i3.NgIf, [i2.ViewContainerRef, i2.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _v.parent.context.$implicit.sender; var currVal_2 = _v.parent.context.$implicit.type; var currVal_3 = _v.parent.context.$implicit.welcome; var currVal_4 = _v.parent.context.$implicit.loading; var currVal_5 = _v.parent.context.$implicit.messageForNextGroup; var currVal_6 = _v.parent.context.$implicit.date; var currVal_7 = (_v.parent.context.$implicit.contentType === _co.ContentType.Commands); _ck(_v, 1, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); var currVal_8 = (_v.parent.context.$implicit.contentType !== _co.ContentType.Commands); _ck(_v, 3, 0, currVal_8); var currVal_9 = (_v.parent.context.$implicit.contentType === _co.ContentType.Commands); _ck(_v, 5, 0, currVal_9); }, function (_ck, _v) { var currVal_0 = ("history-" + _v.parent.context.$implicit.uuid); _ck(_v, 0, 0, currVal_0); }); }
function View_HomeComponent_1(_l) { return i2.ɵvid(0, [(_l()(), i2.ɵeld(0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), i2.ɵand(16777216, null, null, 1, null, View_HomeComponent_2)), i2.ɵdid(2, 16384, null, 0, i3.NgIf, [i2.ViewContainerRef, i2.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i2.ɵand(0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_v.context.index + 1) > (_co.history.length - 25)); _ck(_v, 2, 0, currVal_0); }, null); }
function View_HomeComponent_7(_l) { return i2.ɵvid(0, [(_l()(), i2.ɵeld(0, 0, null, null, 1, "ng-component", [], [[8, "innerHTML", 1]], null, null, i10.View_ɵEmptyOutletComponent_0, i10.RenderType_ɵEmptyOutletComponent)), i2.ɵdid(1, 49152, null, 0, i11.ɵEmptyOutletComponent, [], null, null)], null, function (_ck, _v) { var currVal_0 = _v.parent.context.content; _ck(_v, 0, 0, currVal_0); }); }
function View_HomeComponent_9(_l) { return i2.ɵvid(0, [(_l()(), i2.ɵeld(0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null); }
function View_HomeComponent_8(_l) { return i2.ɵvid(0, [(_l()(), i2.ɵeld(0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), i2.ɵand(16777216, null, null, 1, null, View_HomeComponent_9)), i2.ɵdid(2, 671744, null, 0, i3.NgComponentOutlet, [i2.ViewContainerRef], { ngComponentOutlet: [0, "ngComponentOutlet"] }, null), (_l()(), i2.ɵand(0, null, null, 0))], function (_ck, _v) { var currVal_0 = _v.parent.context.content; _ck(_v, 2, 0, currVal_0); }, null); }
function View_HomeComponent_6(_l) { return i2.ɵvid(0, [(_l()(), i2.ɵand(16777216, null, null, 1, null, View_HomeComponent_7)), i2.ɵdid(1, 16384, null, 0, i3.NgIf, [i2.ViewContainerRef, i2.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i2.ɵand(16777216, null, null, 1, null, View_HomeComponent_8)), i2.ɵdid(3, 16384, null, 0, i3.NgIf, [i2.ViewContainerRef, i2.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i2.ɵand(0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_v.context.contentType === _co.ContentType.HTML); _ck(_v, 1, 0, currVal_0); var currVal_1 = (_v.context.contentType === _co.ContentType.Component); _ck(_v, 3, 0, currVal_1); }, null); }
function View_HomeComponent_0(_l) { return i2.ɵvid(0, [i2.ɵqud(402653184, 1, { scrollbar: 0 }), i2.ɵqud(402653184, 2, { section: 0 }), (_l()(), i2.ɵeld(2, 0, null, null, 1, "app-header", [], null, null, null, i12.View_HeaderComponent_0, i12.RenderType_HeaderComponent)), i2.ɵdid(3, 114688, null, 0, i13.HeaderComponent, [], null, null), (_l()(), i2.ɵeld(4, 0, null, null, 5, "ng-scrollbar", [["style", "height: 100%; width: 100%;"]], [[1, "trackX", 0], [1, "trackY", 0], [1, "compact", 0], [1, "autoHide", 0]], null, null, i14.View_NgScrollbar_0, i14.RenderType_NgScrollbar)), i2.ɵdid(5, 4374528, [[1, 4]], 0, i15.NgScrollbar, [i2.ChangeDetectorRef, i16.BreakpointObserver, i2.PLATFORM_ID], { autoUpdate: [0, "autoUpdate"] }, null), (_l()(), i2.ɵeld(6, 0, [[2, 0], ["section", 1]], 0, 3, "section", [["class", "home"]], null, null, null, null, null)), (_l()(), i2.ɵeld(7, 0, null, null, 2, "main", [], null, null, null, null, null)), (_l()(), i2.ɵand(16777216, null, null, 1, null, View_HomeComponent_1)), i2.ɵdid(9, 278528, null, 0, i3.NgForOf, [i2.ViewContainerRef, i2.TemplateRef, i2.IterableDiffers], { ngForOf: [0, "ngForOf"], ngForTrackBy: [1, "ngForTrackBy"] }, null), (_l()(), i2.ɵand(0, [["contentBlock", 2]], null, 0, null, View_HomeComponent_6))], function (_ck, _v) { var _co = _v.component; _ck(_v, 3, 0); var currVal_4 = false; _ck(_v, 5, 0, currVal_4); var currVal_5 = _co.history; var currVal_6 = _co.trackById; _ck(_v, 9, 0, currVal_5, currVal_6); }, function (_ck, _v) { var currVal_0 = i2.ɵnov(_v, 5).trackX; var currVal_1 = i2.ɵnov(_v, 5).trackY; var currVal_2 = i2.ɵnov(_v, 5).compact; var currVal_3 = (i2.ɵnov(_v, 5).shown === "hover"); _ck(_v, 4, 0, currVal_0, currVal_1, currVal_2, currVal_3); }); }
exports.View_HomeComponent_0 = View_HomeComponent_0;
function View_HomeComponent_Host_0(_l) { return i2.ɵvid(0, [(_l()(), i2.ɵeld(0, 0, null, null, 1, "app-home", [], null, null, null, View_HomeComponent_0, RenderType_HomeComponent)), i2.ɵdid(1, 114688, null, 0, i17.HomeComponent, [i9.ScrollingService, i18.ScenarioService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_HomeComponent_Host_0 = View_HomeComponent_Host_0;
var HomeComponentNgFactory = i2.ɵccf("app-home", i17.HomeComponent, View_HomeComponent_Host_0, {}, {}, []);
exports.HomeComponentNgFactory = HomeComponentNgFactory;


/***/ }),

/***/ "./src/app/screens/home/home/home.component.scss.shim.ngstyle.js":
/*!***********************************************************************!*\
  !*** ./src/app/screens/home/home/home.component.scss.shim.ngstyle.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = ["a[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 22px; }\n\nnav[_ngcontent-%COMP%]    > h1[_ngcontent-%COMP%] {\n  font-family: 'Montserrat', sans-serif;\n  font-weight: 500;\n  font-size: 18px;\n  margin: 15px 0 0 0; }\n\nmain[_ngcontent-%COMP%] {\n  padding: 0px 13px 13px 13px;\n  min-height: 100%; }\n\n@media screen and (max-width: 440px) {\n    main[_ngcontent-%COMP%] {\n      padding: 0px; } }\n\n.question[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 25px;\n  border-bottom-right-radius: 0px;\n  align-self: normal;\n  margin-top: 30px;\n  padding: 15px; }\n\n.question[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%] {\n    font-size: 16px;\n    margin-bottom: 15px; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NyZWVucy9ob21lL2hvbWUvRDpcXHByb2dyYW1taW5nXFx0c2FpdGVjaFxccGFja2FnZXNcXHVuaXZlcnNhbC1hcHAvc3JjXFxhcHBcXHNjcmVlbnNcXGhvbWVcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZSxFQUNoQjs7QUFHRDtFQUNFLHNDQUFxQztFQUNyQyxpQkFBZ0I7RUFDaEIsZ0JBQWU7RUFDZixtQkFBa0IsRUFDbkI7O0FBRUQ7RUFDRSw0QkFBMkI7RUFDM0IsaUJBQWdCLEVBS2pCOztBQUhDO0lBSkY7TUFLSSxhQUFZLEVBRWYsRUFBQTs7QUFFRDtFQUNFLGtCQUErQjtFQUMvQixvQkFBbUI7RUFDbkIsZ0NBQStCO0VBQy9CLG1CQUFrQjtFQUNsQixpQkFBZ0I7RUFDaEIsY0FBYSxFQUtkOztBQVhEO0lBUUksZ0JBQWU7SUFDZixvQkFBbUIsRUFDcEIiLCJmaWxlIjoic3JjL2FwcC9zY3JlZW5zL2hvbWUvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSBtYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuXG5uYXYgPiBoMSB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luOiAxNXB4IDAgMCAwO1xufVxuXG5tYWluIHtcbiAgcGFkZGluZzogMHB4IDEzcHggMTNweCAxM3B4O1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ0MHB4KSB7XG4gICAgcGFkZGluZzogMHB4O1xuICB9XG59XG5cbi5xdWVzdGlvbiB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMSk7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwcHg7XG4gIGFsaWduLXNlbGY6IG5vcm1hbDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgcGFkZGluZzogMTVweDtcbiAgbWF0LWNhcmQtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB9XG59XG4iXX0= */"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/screens/home/home/home.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/screens/home/home/home.component.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var scrolling_service_1 = __webpack_require__(/*! ../services/scrolling.service */ "./src/app/screens/home/services/scrolling.service.ts");
var scenario_service_1 = __webpack_require__(/*! ../services/scenario.service */ "./src/app/screens/home/services/scenario.service.ts");
var scenario_1 = __webpack_require__(/*! ./../services/scenario */ "./src/app/screens/home/services/scenario/index.ts");
var enums_1 = __webpack_require__(/*! ../types/enums */ "./src/app/screens/home/types/enums.ts");
var ngx_scrollbar_1 = __webpack_require__(/*! ngx-scrollbar */ "ngx-scrollbar");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(scrolling, scenario) {
        this.scrolling = scrolling;
        this.scenario = scenario;
        this.googleAnalytics = ga;
        this.Sender = enums_1.Sender;
        this.Type = enums_1.Type;
        this.ContentType = enums_1.ContentType;
        this.Commands = enums_1.Commands;
        this.textsOfCommands = scenario_1.textsOfCommands;
        this.questions = [];
    }
    Object.defineProperty(HomeComponent.prototype, "history", {
        get: function () {
            return this.scenario.getHistory();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomeComponent.prototype, "scroll$", {
        get: function () {
            return this.scrolling.scroll$;
        },
        enumerable: true,
        configurable: true
    });
    HomeComponent.prototype.ngOnInit = function () {
        this.scrolling.init(this.scrollbar);
        this.scenario.init();
    };
    HomeComponent.prototype.onCommand = function (command, from) {
        this.scenario.command(command, from);
        this.googleAnalytics('send', {
            hitType: 'event',
            eventCategory: 'Chat command',
            eventAction: command
        });
    };
    HomeComponent.prototype.getWrapper = function (wrapper) {
        return wrapper.wrapper.nativeElement;
    };
    HomeComponent.prototype.trackById = function (index, item) {
        return index;
    };
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/app/screens/home/services/scenario.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/screens/home/services/scenario.service.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var scrolling_service_1 = __webpack_require__(/*! ./scrolling.service */ "./src/app/screens/home/services/scrolling.service.ts");
var scenario_1 = __webpack_require__(/*! ./scenario */ "./src/app/screens/home/services/scenario/index.ts");
var enums_1 = __webpack_require__(/*! ../types/enums */ "./src/app/screens/home/types/enums.ts");
var MESSAGE_GROUP_DIFF = 1500;
var ScenarioService = /** @class */ (function () {
    function ScenarioService(scrolling, platformId) {
        this.scrolling = scrolling;
        this.platformId = platformId;
        this.history = [];
        this.counter = 1;
    }
    ScenarioService.prototype.init = function () {
        if (this.history.length === 0) {
            this.newScenarioHistory(enums_1.Commands.Welcome);
        }
    };
    ScenarioService.prototype.getHistory = function () {
        return this.history.slice();
    };
    ScenarioService.prototype.command = function (command, from) {
        var currentHistory = this.history.slice().reverse().find(function (item) { return !!(item); });
        if (from === currentHistory) {
            this.scrolling.scrollChat();
            this.newScenarioHistory(command);
            from.date = new Date();
            from.contentType = enums_1.ContentType.HTML;
            from.content = scenario_1.textsOfCommands[command];
        }
    };
    ScenarioService.prototype.newScenarioHistory = function (commandOrId) {
        var scenario = scenario_1.getScenario(commandOrId);
        if (scenario.sender === enums_1.Sender.Bot) {
            this.newHistoryFromBot(scenario);
        }
        else {
            this.history.push(this.newHistory(scenario));
        }
    };
    ScenarioService.prototype.newHistoryFromBot = function (scenario) {
        var _this = this;
        var link = this.startTyping(scenario);
        var _a = scenario.timeout, timeout = _a === void 0 ? 0 : _a, _b = scenario.startTimeout, startTimeout = _b === void 0 ? 0 : _b, autoNext = scenario.autoNext, convertedHistory = tslib_1.__rest(scenario, ["timeout", "startTimeout", "autoNext"]);
        setTimeout(function () {
            if (_this.history.length === 1) {
                convertedHistory.welcome = true;
            }
            var history = _this.newHistory(convertedHistory);
            _this.endTyping(link, history, timeout);
            if (autoNext) {
                _this.newScenarioHistory(history.id + 1);
            }
        }, timeout);
    };
    ScenarioService.prototype.startTyping = function (_a) {
        var _this = this;
        var id = _a.id, startTimeout = _a.startTimeout, timeout = _a.timeout, isParent = _a.isParent;
        var previous = this.history.slice().reverse().find(function (item) { return !item.loading; });
        var history = {
            id: id,
            uuid: this.counter++,
            sender: enums_1.Sender.Bot,
            type: enums_1.Type.Alone,
            loading: true
        };
        if (!isParent && previous && previous.sender === enums_1.Sender.Bot) {
            history.parentUUID = previous.parentUUID || previous.uuid;
        }
        if (this.history.length === 0) {
            history.welcome = true;
        }
        if (startTimeout) {
            setTimeout(function () { return _this.newLoading(history, previous, timeout); }, startTimeout);
        }
        else {
            this.newLoading(history, previous, timeout);
        }
        return history;
    };
    ScenarioService.prototype.newLoading = function (history, previous, timeout) {
        if (previous && history.sender === previous.sender && timeout <= MESSAGE_GROUP_DIFF) {
            this.changeHistoriesType(previous);
        }
        else if (!history.welcome) {
            history.messageForNextGroup = true;
        }
        this.scrolling.scrollChatIfNeed(history.parentUUID || history.uuid);
        this.history.push(history);
    };
    ScenarioService.prototype.endTyping = function (link, history, timeout) {
        var previous = this.history[this.history.indexOf(link) - 1];
        delete link.messageForNextGroup;
        delete link.loading;
        var parent = link.parentUUID || link.uuid;
        this.scrolling.scrollChatIfNeed(parent);
        Object.keys(history).forEach(function (key) { return link[key] = history[key]; });
        if (previous && link.sender === previous.sender && timeout <= MESSAGE_GROUP_DIFF) {
            link.type = enums_1.Type.Last;
        }
    };
    ScenarioService.prototype.newHistory = function (history) {
        if (history.uuid) {
            history.uuid = this.counter++;
        }
        history.type = enums_1.Type.Alone;
        history.date = new Date();
        return history;
    };
    ScenarioService.prototype.changeHistoriesType = function (previous) {
        if (previous) {
            var type_1 = previous.type === enums_1.Type.First || previous.type === enums_1.Type.Alone
                ? enums_1.Type.First
                : enums_1.Type.Between;
            setTimeout(function () { return previous.type = type_1; }, 300);
        }
    };
    return ScenarioService;
}());
exports.ScenarioService = ScenarioService;


/***/ }),

/***/ "./src/app/screens/home/services/scenario/generate-ids.ts":
/*!****************************************************************!*\
  !*** ./src/app/screens/home/services/scenario/generate-ids.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var generateIdsNextId = 1;
exports.generateIds = function (scenario) {
    return scenario.map(function (item) { return (tslib_1.__assign({}, item, { id: generateIdsNextId++ })); });
};


/***/ }),

/***/ "./src/app/screens/home/services/scenario/index.ts":
/*!*********************************************************!*\
  !*** ./src/app/screens/home/services/scenario/index.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var generate_ids_1 = __webpack_require__(/*! ./generate-ids */ "./src/app/screens/home/services/scenario/generate-ids.ts");
var lists_1 = __webpack_require__(/*! ./lists */ "./src/app/screens/home/services/scenario/lists/index.ts");
exports.textsOfCommands = {
    FavoriteTechnologyStack: 'Favorite technology stack',
    DemoExamples: 'Demo examples',
    GetInTouch: 'Get in touch',
    ComingSoon: 'Coming soon'
};
var scenarioByCommands = {
    Welcome: lists_1.welcome,
    FavoriteTechnologyStack: lists_1.favoriteTechnologyStack,
    GetInTouch: lists_1.getInTouch,
    ComingSoon: lists_1.comingSoon,
    DemoExamples: lists_1.demoExamples,
};
var ɵ0 = function (key) { return scenarioByCommands[key]; };
exports.ɵ0 = ɵ0;
var scenarioArrays = Object.keys(scenarioByCommands).map(ɵ0);
var scenario = generate_ids_1.generateIds([].concat.apply([], scenarioArrays));
var idByCommands = calculateIds();
function calculateIds() {
    var id = 1;
    return Object.keys(scenarioByCommands)
        .reduce(function (result, command, index) {
        result[command] = id;
        id += scenarioByCommands[command].length;
        return result;
    }, {});
}
function getScenario(commandOrId) {
    var id = typeof commandOrId === 'number'
        ? commandOrId
        : idByCommands[commandOrId];
    var result = scenario
        .filter(function (item) { return item.id === id; })
        .reduce(function (a) { return a; });
    return tslib_1.__assign({}, result);
}
exports.getScenario = getScenario;


/***/ }),

/***/ "./src/app/screens/home/services/scenario/lists/coming-soon.ts":
/*!*********************************************************************!*\
  !*** ./src/app/screens/home/services/scenario/lists/coming-soon.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = __webpack_require__(/*! ./../../../types/enums */ "./src/app/screens/home/types/enums.ts");
exports.comingSoon = [
    {
        sender: enums_1.Sender.Bot,
        contentType: enums_1.ContentType.HTML,
        content: "\n      I plan to add more information about my experience with examples demonstrating my skills such as:\n",
        timeout: 500,
        autoNext: true,
        isParent: true,
    },
    {
        sender: enums_1.Sender.Bot,
        contentType: enums_1.ContentType.HTML,
        content: "\n      <ul>\n        <li>html5 semantic, accessability, css3 features</li>\n        <li>canvas, webgl, data-visualization</li>\n        <li>microservice scalable architecture with: caching, load balancing, message broker and different databases</li>\n        <li>Linux and AWS Management</li>\n      </ul>\n",
        timeout: 1000,
        autoNext: true,
    },
    {
        sender: enums_1.Sender.Bot,
        contentType: enums_1.ContentType.HTML,
        content: "\n      I just created this website, so I'm sorry for incomplete information <br />\n      <br />\n      Please feel free to contact me \uD83D\uDE42\n",
        timeout: 1000,
        autoNext: true,
    },
    {
        sender: enums_1.Sender.User,
        contentType: enums_1.ContentType.Commands,
    },
];


/***/ }),

/***/ "./src/app/screens/home/services/scenario/lists/demo-examples.ts":
/*!***********************************************************************!*\
  !*** ./src/app/screens/home/services/scenario/lists/demo-examples.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = __webpack_require__(/*! ./../../../types/enums */ "./src/app/screens/home/types/enums.ts");
exports.demoExamples = [
    {
        sender: enums_1.Sender.Bot,
        contentType: enums_1.ContentType.HTML,
        content: "\n      Demo examples\n",
        timeout: 500,
        autoNext: true,
        isParent: true,
    },
    {
        sender: enums_1.Sender.Bot,
        contentType: enums_1.ContentType.HTML,
        content: "\n    This website is already a nice example of an Angular application \uD83E\uDD17<br />\n    Honestly, I plan to make it better soon, but you already can see:\n",
        timeout: 1000,
        autoNext: true,
    },
    {
        sender: enums_1.Sender.Bot,
        contentType: enums_1.ContentType.HTML,
        content: "\n    <b>Fluent Button Components</b> - these chat command buttons are Angular's implementation of Microsoft Fluent Design concept effect\n    <a href=\"https://docs.microsoft.com/en-us/windows/uwp/design/style/reveal\" target=\"_blank\">\n      Reveal Highlight\n    </a> <br />\n    <br />\n    \u2714\uFE0F I highly recommend watching this component from a PC, not from a mobile device,\n    in order to appreciate all features of my implementation\n",
        timeout: 1000,
        autoNext: true,
    },
    {
        sender: enums_1.Sender.Bot,
        contentType: enums_1.ContentType.HTML,
        content: "\n    <b>Acrylic material backgrounds</b> - the backgrounds of this application are also Angular's implementation of\n    Microsoft Fluent Design concept component\n    <a href=\"https://docs.microsoft.com/en-us/windows/uwp/design/style/acrylic\" target=\"_blank\">\n      Acrylic material\n    </a>\n",
        timeout: 1000,
        autoNext: true,
    },
    {
        sender: enums_1.Sender.Bot,
        contentType: enums_1.ContentType.HTML,
        content: "\n    I plan to add all my implementations of Fluent Design System in one of my own OpenSource Angular UI library soon \uD83D\uDC7D\n",
        timeout: 1000,
        autoNext: true,
    },
    {
        sender: enums_1.Sender.User,
        contentType: enums_1.ContentType.Commands,
    },
];


/***/ }),

/***/ "./src/app/screens/home/services/scenario/lists/favorite-technology-stack.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/screens/home/services/scenario/lists/favorite-technology-stack.ts ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = __webpack_require__(/*! ./../../../types/enums */ "./src/app/screens/home/types/enums.ts");
exports.favoriteTechnologyStack = [
    {
        sender: enums_1.Sender.Bot,
        contentType: enums_1.ContentType.HTML,
        content: "\n    Favorite technology stack\n",
        timeout: 500,
        startTimeout: 0,
        autoNext: true,
        isParent: true,
    },
    {
        sender: enums_1.Sender.Bot,
        contentType: enums_1.ContentType.HTML,
        content: "\n  <b>language:</b> javascript / \u2714\uFE0Ftypescript  <br />\n  <b>frontend:</b> \u2714\uFE0Fangular, react</> <br />\n  <b>backend:</b> Node.js, frameworks \u2714\uFE0FNestJs or Express <br />\n  <b>API architecture:</b> \u2714\uFE0FGraphQL, REST <br />\n",
        timeout: 1000,
        startTimeout: 0,
        autoNext: true,
    },
    {
        sender: enums_1.Sender.Bot,
        contentType: enums_1.ContentType.HTML,
        content: "\n  <b>Web server:</b> <br />\n  <b>nginx</b> - in most cases, for static files, proxying, load balancing<br />\n  <b>Node.js only</b> - for websockets it's not ok to use some proxying tools,\n  such as nginx, so in these cases I prefer to use Node.js directly<br />\n",
        timeout: 1000,
        startTimeout: 0,
        autoNext: true,
    },
    {
        sender: enums_1.Sender.Bot,
        contentType: enums_1.ContentType.HTML,
        content: "\n  <b>DevOps:</b> GitLab CI, Docker <br />\n  <b>Cloud systems:</b> Amazon Web Services <br />\n  <br />\n  <b>OS:</b> Linux as a server, Windows as a working system, MacOS as a safari-testing-system and iOS compiler\n",
        timeout: 1000,
        startTimeout: 0,
        autoNext: true,
    },
    {
        sender: enums_1.Sender.User,
        contentType: enums_1.ContentType.Commands,
    },
];


/***/ }),

/***/ "./src/app/screens/home/services/scenario/lists/get-in-touch.ts":
/*!**********************************************************************!*\
  !*** ./src/app/screens/home/services/scenario/lists/get-in-touch.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = __webpack_require__(/*! ./../../../types/enums */ "./src/app/screens/home/types/enums.ts");
exports.getInTouch = [
    {
        sender: enums_1.Sender.Bot,
        contentType: enums_1.ContentType.HTML,
        content: "Feel free to contact me",
        timeout: 500,
        startTimeout: 0,
        autoNext: true,
        isParent: true,
    },
    {
        sender: enums_1.Sender.Bot,
        contentType: enums_1.ContentType.HTML,
        content: "\n  <b>Email:</b> <br />\n  mikhail.tsai@gmail.com <br />\n  <br />\n  <b>Skype:</b> <br />\n  live:goldreich_2 <br />\n  <br />\n  <b>Upwork:</b> <br />\n  <a href=\"https://www.upwork.com/fl/mikhailtsai\" target=\"_blank\">\n    upwork.com/fl/mikhailtsai\n  </a>\u2714\uFE0F <br />\n  <br />\n  <b>Github:</b> <br />\n  <a href=\"https://github.com/mikhailtsai\" target=\"_blank\">\n    github.com/mikhailtsai\n  </a> <br />\n",
        timeout: 1000,
        startTimeout: 0,
        autoNext: true,
    },
    {
        sender: enums_1.Sender.User,
        contentType: enums_1.ContentType.Commands,
    },
];


/***/ }),

/***/ "./src/app/screens/home/services/scenario/lists/index.ts":
/*!***************************************************************!*\
  !*** ./src/app/screens/home/services/scenario/lists/index.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
tslib_1.__exportStar(__webpack_require__(/*! ./welcome */ "./src/app/screens/home/services/scenario/lists/welcome.ts"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./get-in-touch */ "./src/app/screens/home/services/scenario/lists/get-in-touch.ts"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./favorite-technology-stack */ "./src/app/screens/home/services/scenario/lists/favorite-technology-stack.ts"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./coming-soon */ "./src/app/screens/home/services/scenario/lists/coming-soon.ts"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./demo-examples */ "./src/app/screens/home/services/scenario/lists/demo-examples.ts"), exports);


/***/ }),

/***/ "./src/app/screens/home/services/scenario/lists/welcome.ts":
/*!*****************************************************************!*\
  !*** ./src/app/screens/home/services/scenario/lists/welcome.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = __webpack_require__(/*! ./../../../types/enums */ "./src/app/screens/home/types/enums.ts");
exports.welcome = [
    {
        sender: enums_1.Sender.Bot,
        contentType: enums_1.ContentType.HTML,
        content: "Hello there! \u270C",
        timeout: 1000,
        startTimeout: 0,
        autoNext: true,
        isParent: true,
    },
    {
        sender: enums_1.Sender.Bot,
        contentType: enums_1.ContentType.HTML,
        content: "\n      My name is Mikhail and I'm a full stack web developer \uD83D\uDC68\u200D\uD83D\uDCBB <br />\n      I'm currently available for work \u2714\uFE0F\n    ",
        timeout: 1500,
        startTimeout: 0,
        autoNext: true,
    },
    {
        sender: enums_1.Sender.Bot,
        contentType: enums_1.ContentType.HTML,
        content: "Feel free to ask me any questions",
        timeout: 1510,
        startTimeout: 500,
        autoNext: true,
    },
    {
        sender: enums_1.Sender.User,
        contentType: enums_1.ContentType.Commands,
    },
];


/***/ }),

/***/ "./src/app/screens/home/services/scrolling.service.ts":
/*!************************************************************!*\
  !*** ./src/app/screens/home/services/scrolling.service.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
var ScrollingService = /** @class */ (function () {
    function ScrollingService() {
    }
    Object.defineProperty(ScrollingService.prototype, "scroll$", {
        get: function () {
            if (this.scrollbar && this.scrollbar.view) {
                return rxjs_1.fromEvent(this.scrollbar.view, 'scroll');
            }
            else {
                return rxjs_1.of(null);
            }
        },
        enumerable: true,
        configurable: true
    });
    ScrollingService.prototype.init = function (scrollbar) {
        this.scrollbar = scrollbar;
    };
    /**
     * Call this method just before scenarioService.history changes
     */
    ScrollingService.prototype.scrollChatIfNeed = function (parent) {
        if (this.doesItNeedToScroll()) {
            this.scrollChat(parent);
        }
    };
    ScrollingService.prototype.doesItNeedToScroll = function () {
        if (this.scrollbar && this.scrollbar.view) {
            var _a = this.scrollbar.view, scrollTop = _a.scrollTop, clientHeight = _a.clientHeight, scrollHeight = _a.scrollHeight;
            return (scrollHeight - clientHeight) <= scrollTop;
        }
        return false;
    };
    ScrollingService.prototype.scrollChat = function (parent) {
        var _this = this;
        if (this.scrollbar && this.scrollbar.view) {
            Promise.resolve().then(function () {
                _this.scrollbar.update();
                setTimeout(function () {
                    var _a = _this.scrollbar.view, clientHeight = _a.clientHeight, scrollHeight = _a.scrollHeight, scrollTop = _a.scrollTop;
                    var parentElement = parent
                        ? document.querySelector(".history-" + parent)
                        : null;
                    var scrollLimit = scrollHeight - clientHeight;
                    var newScrollTop = parentElement && parentElement.offsetTop < scrollLimit
                        ? parentElement.offsetTop
                        : scrollLimit;
                    var top = scrollTop;
                    if (newScrollTop > top) {
                        requestAnimationFrame(function () {
                            var diff = newScrollTop - top;
                            top += diff > 20 ? diff / 1.5 : diff;
                            _this.scrollbar.scrollTo({ top: top });
                            _this.scrollChat(parent);
                        });
                    }
                }, 0);
            });
        }
    };
    return ScrollingService;
}());
exports.ScrollingService = ScrollingService;


/***/ }),

/***/ "./src/app/screens/home/types/enums.ts":
/*!*********************************************!*\
  !*** ./src/app/screens/home/types/enums.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Sender;
(function (Sender) {
    Sender[Sender["Bot"] = 0] = "Bot";
    Sender[Sender["User"] = 1] = "User";
})(Sender = exports.Sender || (exports.Sender = {}));
var Type;
(function (Type) {
    Type[Type["Alone"] = 0] = "Alone";
    Type[Type["First"] = 1] = "First";
    Type[Type["Between"] = 2] = "Between";
    Type[Type["Last"] = 3] = "Last";
    Type[Type["Question"] = 4] = "Question";
})(Type = exports.Type || (exports.Type = {}));
var ContentType;
(function (ContentType) {
    ContentType[ContentType["HTML"] = 0] = "HTML";
    ContentType[ContentType["Component"] = 1] = "Component";
    ContentType[ContentType["Commands"] = 2] = "Commands";
})(ContentType = exports.ContentType || (exports.ContentType = {}));
var Commands;
(function (Commands) {
    Commands["Welcome"] = "Welcome";
    Commands["FavoriteTechnologyStack"] = "FavoriteTechnologyStack";
    Commands["GetInTouch"] = "GetInTouch";
    Commands["ComingSoon"] = "ComingSoon";
    Commands["DemoExamples"] = "DemoExamples";
})(Commands = exports.Commands || (exports.Commands = {}));


/***/ }),

/***/ "./src/app/screens/screens-style.scss.shim.ngstyle.js":
/*!************************************************************!*\
  !*** ./src/app/screens/screens-style.scss.shim.ngstyle.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = ["[_nghost-%COMP%]    > section[_ngcontent-%COMP%], [_nghost-%COMP%]    > ng-scrollbar[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n  padding: 35px;\n  font-size: 16px;\n  width: 100%;\n  flex-grow: 1; }\n  @media screen and (max-width: 480px) {\n    [_nghost-%COMP%]    > section[_ngcontent-%COMP%], [_nghost-%COMP%]    > ng-scrollbar[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n      padding: 15px; } }\n  @media screen and (max-width: 440px) {\n    [_nghost-%COMP%]    > section[_ngcontent-%COMP%], [_nghost-%COMP%]    > ng-scrollbar[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n      padding: 5px;\n      padding-top: 15px; } }\n  [_nghost-%COMP%]    > section[_ngcontent-%COMP%]   main[_ngcontent-%COMP%], [_nghost-%COMP%]    > ng-scrollbar[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   main[_ngcontent-%COMP%] {\n    flex-grow: 1;\n    flex-direction: column;\n    align-items: flex-start;\n    display: flex; }\n  [_nghost-%COMP%]    > section[_ngcontent-%COMP%], [_nghost-%COMP%]    > ng-scrollbar[_ngcontent-%COMP%] {\n  background: rgba(20, 22, 22, 0.6); }\n  [_nghost-%COMP%]   nav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center; }\n  [_nghost-%COMP%]     .ng-scrollbar-thumb {\n  transition: -webkit-transform .05s linear;\n  transition: transform .05s linear;\n  transition: transform .05s linear, -webkit-transform .05s linear; }\n  [_nghost-%COMP%]     ng-scrollbar-y {\n  position: absolute;\n  right: 0; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NyZWVucy9EOlxccHJvZ3JhbW1pbmdcXHRzYWl0ZWNoXFxwYWNrYWdlc1xcdW5pdmVyc2FsLWFwcC9zcmNcXGFwcFxcc2NyZWVuc1xcc2NyZWVucy1zdHlsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksY0FBYTtFQUNiLGdCQUFlO0VBQ2YsWUFBVztFQUNYLGFBQVksRUFjYjtFQWJDO0lBTko7TUFPTSxjQUFhLEVBWWhCLEVBQUE7RUFWQztJQVRKO01BVU0sYUFBWTtNQUNaLGtCQUFpQixFQVFwQixFQUFBO0VBbkJIO0lBY00sYUFBWTtJQUNaLHVCQUFzQjtJQUN0Qix3QkFBdUI7SUFDdkIsY0FBYSxFQUNkO0VBbEJMO0VBc0JJLGtDQUFpQyxFQUNsQztFQXZCSDtFQTBCSSxjQUFhO0VBQ2IsK0JBQThCO0VBQzlCLG9CQUFtQixFQUNwQjtFQUdIO0VBRUksMENBQWlDO0VBQWpDLGtDQUFpQztFQUFqQyxpRUFBaUMsRUFDbEM7RUFISDtFQU1JLG1CQUFrQjtFQUNsQixTQUFRLEVBQ1QiLCJmaWxlIjoic3JjL2FwcC9zY3JlZW5zL3NjcmVlbnMtc3R5bGUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgJiA+IHNlY3Rpb24sICYgPiBuZy1zY3JvbGxiYXIgc2VjdGlvbiB7XG4gICAgcGFkZGluZzogMzVweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICBwYWRkaW5nOiAxNXB4O1xuICAgIH1cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NDBweCkge1xuICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgfVxuICAgIG1haW4ge1xuICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG4gIH1cblxuICAmID4gc2VjdGlvbiwgJiA+IG5nLXNjcm9sbGJhciB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyMCwgMjIsIDIyLCAwLjYpO1xuICB9XG5cbiAgbmF2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG59XG5cbjpob3N0IDo6bmctZGVlcCB7XG4gIC5uZy1zY3JvbGxiYXItdGh1bWIge1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMDVzIGxpbmVhcjtcbiAgfVxuXG4gIG5nLXNjcm9sbGJhci15IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gIH1cbn1cbiJdfQ== */"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/shared/fluent/f-button/f-button.component.ngfactory.js":
/*!************************************************************************!*\
  !*** ./src/app/shared/fluent/f-button/f-button.component.ngfactory.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./f-button.component.scss.shim.ngstyle */ "./src/app/shared/fluent/f-button/f-button.component.scss.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i3 = __webpack_require__(/*! ./f-button.component */ "./src/app/shared/fluent/f-button/f-button.component.ts");
var i4 = __webpack_require__(/*! ../services/mouse.service */ "./src/app/shared/fluent/services/mouse.service.ts");
var styles_FButtonComponent = [i0.styles];
var RenderType_FButtonComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_FButtonComponent, data: {} });
exports.RenderType_FButtonComponent = RenderType_FButtonComponent;
function View_FButtonComponent_0(_l) { return i1.ɵvid(0, [i1.ɵqud(402653184, 1, { button: 0 }), (_l()(), i1.ɵeld(1, 0, [[1, 0], ["button", 1]], null, 27, "button", [], null, null, null, null, null)), i1.ɵdid(2, 278528, null, 0, i2.NgClass, [i1.IterableDiffers, i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngClass: [0, "ngClass"] }, null), i1.ɵpod(3, { rendered: 0 }), (_l()(), i1.ɵeld(4, 0, null, null, 2, "div", [["class", "common-light"]], null, null, null, null, null)), i1.ɵdid(5, 278528, null, 0, i2.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(6, { left: 0, top: 1 }), (_l()(), i1.ɵeld(7, 0, null, null, 2, "div", [["class", "background-light"]], null, null, null, null, null)), i1.ɵdid(8, 278528, null, 0, i2.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(9, { left: 0, top: 1 }), (_l()(), i1.ɵeld(10, 0, null, null, 16, "div", [["class", "borders"]], null, null, null, null, null)), (_l()(), i1.ɵeld(11, 0, null, null, 3, "div", [], null, null, null, null, null)), (_l()(), i1.ɵeld(12, 0, null, null, 2, "div", [["class", "border-light"]], null, null, null, null, null)), i1.ɵdid(13, 278528, null, 0, i2.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(14, { left: 0, top: 1 }), (_l()(), i1.ɵeld(15, 0, null, null, 3, "div", [], null, null, null, null, null)), (_l()(), i1.ɵeld(16, 0, null, null, 2, "div", [["class", "border-light"]], null, null, null, null, null)), i1.ɵdid(17, 278528, null, 0, i2.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(18, { left: 0, top: 1 }), (_l()(), i1.ɵeld(19, 0, null, null, 3, "div", [], null, null, null, null, null)), (_l()(), i1.ɵeld(20, 0, null, null, 2, "div", [["class", "border-light"]], null, null, null, null, null)), i1.ɵdid(21, 278528, null, 0, i2.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(22, { left: 0, top: 1 }), (_l()(), i1.ɵeld(23, 0, null, null, 3, "div", [], null, null, null, null, null)), (_l()(), i1.ɵeld(24, 0, null, null, 2, "div", [["class", "border-light"]], null, null, null, null, null)), i1.ɵdid(25, 278528, null, 0, i2.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(26, { left: 0, top: 1 }), (_l()(), i1.ɵeld(27, 0, null, null, 1, "div", [], null, null, null, null, null)), i1.ɵncd(null, 0)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _ck(_v, 3, 0, (_co.rendered && _co.moseDetected)); _ck(_v, 2, 0, currVal_0); var currVal_1 = _ck(_v, 6, 0, (_co.commonLight ? ((_co.commonLight[0] - (_co.COMMON_LIGHT_SIZE / 2)) + "px") : null), (_co.commonLight ? ((_co.commonLight[1] - (_co.COMMON_LIGHT_SIZE / 2)) + "px") : null)); _ck(_v, 5, 0, currVal_1); var currVal_2 = _ck(_v, 9, 0, (_co.backgroundLight ? (((_co.backgroundLight[0] - 250) || 0) + "px") : null), (_co.backgroundLight ? (((_co.backgroundLight[1] - 250) || 0) + "px") : null)); _ck(_v, 8, 0, currVal_2); var currVal_3 = _ck(_v, 14, 0, (_co.backgroundLight ? (((_co.backgroundLight[0] - 85) || 0) + "px") : 0), (_co.backgroundLight ? (((_co.backgroundLight[1] - 81) || 0) + "px") : 0)); _ck(_v, 13, 0, currVal_3); var currVal_4 = _ck(_v, 18, 0, (_co.backgroundLight ? (((_co.backgroundLight[0] - 85) || 0) + "px") : 0), (_co.backgroundLight ? ((((_co.backgroundLight[1] - 81) - _co.height) || 0) + "px") : 0)); _ck(_v, 17, 0, currVal_4); var currVal_5 = _ck(_v, 22, 0, (_co.backgroundLight ? (((_co.backgroundLight[0] - 85) || 0) + "px") : 0), (_co.backgroundLight ? (((_co.backgroundLight[1] - 81) || 0) + "px") : 0)); _ck(_v, 21, 0, currVal_5); var currVal_6 = _ck(_v, 26, 0, (_co.backgroundLight ? ((((_co.backgroundLight[0] - 85) - _co.width) || 0) + "px") : 0), (_co.backgroundLight ? (((_co.backgroundLight[1] - 81) || 0) + "px") : 0)); _ck(_v, 25, 0, currVal_6); }, null); }
exports.View_FButtonComponent_0 = View_FButtonComponent_0;
function View_FButtonComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-f-button", [], null, [["window", "resize"]], function (_v, en, $event) { var ad = true; if (("window:resize" === en)) {
        var pd_0 = (i1.ɵnov(_v, 1).updateRect($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_FButtonComponent_0, RenderType_FButtonComponent)), i1.ɵdid(1, 4308992, null, 0, i3.FButtonComponent, [i4.MouseService, i1.PLATFORM_ID], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_FButtonComponent_Host_0 = View_FButtonComponent_Host_0;
var FButtonComponentNgFactory = i1.ɵccf("app-f-button", i3.FButtonComponent, View_FButtonComponent_Host_0, { subscribeTo: "subscribeTo", wrapper: "wrapper" }, {}, ["*"]);
exports.FButtonComponentNgFactory = FButtonComponentNgFactory;


/***/ }),

/***/ "./src/app/shared/fluent/f-button/f-button.component.scss.shim.ngstyle.js":
/*!********************************************************************************!*\
  !*** ./src/app/shared/fluent/f-button/f-button.component.scss.shim.ngstyle.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = ["button[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n  position: relative;\n  padding: 12px 30px;\n  color: #fff;\n  margin-right: 8px;\n  margin-bottom: 8px;\n  outline: none;\n  overflow: hidden;\n  transition: -webkit-transform .05s linear;\n  transition: transform .05s linear;\n  transition: transform .05s linear, -webkit-transform .05s linear; }\n  button[_ngcontent-%COMP%]:active {\n    -webkit-transform: scale(0.99);\n            transform: scale(0.99); }\n  button[_ngcontent-%COMP%]   div.borders[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0; }\n  button[_ngcontent-%COMP%]   div.borders[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n      position: absolute;\n      overflow: hidden; }\n  button[_ngcontent-%COMP%]   div.borders[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(1) {\n      left: 0;\n      right: 0;\n      top: 0;\n      height: 1px; }\n  button[_ngcontent-%COMP%]   div.borders[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) {\n      left: 0;\n      right: 0;\n      bottom: 0;\n      height: 1px; }\n  button[_ngcontent-%COMP%]   div.borders[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(3) {\n      left: 0;\n      top: 0;\n      bottom: 0;\n      width: 1px; }\n  button[_ngcontent-%COMP%]   div.borders[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(4) {\n      right: 0;\n      top: 0;\n      bottom: 0;\n      width: 1px; }\n  .common-light[_ngcontent-%COMP%] {\n  position: absolute;\n  background: url(/assets/common-light.svg) 50% 50% no-repeat;\n  width: 514px;\n  height: 514px;\n  background-size: 514px; }\n  .background-light[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0.2;\n  background: url(/assets/background-light.png) 50% 50% no-repeat;\n  background-size: 400px 400px;\n  width: 500px;\n  height: 500px;\n  transition: opacity .3s linear, background-size .3s linear, left .1s linear, top .1s linear; }\n  @media screen and (max-width: 480px) {\n    .background-light[_ngcontent-%COMP%] {\n      opacity: 0;\n      background-size: 300px 300px;\n      transition: opacity .3s linear, background-size .5s linear;\n      left: calc(50% - 250px) !important;\n      top: calc(50% - 250px) !important; } }\n  button[_ngcontent-%COMP%]:active   .background-light[_ngcontent-%COMP%] {\n  background-size: 600px 600px; }\n  @media screen and (max-width: 480px) {\n    button[_ngcontent-%COMP%]:active   .background-light[_ngcontent-%COMP%] {\n      opacity: 1; } }\n  .border-light[_ngcontent-%COMP%] {\n  position: absolute;\n  background: url(/assets/border-light.png) 50% 50% no-repeat;\n  width: 170px;\n  height: 162px;\n  opacity: 0;\n  transition: opacity .2s linear, left .1s linear, top .1s linear; }\n  @media screen and (max-width: 480px) {\n    .border-light[_ngcontent-%COMP%] {\n      display: none; } }\n  .rendered[_ngcontent-%COMP%]   .border-light[_ngcontent-%COMP%] {\n  opacity: 1; }\n  [_nghost-%COMP%]:hover   .background-light[_ngcontent-%COMP%] {\n  opacity: 1; }\n  @media screen and (max-width: 480px) {\n    [_nghost-%COMP%]:hover   .background-light[_ngcontent-%COMP%] {\n      opacity: .6; } }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2ZsdWVudC9mLWJ1dHRvbi9EOlxccHJvZ3JhbW1pbmdcXHRzYWl0ZWNoXFxwYWNrYWdlc1xcdW5pdmVyc2FsLWFwcC9zcmNcXGFwcFxcc2hhcmVkXFxmbHVlbnRcXGYtYnV0dG9uXFxmLWJ1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQVk7RUFDWixpQkFBZ0I7RUFDaEIsbUJBQWtCO0VBQ2xCLG1CQUFrQjtFQUNsQixZQUFXO0VBQ1gsa0JBQWlCO0VBQ2pCLG1CQUFrQjtFQUNsQixjQUFhO0VBQ2IsaUJBQWdCO0VBQ2hCLDBDQUFpQztFQUFqQyxrQ0FBaUM7RUFBakMsaUVBQWlDLEVBMkNsQztFQXJERDtJQWFJLCtCQUFzQjtZQUF0Qix1QkFBc0IsRUFDdkI7RUFkSDtJQWlCSSxtQkFBa0I7SUFDbEIsT0FBTTtJQUNOLFFBQU87SUFDUCxTQUFRO0lBQ1IsVUFBUyxFQStCVjtFQXBESDtNQXdCTSxtQkFBa0I7TUFDbEIsaUJBQWdCLEVBQ2pCO0VBMUJMO01BNkJNLFFBQU87TUFDUCxTQUFRO01BQ1IsT0FBTTtNQUNOLFlBQVcsRUFDWjtFQWpDTDtNQW1DTSxRQUFPO01BQ1AsU0FBUTtNQUNSLFVBQVM7TUFDVCxZQUFXLEVBQ1o7RUF2Q0w7TUF5Q00sUUFBTztNQUNQLE9BQU07TUFDTixVQUFTO01BQ1QsV0FBVSxFQUNYO0VBN0NMO01BK0NNLFNBQVE7TUFDUixPQUFNO01BQ04sVUFBUztNQUNULFdBQVUsRUFDWDtFQUlMO0VBQ0UsbUJBQWtCO0VBQ2xCLDREQUEyRDtFQUMzRCxhQUFZO0VBQ1osY0FBYTtFQUNiLHVCQUFzQixFQUN2QjtFQUVEO0VBQ0UsbUJBQWtCO0VBQ2xCLGFBQVk7RUFDWixnRUFBK0Q7RUFDL0QsNkJBQTRCO0VBQzVCLGFBQVk7RUFDWixjQUFhO0VBQ2IsNEZBQTJGLEVBUTVGO0VBUEM7SUFSRjtNQVNJLFdBQVU7TUFDViw2QkFBNEI7TUFDNUIsMkRBQTBEO01BQzFELG1DQUFrQztNQUNsQyxrQ0FBaUMsRUFFcEMsRUFBQTtFQUVEO0VBRUksNkJBQTRCLEVBSTdCO0VBSEM7SUFISjtNQUlNLFdBQVUsRUFFYixFQUFBO0VBR0g7RUFDRSxtQkFBa0I7RUFDbEIsNERBQTJEO0VBQzNELGFBQVk7RUFDWixjQUFhO0VBQ2IsV0FBVTtFQUNWLGdFQUErRCxFQUloRTtFQUhDO0lBUEY7TUFRSSxjQUFhLEVBRWhCLEVBQUE7RUFFRDtFQUNFLFdBQVUsRUFDWDtFQUVEO0VBR00sV0FBVSxFQUlYO0VBSEM7SUFKTjtNQUtRLFlBQVcsRUFFZCxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2ZsdWVudC9mLWJ1dHRvbi9mLWJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAxMnB4IDMwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjA1cyBsaW5lYXI7XG5cbiAgJjphY3RpdmUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OSk7XG4gIH1cblxuICBkaXYuYm9yZGVycyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcblxuICAgICYgPiBkaXYge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG5cbiAgICAmID4gZGl2Om50aC1jaGlsZCgxKSB7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICB0b3A6IDA7XG4gICAgICBoZWlnaHQ6IDFweDtcbiAgICB9XG4gICAgJiA+IGRpdjpudGgtY2hpbGQoMikge1xuICAgICAgbGVmdDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgfVxuICAgICYgPiBkaXY6bnRoLWNoaWxkKDMpIHtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB0b3A6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgICB3aWR0aDogMXB4O1xuICAgIH1cbiAgICAmID4gZGl2Om50aC1jaGlsZCg0KSB7XG4gICAgICByaWdodDogMDtcbiAgICAgIHRvcDogMDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIHdpZHRoOiAxcHg7XG4gICAgfVxuICB9XG59XG5cbi5jb21tb24tbGlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2NvbW1vbi1saWdodC5zdmcpIDUwJSA1MCUgbm8tcmVwZWF0O1xuICB3aWR0aDogNTE0cHg7XG4gIGhlaWdodDogNTE0cHg7XG4gIGJhY2tncm91bmQtc2l6ZTogNTE0cHg7XG59XG5cbi5iYWNrZ3JvdW5kLWxpZ2h0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAwLjI7XG4gIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2JhY2tncm91bmQtbGlnaHQucG5nKSA1MCUgNTAlIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiA0MDBweCA0MDBweDtcbiAgd2lkdGg6IDUwMHB4O1xuICBoZWlnaHQ6IDUwMHB4O1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4zcyBsaW5lYXIsIGJhY2tncm91bmQtc2l6ZSAuM3MgbGluZWFyLCBsZWZ0IC4xcyBsaW5lYXIsIHRvcCAuMXMgbGluZWFyO1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgYmFja2dyb3VuZC1zaXplOiAzMDBweCAzMDBweDtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4zcyBsaW5lYXIsIGJhY2tncm91bmQtc2l6ZSAuNXMgbGluZWFyO1xuICAgIGxlZnQ6IGNhbGMoNTAlIC0gMjUwcHgpICFpbXBvcnRhbnQ7XG4gICAgdG9wOiBjYWxjKDUwJSAtIDI1MHB4KSAhaW1wb3J0YW50O1xuICB9XG59XG5cbmJ1dHRvbjphY3RpdmUge1xuICAuYmFja2dyb3VuZC1saWdodCB7XG4gICAgYmFja2dyb3VuZC1zaXplOiA2MDBweCA2MDBweDtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIH1cbn1cblxuLmJvcmRlci1saWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvYm9yZGVyLWxpZ2h0LnBuZykgNTAlIDUwJSBuby1yZXBlYXQ7XG4gIHdpZHRoOiAxNzBweDtcbiAgaGVpZ2h0OiAxNjJweDtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMnMgbGluZWFyLCBsZWZ0IC4xcyBsaW5lYXIsIHRvcCAuMXMgbGluZWFyO1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLnJlbmRlcmVkIC5ib3JkZXItbGlnaHQge1xuICBvcGFjaXR5OiAxO1xufVxuXG46aG9zdCB7XG4gICY6aG92ZXIge1xuICAgIC5iYWNrZ3JvdW5kLWxpZ2h0IHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgICBvcGFjaXR5OiAuNjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuIl19 */"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/shared/fluent/f-button/f-button.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/fluent/f-button/f-button.component.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(/*! @angular/common */ "@angular/common");
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
var animations_1 = __webpack_require__(/*! ./../../../layout/animations */ "./src/app/layout/animations.ts");
var mouse_service_1 = __webpack_require__(/*! ./../services/mouse.service */ "./src/app/shared/fluent/services/mouse.service.ts");
var FButtonComponent = /** @class */ (function () {
    function FButtonComponent(mouse, platformId) {
        this.mouse = mouse;
        this.platformId = platformId;
        this.subscriptions = [];
        this.COMMON_LIGHT_SIZE = 514;
        this.rendered = false;
        this.moseDetected = false;
        this.height = 0;
        this.width = 0;
        this.left = 0;
        this.top = 0;
    }
    FButtonComponent.prototype.ngAfterViewInit = function () {
        this.updateLightPosition();
    };
    FButtonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions.push(this.backgroundLight$
            .subscribe(function (backgroundLight) { return _this.backgroundLight = backgroundLight; }));
        if (this.subscribeTo) {
            this.subscriptions.push(this.subscribeTo.subscribe(function () { return _this.updateRect(); }));
        }
        setTimeout(function () { return _this.updateRect(); }, animations_1.ANIMATION_DURATION);
    };
    FButtonComponent.prototype.updateLightPosition = function () {
        var _this = this;
        if (common_1.isPlatformBrowser(this.platformId)) {
            setTimeout(function () {
                var _a = _this.button.nativeElement, offsetLeft = _a.offsetLeft, offsetTop = _a.offsetTop;
                var wrapperComputed = window.getComputedStyle(_this.wrapper, null);
                var paddingLeft = Number.parseFloat(wrapperComputed.getPropertyValue('padding-left'));
                var paddingTop = Number.parseFloat(wrapperComputed.getPropertyValue('padding-top'));
                var _b = _this.wrapper, wrapperHeight = _b.clientHeight, wrapperWidth = _b.clientWidth, wrapperTop = _b.offsetTop, wrapperLeft = _b.offsetLeft;
                _this.commonLight = [
                    Math.round(wrapperWidth / 2) - 24 - (offsetLeft - (wrapperLeft + paddingLeft)),
                    Math.round(wrapperHeight / 2) - 24 - (offsetTop - (wrapperTop + paddingTop)),
                ];
            }, 0);
        }
    };
    FButtonComponent.prototype.updateRect = function () {
        if (common_1.isPlatformBrowser(this.platformId)) {
            var _a = this.button.nativeElement.getBoundingClientRect(), width = _a.width, height = _a.height, left = _a.left, top_1 = _a.top;
            this.width = width;
            this.height = height;
            this.left = left;
            this.top = top_1;
            this.rendered = true;
        }
    };
    Object.defineProperty(FButtonComponent.prototype, "backgroundLight$", {
        get: function () {
            var _this = this;
            return this.mouse.coordinates$.pipe(operators_1.tap(function () { return _this.moseDetected = true; }), operators_1.map(function (coords) { return [coords[0] - _this.left, coords[1] - _this.top]; }));
        },
        enumerable: true,
        configurable: true
    });
    return FButtonComponent;
}());
exports.FButtonComponent = FButtonComponent;


/***/ }),

/***/ "./src/app/shared/fluent/fluent.module.ts":
/*!************************************************!*\
  !*** ./src/app/shared/fluent/fluent.module.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FluentModule = /** @class */ (function () {
    function FluentModule() {
    }
    return FluentModule;
}());
exports.FluentModule = FluentModule;


/***/ }),

/***/ "./src/app/shared/fluent/services/mouse.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/fluent/services/mouse.service.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(/*! @angular/common */ "@angular/common");
var rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
exports.MEDIA_MAX_WIDTH = 480;
var MouseService = /** @class */ (function () {
    function MouseService(platformId) {
        this.platformId = platformId;
        this.canUpdate = true;
    }
    Object.defineProperty(MouseService.prototype, "coordinates$", {
        get: function () {
            if (!this.coordinates) {
                this.init();
            }
            return this.coordinates.pipe(operators_1.distinctUntilChanged());
        },
        enumerable: true,
        configurable: true
    });
    MouseService.prototype.init = function () {
        var _this = this;
        this.coordinates = new rxjs_1.ReplaySubject(1);
        this.coordinates.next([-1000, -1000]);
        if (common_1.isPlatformBrowser(this.platformId)) {
            if (window.innerWidth > exports.MEDIA_MAX_WIDTH) {
                document.addEventListener('mousemove', function (event) {
                    if (_this.canUpdate) {
                        _this.canUpdate = false;
                        requestAnimationFrame(function () {
                            _this.coordinates.next([event.x, event.y]);
                            _this.canUpdate = true;
                        });
                    }
                });
            }
        }
    };
    return MouseService;
}());
exports.MouseService = MouseService;


/***/ }),

/***/ "./src/main.server.ts":
/*!****************************!*\
  !*** ./src/main.server.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var app_server_module_ngfactory_1 = __webpack_require__(/*! ./app/app.server.module.ngfactory */ "./src/app/app.server.module.ngfactory.js");
exports.AppServerModuleNgFactory = app_server_module_ngfactory_1.AppServerModuleNgFactory;
var __lazy_0__ = __webpack_require__(/*! ./app/screens/home/home.module.ngfactory.js */ "./src/app/screens/home/home.module.ngfactory.js");
var __lazy_1__ = __webpack_require__(/*! ./app/screens/graphql-and-websockets/graphql-and-websockets.module.ngfactory.js */ "./src/app/screens/graphql-and-websockets/graphql-and-websockets.module.ngfactory.js");
var __lazy_2__ = __webpack_require__(/*! ./app/screens/dnd-and-pwa/dnd-and-pwa.module.ngfactory.js */ "./src/app/screens/dnd-and-pwa/dnd-and-pwa.module.ngfactory.js");
var __lazy_3__ = __webpack_require__(/*! ./app/screens/emoji-chat/emoji-chat.module.ngfactory.js */ "./src/app/screens/emoji-chat/emoji-chat.module.ngfactory.js");
var app_server_module_1 = __webpack_require__(/*! ./app/app.server.module */ "./src/app/app.server.module.ts");
exports.AppServerModule = app_server_module_1.AppServerModule;
exports.LAZY_MODULE_MAP = { "./screens/home/home.module#HomeModule": __lazy_0__.HomeModuleNgFactory, "./screens/graphql-and-websockets/graphql-and-websockets.module#GraphqlAndWebsocketsModule": __lazy_1__.GraphqlAndWebsocketsModuleNgFactory, "./screens/dnd-and-pwa/dnd-and-pwa.module#DndAndPwaModule": __lazy_2__.DndAndPwaModuleNgFactory, "./screens/emoji-chat/emoji-chat.module#EmojiChatModule": __lazy_3__.EmojiChatModuleNgFactory };


/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi ./src/main.server.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\programming\tsaitech\packages\universal-app\src\main.server.ts */"./src/main.server.ts");


/***/ }),

/***/ "@angular/animations":
/*!**************************************!*\
  !*** external "@angular/animations" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/animations");

/***/ }),

/***/ "@angular/animations/browser":
/*!**********************************************!*\
  !*** external "@angular/animations/browser" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/animations/browser");

/***/ }),

/***/ "@angular/cdk/a11y":
/*!************************************!*\
  !*** external "@angular/cdk/a11y" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/cdk/a11y");

/***/ }),

/***/ "@angular/cdk/bidi":
/*!************************************!*\
  !*** external "@angular/cdk/bidi" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/cdk/bidi");

/***/ }),

/***/ "@angular/cdk/layout":
/*!**************************************!*\
  !*** external "@angular/cdk/layout" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/cdk/layout");

/***/ }),

/***/ "@angular/cdk/observers":
/*!*****************************************!*\
  !*** external "@angular/cdk/observers" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/cdk/observers");

/***/ }),

/***/ "@angular/cdk/overlay":
/*!***************************************!*\
  !*** external "@angular/cdk/overlay" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/cdk/overlay");

/***/ }),

/***/ "@angular/cdk/platform":
/*!****************************************!*\
  !*** external "@angular/cdk/platform" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/cdk/platform");

/***/ }),

/***/ "@angular/cdk/portal":
/*!**************************************!*\
  !*** external "@angular/cdk/portal" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/cdk/portal");

/***/ }),

/***/ "@angular/cdk/scrolling":
/*!*****************************************!*\
  !*** external "@angular/cdk/scrolling" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/cdk/scrolling");

/***/ }),

/***/ "@angular/common":
/*!**********************************!*\
  !*** external "@angular/common" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/common");

/***/ }),

/***/ "@angular/common/http":
/*!***************************************!*\
  !*** external "@angular/common/http" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/common/http");

/***/ }),

/***/ "@angular/core":
/*!********************************!*\
  !*** external "@angular/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/core");

/***/ }),

/***/ "@angular/http":
/*!********************************!*\
  !*** external "@angular/http" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/http");

/***/ }),

/***/ "@angular/material/button":
/*!*******************************************!*\
  !*** external "@angular/material/button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/material/button");

/***/ }),

/***/ "@angular/material/core":
/*!*****************************************!*\
  !*** external "@angular/material/core" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/material/core");

/***/ }),

/***/ "@angular/material/icon":
/*!*****************************************!*\
  !*** external "@angular/material/icon" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/material/icon");

/***/ }),

/***/ "@angular/material/progress-spinner":
/*!*****************************************************!*\
  !*** external "@angular/material/progress-spinner" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/material/progress-spinner");

/***/ }),

/***/ "@angular/material/tooltip":
/*!********************************************!*\
  !*** external "@angular/material/tooltip" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/material/tooltip");

/***/ }),

/***/ "@angular/platform-browser":
/*!********************************************!*\
  !*** external "@angular/platform-browser" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-browser");

/***/ }),

/***/ "@angular/platform-browser/animations":
/*!*******************************************************!*\
  !*** external "@angular/platform-browser/animations" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-browser/animations");

/***/ }),

/***/ "@angular/platform-server":
/*!*******************************************!*\
  !*** external "@angular/platform-server" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-server");

/***/ }),

/***/ "@angular/router":
/*!**********************************!*\
  !*** external "@angular/router" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/router");

/***/ }),

/***/ "@nguniversal/module-map-ngfactory-loader":
/*!***********************************************************!*\
  !*** external "@nguniversal/module-map-ngfactory-loader" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nguniversal/module-map-ngfactory-loader");

/***/ }),

/***/ "ngx-scrollbar":
/*!********************************!*\
  !*** external "ngx-scrollbar" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ngx-scrollbar");

/***/ }),

/***/ "rxjs":
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs");

/***/ }),

/***/ "rxjs/operators":
/*!*********************************!*\
  !*** external "rxjs/operators" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs/operators");

/***/ }),

/***/ "tslib":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ })

/******/ })));
//# sourceMappingURL=main.js.map