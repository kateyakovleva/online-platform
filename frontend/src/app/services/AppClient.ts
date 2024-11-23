import { Injectable } from '@angular/core';
import { HttpClient as AngularHttpClient } from "@angular/common/http";
import { AuthStore } from "../stores/AuthStore";
import { BehaviorSubject, map, Observable } from "rxjs";

@Injectable( {
  providedIn: 'root'
} )
export class AppClient {
  constructor(
    private http: AngularHttpClient,
    private auth: AuthStore,
  ) {
  }

  countRequests = new BehaviorSubject( 0 );
  isLoading$ = this.countRequests.asObservable().pipe( map( c => c > 0 ) );

  getHeaders() {
    return {
      Authorization: 'Bearer ' + this.auth.getToken()
    }
  }

  get<T>( url: string, params?: any ): Observable<T> {
    const request = this.http.get<T>( this.prepareUrl( url ), {
      headers: this.getHeaders(),
      params,
    } );

    return this.bindRequest( request );
  }

  post<T>( url: string, data: any, formData?: boolean ): Observable<T> {
    let headers: any = this.getHeaders();
    if ( formData ) {
      headers[ 'Content-Type' ] = 'multipart/form-data; charset=utf-8';
    }

    const request = this.http.post<T>( this.prepareUrl( url ), data, {
      headers: headers
    } );

    return this.bindRequest( request );
  }

  delete<T>( url: string ): Observable<T> {
    const request = this.http.delete<T>( this.prepareUrl( url ), {
      headers: this.getHeaders(),
    } );

    return this.bindRequest( request );
  }

  bindRequest<T>( request: Observable<T> ): Observable<T> {
    this.countRequests.next( this.countRequests.value + 1 );
    return new Observable( observer => {
      request.subscribe( {
        next: ( val ) => {
          observer.next( val );
        },
        complete: () => {
          this.countRequests.next( this.countRequests.value - 1 );
        },
        error: () => {
          this.countRequests.next( this.countRequests.value - 1 );
        }
      } )
    } );
  }

  prepareUrl( url: string ) {
    if ( url.startsWith( 'http' ) ) {
      return url;
    }
    return apiUrl( url );
  }
}

export const apiUrl = ( url: string ) => {
  if ( !url.startsWith( 'http' ) ) {
    if ( !url.startsWith( '/' ) ) url = '/' + url;
    // url = `http://online-platform.ru/api${ url }`;
    url = `http://hh.wi-studio/api${ url }`;
  }

  return url;
}
