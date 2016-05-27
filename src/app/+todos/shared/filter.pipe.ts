import { Pipe, PipeTransform } from '@angular/core';

import { Todo } from './todo.model';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(todos: Array<Todo>, param: string) {
    if (param) {
      switch (param) {
        case 'active':
          return todos.filter(todo => !todo.isCompleted);
        case 'completed':
          return todos.filter(todo => todo.isCompleted);
        default:
          return todos;
      }
    }
  }
}
