import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practiseapp';
  viewMode = 'map1';
  courses = [1];
  courseList = [
    { id: 1, name:'course 1'},
    { id: 2, name:'course 2'},
    { id: 3, name:'course 3'}
  ];
}
