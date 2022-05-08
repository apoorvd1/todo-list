import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Todo} from "../../Todo";

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.sass']
})
export class TodoAddComponent implements OnInit {
  title: string | undefined
  desc: string | undefined

  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter<Todo>()
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    const todo = {
      sno: 0,
      title: this.title,
      desc: this.desc
    }

    // @ts-ignore
    this.todoAdd.emit(todo)
  }

}
