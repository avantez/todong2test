import { Injectable } from '@angular/core';

import { Todo } from './todo.model';

@Injectable()
export class TodoService {
  static STORAGE_KEY = 'ng2-app';
  todos: Array<Todo>;

  constructor() {
    let persistedTodos: string = localStorage.getItem(TodoService.STORAGE_KEY);
    if (persistedTodos) {
      this.todos = JSON.parse(persistedTodos)
        .map((todoStringfied: { _title: string, isCompleted: boolean }) =>
          new Todo(todoStringfied));
    } else {
      this.todos = new Array<Todo>();
    }
  }

  persistTodos() {
    localStorage.setItem(TodoService.STORAGE_KEY, JSON.stringify(this.todos));
  }

  getAll(): Array<Todo> {
    return this.todos;
  }

  add(todo: Todo) {
    this.todos.push(todo);
    this.persistTodos();
  }

  remove(todo: Todo) {
    let index = this.todos.indexOf(todo);
    if (index > -1) {
      this.todos.splice(index, 1);
    }
    this.persistTodos();
  }

  update(todo: Todo) {
    let index = this.todos.indexOf(todo);
    if (index > -1) {
      this.todos.splice(index, 1, todo);
    }
    this.persistTodos();
  }
}
