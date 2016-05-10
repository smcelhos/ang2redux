import {bootstrap}    from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import {provideStore} from '@ngrx/store';
import {clock, people} from './reducers';

bootstrap(AppComponent, [provideStore({clock, people})]).then(
  () => console.log('app running'),
  (err) => console.log(err)
);
