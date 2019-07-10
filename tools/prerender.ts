import { renderModuleFactory } from '@angular/platform-server';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';
import { writeFileSync } from 'fs';
import 'reflect-metadata';
import 'zone.js/dist/zone-node';
import {
  AppServerModuleNgFactory,
  LAZY_MODULE_MAP
} from '../dist/Angular-demo-with-best-practices-server/main';

renderModuleFactory(AppServerModuleNgFactory, {
  document: '<app-root></app-root>',
  url: '/',
  extraProviders: [provideModuleMap(LAZY_MODULE_MAP)]
})
  .then((html) => {
    // tslint:disable-next-line:no-console
    console.log('Pre-rendering successful, saving prerender.html');
    writeFileSync('./prerender.html', html);
  })
  .catch((error) => {
    // tslint:disable-next-line:no-console
    console.error('Error occurred:', error);
  });
