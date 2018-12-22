/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SpinnerOverlayWrapperComponent } from '@app/shared/spinner-overlay-wrapper/spinner-overlay-wrapper.component';
import { SpinnerModule } from '@shared-lib/spinner/spinner.module';

describe('SpinnerOverlayWrapperComponent', () => {
  let component: SpinnerOverlayWrapperComponent;
  let fixture: ComponentFixture<SpinnerOverlayWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SpinnerOverlayWrapperComponent],
      imports: [SpinnerModule]
    }).compileComponents();
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
