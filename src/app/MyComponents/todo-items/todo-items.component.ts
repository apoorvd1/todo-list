import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from "../../Todo";

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {

  @Input()
  todo: Todo = new Todo;

  @Output()
  todoDelete: EventEmitter<Todo> = new EventEmitter<Todo>();
  todoCheckBox: EventEmitter<Todo> = new EventEmitter<Todo>();
  constructor() { }

  ngOnInit(): void {
  }

  onClick(todo : Todo) {
    this.todoDelete.emit(todo)
    console.log("On click trigger")
  }

  onCheckBoxClick(todo:Todo) {
    this.todoCheckBox.emit(todo)
  }

}
