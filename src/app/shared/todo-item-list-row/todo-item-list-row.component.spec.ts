import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoItemListRowComponent } from './todo-item-list-row.component';

/* tslint:disable:no-unused-variable */

describe('TodoItemListRowComponent', () => {
  let component: TodoItemListRowComponent;
  let fixture: ComponentFixture<TodoItemListRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodoItemListRowComponent],
      imports: []
    })
      .overrideTemplate(TodoItemListRowComponent, '')
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemListRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
