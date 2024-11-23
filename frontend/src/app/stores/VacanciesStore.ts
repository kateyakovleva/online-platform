import { Injectable } from "@angular/core";
import { AppClient } from "../services/AppClient";
import { IVacancies, IVacancy } from "../types/vacancies";

@Injectable( {
  providedIn: 'root'
} )
export class VacanciesStore {
  constructor(
    private http: AppClient,
  ) {
  }

  getVacancies( params?: any ) {
    return this.http.get<IVacancies>( 'vacancies', params )
  }

  getVacancy( id: number | string ) {
    return this.http.get<IVacancy>( `vacancies/${ id }` )
  }

  getCompanyVacancies( params?: any ) {
    return this.http.get<IVacancies>( 'profile/vacancies', params )
  }

  getCompanyVacancy( id: string | number ) {
    return this.http.get<IVacancy>( `profile/vacancies/${ id }` )
  }

  deleteVacancy( id: string | number ) {
    return this.http.delete( `profile/vacancies/${ id }` )
  }
}
