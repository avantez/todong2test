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

  toogleComplete(todo: Todo, value: boolean) {
    todo.isCompleted = value;
  }

  removeTodo(todo: Todo) {
    let index = this.todos.indexOf(todo);
    if (index > -1) {
      this.todos.splice(index, 1);
    }
  }

  startEditingTodo(todo: Todo) {
    todo.editMode = true;
  }

  updateTodo(todo: Todo, value: string) {
    todo.title = value;
    todo.editMode = false;
  }

  cancelEditingTodo(todo: Todo) {
    console.log(todo)
    todo.editMode = false;
  }
}
