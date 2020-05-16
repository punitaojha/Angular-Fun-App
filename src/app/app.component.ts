import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>
    Welcome to {{ title }}!
  </h1>
  <app-input-button-unit></app-input-button-unit>
  
   <ul>
    <li *ngFor="let todoItem of todoList">
      app-to-do-todoItem
    </li>
  </ul>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';
  todoList = [{
    'title':'Install NodeJS!'
  },{
    'title':'Install Angular CLI'
  },{
    'title': 'Create New App'
  },{
    'title': 'Serve App'
  },{
    'title': 'Develop App'
  },
  {
    'title':'Deploy App'
  }]
}
