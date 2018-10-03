import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ImgZoomerComponent } from './components/img-zoomer';
var IonicImageZoomer = /** @class */ (function () {
    function IonicImageZoomer() {
    }
    IonicImageZoomer.forRoot = function () {
        return {
            ngModule: IonicImageZoomer,
            providers: [],
        };
    };
    IonicImageZoomer.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        ImgZoomerComponent,
                    ],
                    imports: [
                        IonicModule
                    ],
                    exports: [
                        ImgZoomerComponent,
                    ],
                },] },
    ];
    return IonicImageZoomer;
}());
export { IonicImageZoomer };
//# sourceMappingURL=image-zoomer.module.js.map