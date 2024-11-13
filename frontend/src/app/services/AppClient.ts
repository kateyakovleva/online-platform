import { Injectable } from '@angular/core';
import { HttpClient as AngularHttpClient } from "@angular/common/http";
import { AuthStore } from "../stores/AuthStore";
import { Observable } from "rxjs";

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

  get<T>( url: string, params?: any ): Observable<T> {
    return this.http.get<T>( this.prepareUrl( url ), {
      headers: this.getHeaders(),
      params,
    } );
  }

  post<T>( url: string, data: any ): Observable<T> {
    return this.http.post<T>( this.prepareUrl( url ), data, {
      headers: this.getHeaders()
    } );
  }

  prepareUrl( url: string ) {
    return apiUrl( url );
  }
}

export const apiUrl = ( url: string ) => {
  if ( !url.startsWith( 'http' ) ) {
    if ( !url.startsWith( '/' ) ) url = '/' + url;
    url = `http://online-platform.ru/api${ url }`;
  }

  return url;
}
