import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-comp',
  templateUrl: './test-comp.component.html',
  styleUrls: ['./test-comp.component.css']
})
export class TestCompComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let viewMode = 'map1';
  let courses = [1];
  let courseList = [
    { id: 1, name:'course 1'},
    { id: 2, name:'course 2'},
    { id: 3, name:'course 3'}
  ];
  }

}
