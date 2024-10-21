import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable( {
  providedIn: 'root'
} )
export class SettingsService {
  _settings: Subject<any> = new Subject<any>();

  constructor( private http: HttpClient ) {
    this.http.get( '/api/settings' ).subscribe( ( response ) => {
      console.log( '===============', response )
      this._settings.next( response )
    } )
  }
}
