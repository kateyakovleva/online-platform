import { Injectable } from '@angular/core';
import { HttpClient as AngularHttpClient } from "@angular/common/http";
import { AuthStore } from "../stores/AuthStore";
import { apiUrl } from "../utils";

@Injectable( {
  providedIn: 'root'
} )
export class AppClient {

  constructor(
    private http: AngularHttpClient,
    private auth: AuthStore,
  ) {
  }

  getHeaders() {
    return {
      Authorization: 'Bearer ' + this.auth.getToken()
    }
  }

  get( url: string ) {
    return this.http.get( this.prepareUrl( url ), {
      headers: this.getHeaders()
    } );
  }

  post( url: string, data: any ) {
    return this.http.post( this.prepareUrl( url ), data, {
      headers: this.getHeaders()
    } );
  }

  prepareUrl( url: string ) {
    return apiUrl( url );
  }
}
