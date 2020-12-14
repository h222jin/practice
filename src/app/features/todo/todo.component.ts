import {ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Todo} from "@app/features/todo/todo";
import {TodoService} from "@app/features/todo/TodoService";

@Component({
  selector: 'ea-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent implements OnInit {

  @ViewChild('todoTitleInput') todoTitleInput: ElementRef;

  @Input() public state: any;

  // optimization, rerenders only todos that change instead of the entire list of todos
  todosTrackFn = (i, todo) => todo.id;

  public newTodo: Todo;

  public states : Array<any>;
  public items: Array<Todo> = [];


  constructor(
      private todoService: TodoService,
      private el: ElementRef
  ) {
    this.states = this.todoService.states;
  }

  ngOnInit(): void {

    this.todoService.subject.subscribe((todos: Array<Todo>)=>{
      this.setItems(todos);
    });

    this.setItems(this.todoService.todos)

  }

  setItems(todos: Array<Todo>){
    this.items = todos.filter(it => it.state == this.state)
  }


  toggleAdd() {
    if (this.newTodo) {
      this.newTodo = null
    } else {
      this.newTodo = new Todo();
      this.newTodo.state = 'Important'

    }
  }

  createTodo() {
    this.todoService.createTodo(this.newTodo);
    console.log('new todo :: ', this.newTodo);
    this.newTodo = null
  }
}
