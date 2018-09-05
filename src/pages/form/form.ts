import { MemoryPage } from './../memory/memory';
import { CapitalizePipe } from './../../pipes/capitalize/capitalize';
import { AnimalsPage } from './../animals/animals';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the FormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-form',
  templateUrl: 'form.html',
})
export class FormPage {

  public name: string = "giovanni nsele";

  public person = {
    name: "Gio",
    email: "gio13k@infonie.fr",
    age: 22
  }; //objet JSON compatible JS

  public fruits = [
    "pommes", "poires", "bananes"
  ];//objet JSON compatible JS

  public hiddenElement = true;
  public colorButton = "";
  public textButton = "afficher le nom";

  public inputValues: number;
  public sizeInImperialMesure: string;

  public newFruit;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormPage');
  }

  doClick() {
    //avec une ternaire
    this.hiddenElement = !this.hiddenElement;

    this.colorButton = !this.hiddenElement ? "colorButton" : "";
    this.textButton = !this.hiddenElement ? "Masquer le nom" : "afficher le nom";

    //avec if 
    /*
    if (!this.hiddenElement) {
      this.colorButton = "colorButton";
      this.textButton = "";
    }else{
      this.colorButton = "";
      this.textButton = "afficher le nom";
    }*/

  }

  resultFeetInches() {
    let resultFeet = Math.floor(this.inputValues / 0.3048);
    let resultInches = (this.inputValues / 0.3048 % 1 * 12).toFixed(2);//modulo renvois le reste de la division a/b exemple 15%6 = 3 toFixed(n) renvoie n chiffre après la virgule
    this.sizeInImperialMesure = " Vous mesurez " + resultFeet + " pieds  et " + resultInches + " pouces";
  }

  newFruitPush() {

    if (this.newFruit)
      this.fruits.push(this.newFruit);
    this.newFruit = "";// permet de mettre à vide le champs renseigné
  }

  goToHomePage() {
    this.navCtrl.push(HomePage);
  }

  goToAnimalsPage() {
    this.navCtrl.push(AnimalsPage);
  }

  goToMemoryPage(){
    this.navCtrl.push(MemoryPage)
  }
}
