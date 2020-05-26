import { Component } from '@angular/core';
import Todo from 'src/models/ITodo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  public todos: Todo[] = [];

  public title: string = 'staring-with-angular';

  constructor(){
    this.todos.push(new Todo('1', 'Primeira', false));
    this.todos.push(new Todo('2', 'Segunda', false));
    this.todos.push(new Todo('3', 'terceira', true));
  }

  remove(todo: Todo){
    const index = this.todos.indexOf(todo)
    if(index !== -1){
      this.todos.splice(index, 1)
    }
  }

  markAsDone(todo: Todo){
    todo.done = true
  }

  addTodo(todo: Todo){
    this.todos.push(todo)
  }

  markAsUndone(todo: Todo){
    todo.done = false
  }
}
