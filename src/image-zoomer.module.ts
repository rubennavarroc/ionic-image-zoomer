import { ModuleWithProviders, NgModule } from '@angular/core';
import { IonicModule }                   from 'ionic-angular';
import { ImgZoomerComponent }            from './components/img-zoomer';

@NgModule({
  declarations: [
    ImgZoomerComponent,
  ],
  imports: [
    IonicModule
  ],
  exports: [
    ImgZoomerComponent,
  ],
})
export class IonicImageZoomer {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: IonicImageZoomer,
      providers: [],
    };
  }
}
