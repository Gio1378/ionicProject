import { TodolistPage } from './../pages/todolist/todolist';
import { TodolistformPage } from './../pages/todolistform/todolistform';
import { MemoryPage } from './../pages/memory/memory';
import { CapitalizePipe } from './../pipes/capitalize/capitalize';
import { AnimalsPage } from './../pages/animals/animals';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FormPage } from '../pages/form/form';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FormPage,
    AnimalsPage,
    CapitalizePipe,
    MemoryPage,
    TodolistformPage,
    TodolistPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FormPage,
    AnimalsPage,
    MemoryPage,
    TodolistformPage,
    TodolistPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
