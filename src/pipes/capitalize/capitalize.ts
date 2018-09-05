
import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the CapitalizePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'capitalize',
})
export class CapitalizePipe implements PipeTransform {
  /**
   * Takes a value and makes it capitalize.
   */
  transform(value: string, ...args) {
    let capitalizeString: string;
    if (args[0]) {
      capitalizeString = value.split(" ").map(item => {
        return this.capitalizeWord(item);//on transfrome la chaine de caractère en tableau, on boucle avec map, à l'aide l'arrow function on va appliquer la fonction capitalize(valeur) 
      }).join(" ");// puis on regénère une chaine de caractère avec la fonciton join

    } else {
      capitalizeString = this.capitalizeWord(value)
    }
    return capitalizeString
  }
  private capitalizeWord(word) {

    return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase()
  }
}
