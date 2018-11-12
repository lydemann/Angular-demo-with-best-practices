import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  template: '',
})
export class AddTodoComponentMock implements OnInit {

  public isLoading = false;

  @Input()
  public currentTODO;

  constructor() { }

  ngOnInit() { }

  save() {
  }
}
