/*
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { AppState } from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  template: `
    <md-toolbar>
      Luncher

      <md-toolbar-row>
        <nav md-tab-nav-bar>
          <a md-tab-link [routerLink]=" ['./'] "
            routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
            Index
          </a>
          <a md-tab-link [routerLink]=" ['./home'] "
            routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
            Home
          </a>
          <a md-tab-link [routerLink]=" ['./detail'] "
            routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
            Detail
          </a>
          <a md-tab-link [routerLink]=" ['./about'] "
            routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
            About
          </a>
          <a md-tab-link [routerLink]=" ['./users'] "
            routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
            Users
          </a>
        </nav>
      </md-toolbar-row>
    </md-toolbar>

    <main>
      <router-outlet></router-outlet>
    </main>

    <pre class="app-state">this.appState.state = {{ appState.state | json }}</pre>

    <footer>
    </footer>
  `
})
export class AppComponent implements OnInit {
  public name = 'Angular 2 Webpack Starter';

  constructor(
    public appState: AppState
  ) {}

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}
