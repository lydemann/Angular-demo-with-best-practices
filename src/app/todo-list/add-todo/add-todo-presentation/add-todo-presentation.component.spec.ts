/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddTodoPresentationComponent } from './add-todo-presentation.component';

describe('AddTodoPresentationComponent', () => {
  let component: AddTodoPresentationComponent;
  let fixture: ComponentFixture<AddTodoPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddTodoPresentationComponent]
    })
      .overrideTemplate(AddTodoPresentationComponent, '')
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTodoPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
