import {Component} from "@angular/core";
/**
 * Created by lv-wei on 2017-02-23.
 */

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
             <nav>
               <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
               <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
              </nav>
              <router-outlet></router-outlet>
            `,
  styleUrls: ['app.component.css']
})

export class AppComponent {

  title = 'Tour of Heroes ';
}
