/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SpinnerOverlayWrapperComponent } from '@app/shared/spinner-overlay-wrapper/spinner-overlay-wrapper.component';

describe('SpinnerOverlayWrapperComponent', () => {
  let component: SpinnerOverlayWrapperComponent;
  let fixture: ComponentFixture<SpinnerOverlayWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinnerOverlayWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerOverlayWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
