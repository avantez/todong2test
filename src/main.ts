import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { TodoappAppComponent, environment, TodoService } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(TodoappAppComponent, [ TodoService ]);
