import { Component, OnInit } from '@angular/core';

import { TodoComponent } from './todo';
import { Todo, TodoService, FilterPipe } from './shared';

@Component({
  moduleId: module.id,
  selector: 'todoapp-app',
  templateUrl: 'todoapp.component.html',
  styleUrls: ['todoapp.component.css'],
  directives: [TodoComponent],
  providers: [TodoService],
  pipes: [FilterPipe]
})
export class TodoappAppComponent implements OnInit {
  newTodoTitle: string = '';
  filterBy: string;

  constructor(public todoService: TodoService) { }

  ngOnInit() {
    this.filterBy = 'all';
  }

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
