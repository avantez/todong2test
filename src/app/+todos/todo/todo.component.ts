import {
  Component,
  EventEmitter,
  Input,
  Output
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
  @Output() changed: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() removing: EventEmitter<Todo> = new EventEmitter<Todo>();

  toogleComplete() {
    this.todo.isCompleted = !this.todo.isCompleted;
    this.changed.emit(this.todo);
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
    this.changed.emit(this.todo);
  }

  remove() {
    this.removing.emit(this.todo);
  }
}
