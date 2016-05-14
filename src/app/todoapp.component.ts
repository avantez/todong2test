import { Component } from '@angular/core';

import { TodoComponent } from './todo';
import { Todo } from './shared';

@Component({
  moduleId: module.id,
  selector: 'todoapp-app',
  templateUrl: 'todoapp.component.html',
  styleUrls: ['todoapp.component.css'],
  directives: [TodoComponent]
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

  removeTodo(todo: Todo) {
    let index = this.todos.indexOf(todo);
    if (index > -1) {
      this.todos.splice(index, 1);
    }
  }
}
