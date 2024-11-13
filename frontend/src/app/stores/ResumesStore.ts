import { Injectable } from "@angular/core";
import { AppClient } from "../services/AppClient";
import { IResumes } from "../types/resumes";

@Injectable( {
  providedIn: 'root'
} )
export class ResumesStore {
  constructor(
    private http: AppClient,
  ) {
  }

  getResumes() {
    return this.http.get<IResumes>( 'resumes' )
  }
}
