import { Component, ElementRef, EventEmitter, Input, Output, Renderer2 } from '@angular/core';
import { Gesture } from "ionic-angular";
var ImgZoomerComponent = /** @class */ (function () {
    function ImgZoomerComponent(_element, renderer) {
        this._element = _element;
        this.renderer = renderer;
        this.imgAttributes = [];
        this.width = "100%";
        this.load = new EventEmitter();
        this.transforms = [];
        this.nextScale = 1;
        this.currentScale = null;
        this.nextX = 0;
        this.nextY = 0;
        this.currentX = null;
        this.currentY = null;
    }
    Object.defineProperty(ImgZoomerComponent.prototype, "src", {
        get: function () { return this._src; },
        set: /**
           * The URL of the image to load.
           */
        function (imageUrl) {
            this._src = imageUrl;
            this.setImage(this._src);
        },
        enumerable: true,
        configurable: true
    });
    ;
    ImgZoomerComponent.prototype.ngOnInit = function () {
        if (!this.src) {
            /*** TODO ***/
        }
    };
    /**
     * Set the image to be displayed
     * Creates the DIV and IMG elements and set their attributes
     * @param imageUrl {string} image src
     */
    /**
       * Set the image to be displayed
       * Creates the DIV and IMG elements and set their attributes
       * @param imageUrl {string} image src
       */
    ImgZoomerComponent.prototype.setImage = /**
       * Set the image to be displayed
       * Creates the DIV and IMG elements and set their attributes
       * @param imageUrl {string} image src
       */
    function (imageUrl) {
        var _this = this;
        if (!this.imageElement) {
            this.containerElement = this.renderer.createElement("div");
            this.imageElement = this.renderer.createElement('img');
            this.renderer.appendChild(this.containerElement, this.imageElement);
            this.renderer.appendChild(this._element.nativeElement, this.containerElement);
            this.gesture = new Gesture(this.imageElement);
            this.gesture.listen();
            this.gesture.on('doubletap', function () {
                _this.transforms = [];
                _this.nextScale += 1;
                if (_this.nextScale >= 4)
                    _this.nextScale = 1;
                _this.transforms.push('scale(' + _this.nextScale + ')');
                _this.transforms.push('translate(' + _this.currentX + 'px,' + _this.currentY + 'px)');
                _this.containerElement.style.transform = _this.transforms.join(' ');
            });
            this.gesture.on("pinch", function (ev) {
                _this.transforms = [];
                _this.currentScale = _this.nextScale * ev.scale;
                _this.currentX = _this.nextX + (ev.deltaX / _this.currentScale);
                _this.currentY = _this.nextY + (ev.deltaY / _this.currentScale);
                if (_this.currentScale < 1) {
                    _this.currentScale = 1;
                    _this.currentX = 0;
                    _this.currentY = 0;
                }
                _this.transforms.push('scale(' + _this.currentScale + ')');
                _this.transforms.push('translate(' + _this.currentX + 'px,' + _this.currentY + 'px)');
                _this.containerElement.style.transform = _this.transforms.join(' ');
            });
            this.gesture.on("pinchend", function () {
                _this.nextScale = _this.currentScale;
                _this.nextX = _this.currentX;
                _this.nextY = _this.currentY;
            });
            this.gesture.on("panend", function () {
                _this.nextScale = _this.currentScale;
                _this.nextX = _this.currentX;
                _this.nextY = _this.currentY;
            });
            this.gesture.on("pan", function (ev) {
                _this.transforms = [];
                _this.currentScale = _this.nextScale * ev.scale;
                _this.currentX = _this.nextX + (ev.deltaX / _this.currentScale);
                _this.currentY = _this.nextY + (ev.deltaY / _this.currentScale);
                if (_this.currentScale < 1) {
                    _this.currentScale = 1;
                    _this.currentX = 0;
                    _this.currentY = 0;
                }
                _this.transforms.push('scale(' + _this.currentScale + ')');
                _this.transforms.push('translate(' + _this.currentX + 'px,' + _this.currentY + 'px)');
                _this.containerElement.style.transform = _this.transforms.join(' ');
            });
        }
        this.renderer.setAttribute(this.imageElement, 'src', imageUrl);
        this.renderer.setStyle(this.imageElement, 'width', this.width);
        this.renderer.setAttribute(this.imageElement, 'class', "image");
        this.renderer.setAttribute(this.containerElement, 'class', "container");
        this.imgAttributes.forEach(function (attribute) {
            _this.renderer.setAttribute(_this.imageElement, attribute.element, attribute.value);
        });
    };
    ImgZoomerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'img-zoomer',
                    template: "\n    <ng-content></ng-content>\n  ",
                    styles: [
                        ".container {\n      position: relative;\n      height: 100%;\n      width: 100%;\n    }",
                        ".image {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n    }"
                    ],
                },] },
    ];
    /** @nocollapse */
    ImgZoomerComponent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: Renderer2, },
    ]; };
    ImgZoomerComponent.propDecorators = {
        "imgAttributes": [{ type: Input, args: ['imgAttributes',] },],
        "width": [{ type: Input },],
        "load": [{ type: Output },],
        "src": [{ type: Input },],
    };
    return ImgZoomerComponent;
}());
export { ImgZoomerComponent };
//# sourceMappingURL=img-zoomer.js.map