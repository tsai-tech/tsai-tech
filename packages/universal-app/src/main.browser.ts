import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppBrowserModule } from './app/app.browser.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

document.addEventListener('DOMContentLoaded', () => {
  const bluredBackground = new Image();

  // TODO: css-loading-indicator

  bluredBackground.src = '/assets/blured-background.jpg';

  bluredBackground.addEventListener('load', () => {
    console.log('BluredBackground Loaded');
    platformBrowserDynamic().bootstrapModule(AppBrowserModule)
      .catch(err => console.error(err));
  });
});
