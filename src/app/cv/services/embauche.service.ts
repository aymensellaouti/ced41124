import { Injectable } from '@angular/core';
import { Cv } from '../model/cv';


@Injectable({
  providedIn: 'root',
})
export class EmbaucheService {
  #embauchees: Cv[] = [];

  getEmbauchees(): Cv[] {
    return this.#embauchees;
  }
  /**
   *
   * Permet d'embaucher des cvs
   *
   * @param cv - le Cv à embaucher
   * @returns {boolean} return true si embauchée false sinon
   */
  embaucher(cv: Cv): boolean {
    if(!this.#embauchees.includes(cv)) {
      this.#embauchees.push(cv);
      return true;
    }
    return false;
  }
}
