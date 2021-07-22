import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[] = [];
  // todos: Todo[] = [
  //   new Todo("XYZ", false),
  //   new Todo("Ram", true),
  //   new Todo("andrew", true)
  // ];
  constructor() { }

  ngOnInit(): void {
      this.todos = [
      new Todo("John", false),
      new Todo("Ram", true),
      new Todo("andrew", true)
    ]
  }

}

