import { Component, OnInit } from '@angular/core';
import {Todo} from "../../Todo"

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.sass']
})
export class TodosComponent implements OnInit {

  todos: Todo[];
  localItem: string;
  constructor() {
    // @ts-ignore
    this.localItem = localStorage.getItem("todos")
    if(this.localItem == null) {
      this.todos = []
    } else {
      // @ts-ignore
      this.todos = JSON.parse(this.localItem);
    }


  }

  ngOnInit(): void {
  }

  deleteTodo(todo: Todo){
    console.log(todo)
    console.log("On delete trigger")
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1)
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }

  addTodo(todo: Todo){
    console.log("add todo", todo)
    this.todos.push(todo)
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }

  toggleTodo(todo: Todo){
    console.log("add todo", todo)
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }
}
