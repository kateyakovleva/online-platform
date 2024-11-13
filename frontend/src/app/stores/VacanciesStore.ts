import { Injectable } from "@angular/core";
import { AppClient } from "../services/AppClient";
import { IVacancies } from "../types/vacancies";

@Injectable( {
  providedIn: 'root'
} )
export class VacanciesStore {
  constructor(
    private http: AppClient,
  ) {
  }

  getVacancies( params: any ) {
    return this.http.get<IVacancies>( 'vacancies', params )
  }
}
