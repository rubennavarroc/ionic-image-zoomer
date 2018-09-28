import {Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2} from '@angular/core';

import {Gesture} from "ionic-angular";

export interface ImageAttribute {
  element: string;
  value: string;
}

@Component({
  selector: 'img-zoomer',
  template: `
    <ng-content></ng-content>
  `,
  styles: [
      `.container {
      position: relative;
      height: 100%;
      width: 100%;
    }`,
      `.image {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
    }`
  ],
})
export class ImgZoomerComponent implements OnInit {

  @Input('imgAttributes') imgAttributes: ImageAttribute[] = [];

  @Output()
  load: EventEmitter<ImgZoomerComponent> = new EventEmitter<ImgZoomerComponent>();
  gesture: Gesture;

  imageElement: HTMLElement;
  containerElement: HTMLElement;


  transforms = [];
  nextScale = 1;
  currentScale = null;

  nextX = 0;
  nextY = 0;

  currentX = null;
  currentY = null;

  constructor(private _element: ElementRef,private renderer: Renderer2) {}

  private _src: string;

  get src(): string { return this._src; }

  /**
   * The URL of the image to load.
   */
  @Input()
  set src(imageUrl: string) {
    this._src = imageUrl;
    this.setImage(this._src);
  };

  ngOnInit(): void {

    if (!this.src) {
        /*** TODO ***/
    }
  }

  /**
   * Set the image to be displayed
   * Creates the DIV and IMG elements and set their attributes
   * @param imageUrl {string} image src
   */
  private setImage(imageUrl: string): void {
    if (!this.imageElement) {
      this.containerElement = this.renderer.createElement("div");
      this.imageElement = this.renderer.createElement('img');

      this.renderer.appendChild(this.containerElement, this.imageElement);
      this.renderer.appendChild(this._element.nativeElement, this.containerElement);


      this.gesture = new Gesture(this.imageElement);

      this.gesture.listen();

      this.gesture.on('doubletap', () => {
        this.transforms = [];
        this.nextScale += 1;
        if (this.nextScale >= 4) this.nextScale = 1;
        this.transforms.push('scale(' + this.nextScale + ')');
        this.containerElement.style.transform = this.transforms.join(' ');
      });

      this.gesture.on("pinch", (ev) => {

        this.transforms = [];

        this.currentScale = this.nextScale * ev.scale;
        this.currentX = this.nextX + (ev.deltaX / this.currentScale);
        this.currentY = this.nextY + (ev.deltaY / this.currentScale);

        if (this.currentScale < 1) {
          this.currentScale = 1;
          this.currentX = 0;
          this.currentY = 0;
        }
        this.transforms.push('scale(' + this.currentScale + ')');
        this.transforms.push('translate(' + this.currentX + 'px,' + this.currentY + 'px)');
        this.containerElement.style.transform = this.transforms.join(' ');

      });


      this.gesture.on("pinchend", () => {
        this.nextScale = this.currentScale;
        this.nextX = this.currentX;
        this.nextY = this.currentY;
      });

      this.gesture.on("panend", () => {
        this.nextScale = this.currentScale;
        this.nextX = this.currentX;
        this.nextY = this.currentY;
      });


      this.gesture.on("pan", (ev) => {
        this.transforms = [];
        this.currentScale = this.nextScale * ev.scale;
        this.currentX = this.nextX + (ev.deltaX / this.currentScale);
        this.currentY = this.nextY + (ev.deltaY / this.currentScale);
        if (this.currentScale < 1) {
          this.currentScale = 1;
          this.currentX = 0;
          this.currentY = 0;
        }
        this.transforms.push('scale(' + this.currentScale + ')');
        this.transforms.push('translate(' + this.currentX + 'px,' + this.currentY + 'px)');
        this.containerElement.style.transform = this.transforms.join(' ');
      });
    }

    this.renderer.setAttribute(this.imageElement, 'src', imageUrl);
    this.renderer.setAttribute(this.imageElement, 'class', "image");
    this.renderer.setAttribute(this.containerElement, 'class', "container");

    this.imgAttributes.forEach((attribute) => {
      this.renderer.setAttribute(this.imageElement, attribute.element, attribute.value);
    });

  }
}
