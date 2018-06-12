import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private alertController: AlertController) {

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
            text: "Add Todo"
          }
        ]
      })
      addTodoAlert.present()
  }
}
