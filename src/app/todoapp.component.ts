import { Component } from '@angular/core';
import {
  ROUTER_DIRECTIVES,
  ROUTER_PROVIDERS,
  Router,
  Routes
} from '@angular/router';

import { TodosComponent } from './+todos';

@Component({
  moduleId: module.id,
  selector: 'todoapp',
  templateUrl: 'todoapp.component.html',
  styleUrls: ['todoapp.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  { path: '/todos', component: TodosComponent }
])
export class TodoAppComponent {

  constructor(private router: Router) { }
}
