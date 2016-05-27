import { Component } from '@angular/core';
import {
  Router,
  Routes,
  ROUTER_DIRECTIVES,
  ROUTER_PROVIDERS
} from '@angular/router';

import { TodosComponent } from './+todos';

@Component({
  moduleId: module.id,
  selector: 'todoapp-app',
  templateUrl: 'todoapp.component.html',
  styleUrls: ['todoapp.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  { path: '/todos', component: TodosComponent }
])
export class TodoappAppComponent {

  constructor(private router: Router) { }
}
