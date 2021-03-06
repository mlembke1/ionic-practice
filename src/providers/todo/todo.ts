import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'

/*
  Generated class for the TodoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TodoProvider {
  private todos = []

  constructor(public http: Http) {
    console.log('Hello TodoProvider Provider');
  }

  getTodos(){
    return this.todos
  }

  addTodo(todo){
    this.todos.push(todo)
  }

}
