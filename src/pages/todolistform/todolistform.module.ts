import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TodolistformPage } from './todolistform';

@NgModule({
  declarations: [
    TodolistformPage,
  ],
  imports: [
    IonicPageModule.forChild(TodolistformPage),
  ],
})
export class TodolistformPageModule {}
