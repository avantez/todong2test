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

  it('should have as title \'todoapp works!\'',
      inject([TodoappAppComponent], (app: TodoappAppComponent) => {
    expect(app.title).toEqual('todoapp works!');
  }));
});
