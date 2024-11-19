import {  inject, Injectable } from '@angular/core';
import { Cv } from '../model/cv';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { APP_API } from '../../config/app-api.config';
import { APP_CONSTANTES } from '../../config/app-constantes.config';
import { AuthService } from '../../auth/service/auth.service';



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
   * Le subject du flux des cvs sélectionnés
   */
  #selectCvSubject$ = new Subject<Cv>();
  /**
   * Le flux des cvs sélectionnés
   */
  selectCv$ = this.#selectCvSubject$.asObservable();

  http = inject(HttpClient);
  authService = inject(AuthService);
  /**
   *
   * Retourne la liste des cvs
   * @returns Cv[]
   */
  getFakeCvs(): Cv[] {
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
    return this.#cvs.find((cv) => cv.id == id) ?? null;
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

  /**
   * Ajouter un cv au flux des cvs sélectionnés
   * @param cv Le cv à ajouter au flux
   */
  selectCv(cv: Cv): void {
    this.#selectCvSubject$.next(cv);
  }

  getCvs(): Observable<Cv[]> {
    return this.http.get<Cv[]>(APP_API.cv);
  }
  getCvById(id: number): Observable<Cv> {
    return this.http.get<Cv>(APP_API.cv + id);
  }
  deleteCvById(id: number): Observable<{ count: number }> {
    //const params = new HttpParams().set(APP_CONSTANTES.tokenParamName, this.authService.getToken());
    return this.http.delete<{ count: number }>(APP_API.cv + id);
  }
  getCvsByName(name: string): Observable<Cv[]> {
    const params = new HttpParams().set(
      'filter',
      `{"where":{"name":{"like":"%${name}%"}}}`
    );
    return this.http.get<Cv[]>(APP_API.cv, { params });
  }
  getCvsByProperty(property: string, value: string): Observable<Cv[]> {
    const params = new HttpParams().set(
      'filter',
      `{"where":{"${property}":"${value}"}}`
    );
    return this.http.get<Cv[]>(APP_API.cv, { params });
  }
  addCv(cv: Cv): Observable<Cv> {
    return this.http.post<Cv>(APP_API.cv, cv);
  }
}
