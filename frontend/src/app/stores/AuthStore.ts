import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthStore {
  _token: BehaviorSubject<string | null> = new BehaviorSubject(typeof localStorage !== 'undefined' ? localStorage.getItem('token') : null);

  token$ = this._token.asObservable();

  // auth$ = this.token$.pipe( map( token => Boolean( token ) ) );
  auth$ = new BehaviorSubject(true);

  getToken() {
    return this._token.getValue();
  }

  updateToken(token: string | null) {
    if (token) {
      if (typeof localStorage !== 'undefined')
        localStorage.setItem('token', token);
      this._token.next(token);
    } else {
      this.logout();
    }
  }

  logout() {
    if (typeof localStorage !== 'undefined')
      localStorage.removeItem('token');
    this._token.next(null);
  }
}
