import { Injectable } from "@angular/core";
import { AppClient } from "../services/AppClient";
import { IResume, IResumes } from "../types/resumes";

@Injectable( {
  providedIn: 'root'
} )
export class ResumesStore {
  constructor(
    private http: AppClient,
  ) {
  }

  getResumes( params: any ) {
    return this.http.get<IResumes>( 'resumes', params )
  }

  getResume( id: number | string ) {
    return this.http.get<IResume>( `resumes/${ id }` )
  }
}
