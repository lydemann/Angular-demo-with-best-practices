import { Pipe, PipeTransform } from '@angular/core';

import { TODOItem } from '@app/shared/models/todo-item';

@Pipe({
  name: 'duedateTodayCount'
})
export class DuedateTodayCountPipe implements PipeTransform {
  public transform(todoItems: TODOItem[], args?: any): any {
    return todoItems.filter((todo) => this.isToday(new Date(todo.dueDate))).length;
  }

  private isToday(someDate) {
    const today = new Date();
    return (
      someDate.getDate() === today.getDate() &&
      someDate.getMonth() === today.getMonth() &&
      someDate.getFullYear() === today.getFullYear()
    );
  }
}
