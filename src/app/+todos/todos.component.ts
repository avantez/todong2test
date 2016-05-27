import { Component } from '@angular/core';
import {
  RouteSegment,
  ROUTER_DIRECTIVES
} from '@angular/router';

import { Todo, TodoService, FilterPipe } from './shared';
import { TodoComponent } from './todo';

@Component({
  moduleId: module.id,
  selector: 'td-todos',
  templateUrl: 'todos.component.html',
  styleUrls: ['todos.component.css'],
  directives: [ROUTER_DIRECTIVES, TodoComponent],
  providers: [TodoService],
  pipes: [FilterPipe]
})
export class TodosComponent {

  newTodoTitle: string = '';
  filterBy: string;

  constructor(public todoService: TodoService, routeSegment: RouteSegment) {
    const filter = routeSegment.getParam('filter');
    if (filter && (filter == 'active' || filter == 'completed')) {
      this.filterBy = filter;
    }else {
      this.filterBy = 'all';
    }
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
