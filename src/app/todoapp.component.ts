import { Component } from '@angular/core';

import { Todo } from './shared';

@Component({
  moduleId: module.id,
  selector: 'todoapp-app',
  templateUrl: 'todoapp.component.html',
  styleUrls: ['todoapp.component.css']
})
export class TodoappAppComponent {
  todos: Array<Todo> = [];
  newTodoTitle: string = '';

  addTodo() {
    if (this.newTodoTitle.length) {
      this.todos.push(new Todo(this.newTodoTitle));
      this.newTodoTitle = '';
    }
  }
}
