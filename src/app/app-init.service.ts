import { Injectable } from '@angular/core';
import fetch from 'node-fetch';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

declare var window: any;

@Injectable()
export class AppInitService {
  // This is the method you want to call at bootstrap
  // Important: It should return a Promise
  public init() {
    return from(
      fetch('assets/app-config.json').then((response) => {
        return response.json();
      })
    )
      .pipe(
        map((config) => {
          window.config = config;
          return config;
        })
      )
      .toPromise();
  }
}
