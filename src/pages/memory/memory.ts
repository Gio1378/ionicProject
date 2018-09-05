import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the MemoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-memory',
  templateUrl: 'memory.html',

})
export class MemoryPage {

  public cards: Array<{ image: string, name: string, revealed: boolean }> = [];

  private numberOfCards: number = 8;

  private questionMarkUrl = "assets/imgs/question-mark.png";
  public randomCard: string;
  public cardHiddingTimeout: number = 1000;
  public countRevealed: number = 0;
  public countTry: number = 0;

  public previousCard;
  private previousPosition;
  private isShowingCard: boolean = false;

  public buttonPlay: string = "jouer";


  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
    this.generateCards();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MemoryPage');
  }

  private generateCards() {
    this.cards = new Array<{ image: string, name: string, revealed: boolean }>();
    for (let i = 0; i < this.numberOfCards; i++) {
      let imgUrl = "assets/imgs/cards/" + i + ".png";
      this.cards.push({ image: this.questionMarkUrl, name: imgUrl, revealed: false });
      this.cards.push({ image: this.questionMarkUrl, name: imgUrl, revealed: false });
    }
    this.shuffleCards();
    this.countRevealed = 0;
    this.countTry = 0;
    this.previousCard = null;
    this.previousPosition = null;
  }

  shuffleCards(): any {
    //with sort()
    // this.cards.sort(function () { return 0.5 - Math.random() });

    // with permutation
    this.cards.forEach((item, index, deck) => {// une arrow function fait référence au contexte glogbal et non pas à son parent
      let newPosition = Math.ceil(Math.random() * (this.cards.length - 1));
      deck[index] = deck[newPosition];
      deck[newPosition] = item;
    });
  }

  flipCard(card, pos) {
    if (!card.revealed && !this.isShowingCard) {
      card.image = card.name;
      card.revealed = true;
      this.isShowingCard = true;
      this.checkCard(card, pos);
      this.countTry++;
    }
  }

  private checkCard(card: any, pos: any) {

    if (this.previousCard && this.previousCard.name == card.name && pos != this.previousPosition) {
      this.previousCard.image = card.name;
      this.previousCard.revealed = true;
      this.isShowingCard = false;
      this.countRevealed++;

    } else {
      setTimeout(() => {
        card.image = this.questionMarkUrl;
        card.revealed = false;
        this.previousCard = card;
        this.previousPosition = pos;
        this.isShowingCard = false;
      }, this.cardHiddingTimeout);// deux variables pour setTimeout, une pour l'instruction et l'autre pour la durée.

    }
    this.victoryCheck();
  }
  victoryCheck() {
    if (this.countRevealed == this.numberOfCards) {
      let toast = this.toastCtrl.create({
        message: "Bravo tu as gagné en " + (this.countTry + 1) + " coup(s)",
        duration: 2500,
        position: "bottom"
      }).present();

    }
  }
replay(){
  this.countTry > 0? this.buttonPlay="rejouer" : this.buttonPlay = "jouer";
}
}

