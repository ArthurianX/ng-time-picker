"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var ng_time_picker_component_1 = require("./ng-time-picker.component");
var ArtTimePickerModule = (function () {
    function ArtTimePickerModule() {
    }
    return ArtTimePickerModule;
}());
ArtTimePickerModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [common_1.CommonModule],
                declarations: [ng_time_picker_component_1.ArtTimePickerComponent],
                exports: [ng_time_picker_component_1.ArtTimePickerComponent]
            },] },
];
/** @nocollapse */
ArtTimePickerModule.ctorParameters = function () { return []; };
exports.ArtTimePickerModule = ArtTimePickerModule;
//# sourceMappingURL=ng-time-picker.module.js.map