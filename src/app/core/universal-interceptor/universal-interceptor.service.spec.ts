/* tslint:disable:no-unused-variable */

import { inject, TestBed } from '@angular/core/testing';

import { UniversalInterceptorService } from './universal-interceptor.service';

describe('Service: UniversalInterceptor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UniversalInterceptorService]
    });
  });

  it('should ...', inject([UniversalInterceptorService], (service: UniversalInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
