import { Component, Input, OnInit } from '@angular/core';
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
  public get isLoading() {
    return this.addTodoService.isLoading;
  }

  public get currentTODO(): TODOItem {
    return this.addTodoService.currentTODO;
  }
  @Input()
  public set currentTODO(todo: TODOItem) {
    this.addTodoService.currentTODO = todo;
  }

  constructor(private addTodoService: AddTodoService) {}

  public ngOnInit() {}

  public save(form: NgForm) {
    this.addTodoService.save(form);
  }
}
