import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  inject,
  it,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

import { TodoComponent } from './todo.component';

describe('Component: Todo', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [TodoComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([TodoComponent],
    (component: TodoComponent) => {
      expect(component).toBeTruthy();
    }));

  it('should create the component', inject([], () => {
    return builder.createAsync(TodoComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(TodoComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <td-todo></td-todo>
  `,
  directives: [TodoComponent]
})
class TodoComponentTestController {
}

