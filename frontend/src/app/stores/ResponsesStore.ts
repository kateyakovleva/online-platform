import { Injectable } from "@angular/core";
import { AppClient } from "../services/AppClient";
import { IResponses } from "../types/responses";

@Injectable( {
  providedIn: 'root'
} )
export class ResponsesStore {
  constructor(
    private http: AppClient,
  ) {
  }

  getResponses( params?: any ) {
    return this.http.get<IResponses>( 'profile/responses', params )
  }

  addResponse( resume_id?: number, vacancy_id?: number ) {
    return this.http.post( 'profile/responses', {
      resume_id,
      vacancy_id
    } )
  }
}
