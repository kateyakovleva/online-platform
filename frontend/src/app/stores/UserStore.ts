import { Injectable } from "@angular/core";
import { AppClient } from "../services/AppClient";
import { AuthStore } from "./AuthStore";
import { BehaviorSubject, map } from "rxjs";
import { ICustomer, IWorker } from "../types/customer";
import { ICompany } from "../types/company";

@Injectable( {
  providedIn: 'root'
} )
export class UserStore {
  constructor( private http: AppClient, private auth: AuthStore ) {
    this.auth.auth$.subscribe( ( a ) => {
      if ( a ) {
        this.http.get( '/profile' ).subscribe( {
          next: ( data: any ) => {
            this._user.next( data as ICustomer )
          },
          error: error => {
            if ( error.status === 401 ) {
              this.auth.logout();
            }
          }
        } )
      }
    } )
  }

  _user = new BehaviorSubject<ICompany | IWorker | null>( null );

  worker$ = this._user.asObservable().pipe( map( u => u?.is_company ? null : ( u as IWorker ) ) );

  company$ = this._user.asObservable().pipe( map( u => !u?.is_company ? null : ( u as ICompany ) ) );
}
