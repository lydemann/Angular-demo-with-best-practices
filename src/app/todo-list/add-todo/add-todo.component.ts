import { Component, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TODOItem } from '@app/shared/models/todo-item';
import { AddTodoService } from './add-todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
  viewProviders: [AddTodoService]
})
export class AddTodoComponent implements OnInit {
  @Input()
  public isLoading = false;

  public get currentTODO(): TODOItem {
    return this.addTodoService.currentTODO;
  }
  @Input()
  public set currentTODO(todo: TODOItem) {
    this.addTodoService.currentTODO = todo;
  }

  @Output()
  public get todoItemEdit() {
    return this.addTodoService.todoItemEdit;
  }

  @Output()
  public get todoItemCreate() {
    return this.addTodoService.todoItemCreate;
  }

  constructor(private addTodoService: AddTodoService) {}

  public ngOnInit() {}

  public save(form: NgForm) {
    this.addTodoService.save(form);
  }
}
