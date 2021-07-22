import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[] = [];
  inputTodo:string = "";

  // todos: Todo[] = [
  //   new Todo("XYZ", false),
  //   new Todo("Ram", true),
  //   new Todo("andrew", true)
  // ];

  constructor() { }

  ngOnInit(): void {
      this.todos = [
      new Todo("Learn AngularJs", false),
      new Todo("Learn Typescript", true),
      new Todo("Learn React", true)
    ]
  }

  //method to mark a task as completed or not completed 
  toggleDone(id:number){
    this.todos.map((v,i) => {
      console.log(v)
       if(i == id) v.completed = !v.completed  // If a task's completed is true then set it to false and vice versa
       return v;
    })
  }

  deleteTodo(id:number) {
    this.todos = this.todos.filter((v,i) => i !== id);
  }

  addTodo() {
    this.todos.push({
      task: this.inputTodo, 
      completed: false
    })
    this.inputTodo = ""  // Set input field to empty after the task is added to the list
  }

}