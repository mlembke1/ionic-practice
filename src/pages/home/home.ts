import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { TodoProvider } from '../../providers/todo/todo'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public todos = []
  public reorderIsEnabled = false
  constructor(public navCtrl: NavController,
              private alertController: AlertController,
              private todoService: TodoProvider)
  {
    this.todos = this.todoService.getTodos()
  }

  toggleReorder(){
    this.reorderIsEnabled = !this.reorderIsEnabled
  }

  openTodoAlert(){
      let addTodoAlert = this.alertController.create({
        tite: 'Add A Todo',
        message: 'Enter Your Todo',
        inputs: [
          {
            type: "text",
            name: "addTodoInput"
          }
        ],
        buttons: [
          {
            text: "Cancel"
          },
          {
            text: "Add Todo",
            handler: (inputData) => {
              let todoText
              todoText = inputData.addTodoInput
              this.todoService.addTodo(todoText)
            }
          }
        ]
      })
      addTodoAlert.present()
  }
}
