import {  Injectable } from '@angular/core';
import { Cv } from '../model/cv';



@Injectable({
  providedIn: 'root',
})
export class CvService {
  #cvs = [
    new Cv(1, 'sellaouti', 'aymen', 'teacher', '12324', '', 42),
    new Cv(2, 'sellaouti', 'skander', 'student', '4444', '      ', 5),
    new Cv(
      3,
      'Hedhli',
      'sana',
      'Dev',
      '55555',
      'rotating_card_profile.png',
      20
    ),
  ];

  /**
   * Retourne la liste des cvs
   * @returns Cv[]
   */
  getCvs(): Cv[] {
    return this.#cvs;
  }

  /**
   *
   * Cherche un cv avec son id dans lai liste fictive de cvs
   *
   * @param id
   * @returns Cv | null
   */
  findCvById(id: number): Cv | null {
    return this.#cvs.find(cv => cv.id == id) ?? null;
  }

  /**
   *
   * Supprime un cv s'il le trouve
   *
   * @param cv : Cv
   * @returns boolean
   */
  deleteCv(cv: Cv): boolean {
   const index = this.#cvs.indexOf(cv);
   if (index !== -1) {
     this.#cvs.splice(index, 1);
     return true;
   }
   return false;
  }
}
