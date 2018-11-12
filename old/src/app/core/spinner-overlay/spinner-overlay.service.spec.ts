/* tslint:disable:no-unused-variable */

import { Overlay } from '@angular/cdk/overlay';
import { inject, TestBed } from '@angular/core/testing';
import { SpinnerOverlayService } from '@app/core/spinner-overlay/spinner-overlay.service';

describe('Service: SpinnerOverlay', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpinnerOverlayService, Overlay]
    });
  });

  it(
    'should ...',
    inject([SpinnerOverlayService], (service: SpinnerOverlayService) => {
      expect(service).toBeTruthy();
    })
  );
});
