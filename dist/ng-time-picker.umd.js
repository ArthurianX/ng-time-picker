(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/animations"), require("@angular/common"), require("@angular/platform-browser/animations"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/animations", "@angular/common", "@angular/platform-browser/animations"], factory);
	else if(typeof exports === 'object')
		exports["ng-time-picker"] = factory(require("@angular/core"), require("@angular/animations"), require("@angular/common"), require("@angular/platform-browser/animations"));
	else
		root["ng-time-picker"] = factory(root["@angular/core"], root["@angular/animations"], root["@angular/common"], root["@angular/platform-browser/animations"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var animations_1 = __webpack_require__(4);
var ArtTimePickerComponent = (function () {
    function ArtTimePickerComponent(viewContainer) {
        this.viewContainer = viewContainer;
        this.hours = [
            { value: 24, normal: '00', full: '12am' },
            { value: 1, normal: '1', full: '1am' },
            { value: 2, normal: '2', full: '2am' },
            { value: 3, normal: '3', full: '3am' },
            { value: 4, normal: '4', full: '4am' },
            { value: 5, normal: '5', full: '5am' },
            { value: 6, normal: '6', full: '6am' },
            { value: 7, normal: '7', full: '7am' },
            { value: 8, normal: '8', full: '8am' },
            { value: 9, normal: '9', full: '9am' },
            { value: 10, normal: '10', full: '10am' },
            { value: 11, normal: '11', full: '11am' },
            { value: 12, normal: '12', full: '12pm(noon)' },
            { value: 13, normal: '13', full: '1pm' },
            { value: 14, normal: '14', full: '2pm' },
            { value: 15, normal: '15', full: '3pm' },
            { value: 16, normal: '16', full: '4pm' },
            { value: 17, normal: '17', full: '5pm' },
            { value: 18, normal: '18', full: '6pm' },
            { value: 19, normal: '19', full: '7pm' },
            { value: 20, normal: '20', full: '8pm' },
            { value: 21, normal: '21', full: '9pm' },
            { value: 22, normal: '22', full: '10pm' },
            { value: 23, normal: '23', full: '11pm' },
        ];
        this.minutes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
            26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 0];
        this.selectedFormat = 'normal';
        this.el = this.viewContainer.element.nativeElement;
    }
    ArtTimePickerComponent.prototype.ngAfterViewInit = function () {
    };
    ArtTimePickerComponent.prototype.setHour = function (hour) {
    };
    ArtTimePickerComponent.prototype.setMinute = function (minute) {
    };
    return ArtTimePickerComponent;
}());
ArtTimePickerComponent = __decorate([
    core_1.Component({
        selector: '[art-timepicker], art-timepicker',
        encapsulation: core_1.ViewEncapsulation.Emulated,
        template: "\n\t  <div class=\"timepick\">\n      \n      <div class=\"hour\">\n\n\t      <ul>\n\t\t      <li *ngFor=\"let hour of hours\"\n\t\t          (click)=\"setHour(hour)\">\n\t\t\t      {{hour[selectedFormat]}}\n\t\t      </li>\n\t      </ul>\n        \n      </div>\n      \n      <div class=\"minute\">\n\n\t      <ul>\n\t\t      <li *ngFor=\"let minute of minutes\"\n\t\t          (click)=\"setMinute(minute)\">\n\t\t\t      {{minute}}\n\t\t      </li>\n\t      </ul>\n        \n      </div>\n      \n      <div class=\"icon\">\n\n\t      <svg fill=\"#000000\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n\t\t      <defs>\n\t\t\t      <path d=\"M0 0h24v24H0V0z\" id=\"a\"/>\n\t\t      </defs>\n\t\t      <clipPath id=\"b\">\n\t\t\t      <use overflow=\"visible\" xlink:href=\"#a\"/>\n\t\t      </clipPath>\n\t\t      <path clip-path=\"url(#b)\" d=\"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z\"/>\n\t      </svg>\n\n\n\t      <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 100 125\" enable-background=\"new 0 0 100 100\" xml:space=\"preserve\"><path d=\"M50,4.5C24.911,4.5,4.5,24.911,4.5,50S24.911,95.5,50,95.5S95.5,75.089,95.5,50S75.089,4.5,50,4.5z M50,88.5  c-21.229,0-38.5-17.271-38.5-38.5S28.771,11.5,50,11.5S88.5,28.771,88.5,50S71.229,88.5,50,88.5z M53.5,48.51V18.834  c0-1.933-1.567-3.5-3.5-3.5s-3.5,1.567-3.5,3.5V50c0,0.952,0.388,1.863,1.074,2.523l17.167,16.501  c0.679,0.652,1.553,0.977,2.426,0.977c0.919,0,1.836-0.359,2.523-1.074c1.34-1.394,1.296-3.609-0.098-4.949L53.5,48.51z\"/></svg>\n\n\n\t      <svg fill=\"#000000\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t      <path d=\"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z\"/>\n\t\t      <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n\t      </svg>\n\n\n\t      <svg fill=\"#000000\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t      <path d=\"M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z\"/>\n\t\t      <path d=\"M0-.75h24v24H0z\" fill=\"none\"/>\n\t      </svg>\n        \n      </div>\n      \n      <div class=\"format\">\n        <p (click)=\"selectedFormat = 'full'\">12h</p>\n        <p (click)=\"selectedFormat = 'normal'\">24h</p>\n      </div>\n\n\t\t  <div class=\"jumparrows\">\n\t\t\t\t\n\t\t  </div>\n      \n    </div>\n  ",
        styles: [
            "\n      :host {\n\t\t    position: relative;\n      }\n\t\t  .timepick {\n        border: 1px solid #b1b1b1;\n        border-radius: 6px;\n        width: 120px;\n        height: 26px;\n        overflow: hidden;\n        box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.1);\n      }\n      .timepick * {\n\t\t      box-sizing: border-box;\n\t\t      font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n\t\t      font-size: 14px;\n      }\n      .timepick ul, .timepick li {\n\t\t      list-style: none;\n\t\t      list-style-image: none;\n\t\t      margin: 0;\n\t\t      padding: 0;\n      }\n\n      .timepick > div { display: inline-block }\n      .timepick .hour {}\n      .timepick .minute {}\n      .timepick .icon {}\n      .timepick .format {}\n      .timepick .jumparrows {}\n\t\t  \n      \n    "
        ],
        animations: [
            animations_1.trigger('heroState', [
                animations_1.state('inactive', animations_1.style({
                    backgroundColor: '#eee',
                    transform: 'scale(1)'
                })),
                animations_1.state('active', animations_1.style({
                    backgroundColor: '#cfd8dc',
                    transform: 'scale(1.1)'
                })),
                animations_1.transition('inactive => active', animations_1.animate('100ms ease-in')),
                animations_1.transition('active => inactive', animations_1.animate('100ms ease-out'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [core_1.ViewContainerRef])
], ArtTimePickerComponent);
exports.ArtTimePickerComponent = ArtTimePickerComponent;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var common_1 = __webpack_require__(5);
var animations_1 = __webpack_require__(6);
var ng_time_picker_component_1 = __webpack_require__(0);
var ArtTimePickerModule = (function () {
    function ArtTimePickerModule() {
    }
    return ArtTimePickerModule;
}());
ArtTimePickerModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, animations_1.BrowserAnimationsModule],
        declarations: [ng_time_picker_component_1.ArtTimePickerComponent],
        exports: [ng_time_picker_component_1.ArtTimePickerComponent]
    })
], ArtTimePickerModule);
exports.ArtTimePickerModule = ArtTimePickerModule;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ng_time_picker_component_1 = __webpack_require__(0);
exports.ArtTimePickerComponent = ng_time_picker_component_1.ArtTimePickerComponent;
var ng_time_picker_module_1 = __webpack_require__(2);
exports.ArtTimePickerModule = ng_time_picker_module_1.ArtTimePickerModule;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=ng-time-picker.umd.js.map