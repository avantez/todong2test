import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { TodoappAppComponent } from '../app/todoapp.component';

beforeEachProviders(() => [TodoappAppComponent]);

describe('App: Todoapp', () => {
  it('should create the app',
      inject([TodoappAppComponent], (app: TodoappAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have an empty array of todos',
      inject([TodoappAppComponent], (app: TodoappAppComponent) => {
    expect(app.todoService).toBeTruthy();
    expect(app.todoService.todos.length).toEqual(0);
  }));
});
