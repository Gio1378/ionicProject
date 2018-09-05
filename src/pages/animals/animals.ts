import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the AnimalsPage page.
 *
 * See https:/imgs/ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-animals',
  templateUrl: 'animals.html',
})
export class AnimalsPage {

  public animals = [
    {
      'title': 'Vache',
      'image': '/imgs/animals/cow-icon.png',
      'desc': 'Meugle',
      'file': '/sounds/cow.mp3',
      'playing': false
    },
    {
      'title': 'Dauphin',
      'image': '/imgs/animals/dolphin-icon.png',
      'desc': 'Siffle',
      'file': '/sounds/dolphin.mp3',
      'playing': false
    },
    {
      'title': 'Grenouille',
      'image': '/imgs/animals/frog-icon.png',
      'desc': 'Coasse',
      'file': '/sounds/frog.mp3',
      'playing': false
    },
    {
      'title': 'Oiseau',
      'image': '/imgs/animals/bird-icon.png',
      'desc': 'Chante',
      'file': '/sounds/bird.mp3',
      'playing': false
    },
    {
      'title': 'Cochon',
      'image': '/imgs/animals/pig-icon.png',
      'desc': 'Grogne',
      'file': '/sounds/pig.mp3',
      'playing': false
    },
    {
      'title': 'Chien',
      'image': '/imgs/animals/puppy-icon.png',
      'desc': 'Aboie',
      'file': '/sounds/dog.mp3',
      'playing': false
    },
    {
      'title': 'Chat',
      'image': '/imgs/animals/black-cat-icon.png',
      'desc': 'Miaule',
      'file': '/sounds/cat.mp3',
      'playing': false
    },
    {
      'title': 'Cheval',
      'image': '/imgs/animals/horse-icon.png',
      'desc': 'Hennit',
      'file': '/sounds/horse.wav',
      'playing': false
    },
    {
      'title': 'Ane',
      'image': '/imgs/animals/donkey-icon.png',
      'desc': 'Brait',
      'file': '/sounds/donkey.wav',
      'playing': false
    }
  ];

  public randomSound: string;

  private audio: any;
  private currentAnimalIndex;
  private countTry: number = 1;
  public buttonSwitch = false;
  public reorderName: string ="Réordonner";
  public hiddenElement = true;

  public now = new Date();

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnimalsPage');
  }

  playSound() {
    let animalsLen = (this.animals.length - 1)
    let index = (Math.random() * animalsLen).toFixed();
    this.randomSound = this.animals[index].file;

    if (this.audio && (this.audio.currentTime != this.audio.duration)) {
      this.audio.pause();
      this.audio = null;
    }//Eviter de mixer les sons quand on clique plusieurs fois dessuite, il ne faut pas oublier de déclarer la variable en attribut de la classe
    this.audio = new Audio("assets" + this.randomSound);
    this.audio.load(); //permet de mettre les sont en memoire pour réduire le délai de réponse en mode distant
    this.audio.play();
    this.currentAnimalIndex = index;
    this.countTry = 1;
  }

  playGame(indexHtml) {
    if (this.currentAnimalIndex != null)
      if (this.animals[this.currentAnimalIndex].title == indexHtml) {
        let toast = this.toastCtrl.create({
          message: "Bravo tu as gagné en " + this.countTry + " coup(s)",
          duration: 1500,
          position: "bottom"
        }).present();
        this.currentAnimalIndex = null;
      } else {
        let toast = this.toastCtrl.create({
          message: "Dommage, essaie encore",
          duration: 1500,
          position: "bottom"
        }).present();
        this.countTry++;

      }
  }
  reorderItems(event) {
    let item = this.animals[event.from]; //récupère l'élément cliqué
    this.animals.splice(event.from, 1);//permet de supprimer l'elment de l'évement event.from une position de départ et du nombre à supprimer
    this.animals.splice(event.to, 0, item);//permet d'ajouter l'élément cliqué à la position finale de l'évement event.to.
  }

  deleteAnimal(pos){
    this.animals.splice(pos,1);

  }
}

