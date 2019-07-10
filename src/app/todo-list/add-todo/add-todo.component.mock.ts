import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  template: ''
})
// tslint:disable-next-line:component-class-suffix
export class AddTodoComponentMock {
  public isLoading = false;

  @Input()
  public currentTODO;

  public save() {}
}
