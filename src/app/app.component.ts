import { TodolistformPage } from './../pages/todolistform/todolistform';
import { TodolistPage } from './../pages/todolist/todolist';
import { MemoryPage } from './../pages/memory/memory';
import { AnimalsPage } from './../pages/animals/animals';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { FormPage } from '../pages/form/form';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = FormPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

