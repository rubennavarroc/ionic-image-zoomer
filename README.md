[![npm](https://img.shields.io/npm/l/ionic-image-zoomer.svg)](https://www.npmjs.com/package/ionic-image-zoomer/)
[![npm](https://img.shields.io/npm/dt/ionic-image-zoomer.svg)](https://www.npmjs.com/package/ionic-image-zoomer)
[![npm](https://img.shields.io/npm/dm/ionic-image-zoomer.svg)](https://www.npmjs.com/package/ionic-image-zoomer)

# Ionic Image Zoomer
**Ionic** Module that enables pinching, panning and scaling images.

## Installation

#### 1. Install the NPM Package
```
npm install --save ionic-image-zoomer
```
#### 3. Import `IonicImageZoomer` module

**Add `IonicImageZoomer.forRoot()` in your app's root module**
```typescript
import { IonicImageZoomer } from 'ionic-image-zoomer';

// import the module
@NgModule({
  ...
  imports: [
    IonicImageZoomer.forRoot()
  ]
})
export class AppModule {}
```


# Usage

## Basic Usage
This HTML code demonstrates basic usage of this module:
```html
<img-zoomer [src]="'https://path.to/my/image.jpg'"></img-loader>
```

## Contribution
- **Having an issue**? or looking for support? [Open an issue](https://github.com/rubennavarroc/ionic-image-zoomer/issues/new) and we will get you the help you need.
- Got a **new feature or a bug fix**? Fork the repo, make your changes, and submit a pull request.

## Support this project
If you find this project useful, please star the repo to let people know that it's reliable. Also, share it with friends and colleagues that might find this useful as well. Thank you :smile:
