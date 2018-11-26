/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoItemCardComponent } from './todo-item-card.component';

describe('TodoItemCardComponent', () => {
  let component: TodoItemCardComponent;
  let fixture: ComponentFixture<TodoItemCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodoItemCardComponent],
      imports: [],
      providers: []
    })
      .overrideTemplate(TodoItemCardComponent, '')
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
