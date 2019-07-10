import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from 'environments/environment';

import { AppModule } from './app/app.module';

if (environment.production) {
  enableProdMode();
}

document.addEventListener('DOMContentLoaded', () => {
     platformBrowserDynamic()
  .bootstrapModule(AppModule)
  // tslint:disable-next-line:no-console
  .catch((err) => console.log(err));
   });
