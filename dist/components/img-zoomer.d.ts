import { ElementRef, EventEmitter, OnInit, Renderer2 } from '@angular/core';
import { Gesture } from "ionic-angular";
export interface ImageAttribute {
    element: string;
    value: string;
}
export declare class ImgZoomerComponent implements OnInit {
    private _element;
    private renderer;
    imgAttributes: ImageAttribute[];
    width: string;
    load: EventEmitter<ImgZoomerComponent>;
    gesture: Gesture;
    imageElement: HTMLElement;
    containerElement: HTMLElement;
    transforms: any[];
    nextScale: number;
    currentScale: any;
    nextX: number;
    nextY: number;
    currentX: any;
    currentY: any;
    constructor(_element: ElementRef, renderer: Renderer2);
    private _src;
    /**
     * The URL of the image to load.
     */
    src: string;
    ngOnInit(): void;
    /**
     * Set the image to be displayed
     * Creates the DIV and IMG elements and set their attributes
     * @param imageUrl {string} image src
     */
    private setImage(imageUrl);
}
