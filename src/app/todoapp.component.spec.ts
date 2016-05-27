import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';

import { TodoAppComponent } from '../app/todoapp.component';

beforeEachProviders(() => [TodoAppComponent]);

describe('App: Todoapp', () => {
  it('should create the app',
      inject([TodoAppComponent], (app: TodoAppComponent) => {
    expect(app).toBeTruthy();
  }));
});
