import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

declare var window: any;

@Injectable()
export class AppInitService {
  // This is the method you want to call at bootstrap
  // Important: It should return a Promise
  constructor(private httpClient: HttpClient) {}
  public init() {
    return this.httpClient
      .get('//localhost:4200/assets/app-config.json')
      .pipe(
        map((config) => {
          window.config = config;
          return config;
        })
      )
      .toPromise();
  }
}
