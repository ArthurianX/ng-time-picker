"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ArtTimePickerComponent = (function () {
    function ArtTimePickerComponent(viewContainer) {
        this.viewContainer = viewContainer;
        this.el = this.viewContainer.element.nativeElement;
    }
    ArtTimePickerComponent.prototype.ngAfterViewInit = function () {
    };
    return ArtTimePickerComponent;
}());
ArtTimePickerComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: '[art-timepicker], art-timepicker'
            },] },
];
/** @nocollapse */
ArtTimePickerComponent.ctorParameters = function () { return [
    { type: core_1.ViewContainerRef, },
]; };
exports.ArtTimePickerComponent = ArtTimePickerComponent;
//# sourceMappingURL=ng-time-picker.component.js.map