import { Component } from '@angular/core';

import { TodoComponent } from './todo';
import { Todo, TodoService } from './shared';

@Component({
  moduleId: module.id,
  selector: 'todoapp-app',
  templateUrl: 'todoapp.component.html',
  styleUrls: ['todoapp.component.css'],
  directives: [TodoComponent]
})
export class TodoappAppComponent {
  newTodoTitle: string = '';

  constructor(public todoService: TodoService) { }

  addTodo() {
    if (this.newTodoTitle.length) {
      this.todoService.add(new Todo(this.newTodoTitle));
      this.newTodoTitle = '';
    }
  }

  updateTodo(todo: Todo) {
    this.todoService.update(todo);
  }

  removeTodo(todo: Todo) {
    this.todoService.remove(todo);
  }
}
