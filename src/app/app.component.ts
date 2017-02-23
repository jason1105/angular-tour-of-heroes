import {Component} from "@angular/core";
/**
 * Created by lv-wei on 2017-02-23.
 */

@Component ({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
               <a routerLink="/heroes">Heroes</a>
               <a routerLink="/dashboard">Dashboard</a>
               <router-outlet></router-outlet>
            `
})

export class AppComponent {

  title = 'Tour of Heroes ';
}
