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
  constructor(
    private http: AppClient,
    private auth: AuthStore,
  ) {
    this.auth.auth$.subscribe( ( a ) => {
      if ( a ) {
        this.getUser();
      }
    } )
  }

  _user = new BehaviorSubject<ICompany | IWorker | null>( null );

  worker$ = this._user.asObservable().pipe( map( u => u?.is_company ? null : ( u as IWorker ) ) );

  company$ = this._user.asObservable().pipe( map( u => !u?.is_company ? null : ( u as ICompany ) ) );

  getUser() {
    this.http.get<ICustomer>( '/profile' ).subscribe( {
      next: ( data ) => {
        this._user.next( data )
      },
      error: error => {
        if ( error.status === 401 ) {
          this.auth.logout();
        }
      }
    } )
  }

  updateUser( data: FormData ) {
    return this.http.post( '/profile', data );
  }

  updateImage( file: File ) {
    const data = new FormData();
    data.append( 'image', file );
    return this.updateUser( data );
  }
}
