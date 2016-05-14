import {
  Input,
  Output,
  Component,
  EventEmitter
} from '@angular/core';

import { Todo } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'td-todo',
  templateUrl: 'todo.component.html',
  styleUrls: ['todo.component.css']
})
export class TodoComponent {
  @Input() todo: Todo;
  @Output() removing: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor() { }

  toogleComplete() {
    this.todo.isCompleted = !this.todo.isCompleted;
  }

  startEditing() {
    this.todo.editMode = true;
  }

  cancelEditing() {
    this.todo.editMode = false;
  }

  update(value: string) {
    this.todo.title = value;
    this.todo.editMode = false;
  }

  remove() {
    this.removing.emit(this.todo);
  }
}
