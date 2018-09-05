import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the TodolistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-todolist',
  templateUrl: 'todolist.html',
})
export class TodolistPage {

  constructor(public storage: Storage, public navCtrl: NavController, public navParams: NavParams) {
    this.storage.set('name', 'bob');

    this.storage.get('name').then((value) => {
      console.log(value)
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TodolistPage');
  }

}
