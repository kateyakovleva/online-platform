import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { ICity, ISetting, ISettingContent, ISettingTariffs, ISkill, ISpecialization } from "../types/settings";
import { apiUrl } from "../utils";

@Injectable( {
  providedIn: 'root'
} )
export class SettingsService {
  _settings: BehaviorSubject<ISetting | null> = new BehaviorSubject<ISetting | null>( null );

  get config(): Observable<ISetting | null> {
    return this._settings.asObservable();
  }

  get tariffs(): Observable<ISettingTariffs[] | undefined> {
    return this._settings.asObservable().pipe( map( r => r?.tariffs ) );
  }

  get content(): Observable<ISettingContent | undefined> {
    return this._settings.asObservable().pipe( map( r => r?.content ) );
  }

  get skills(): Observable<ISkill[] | undefined> {
    return this._settings.asObservable().pipe( map( r => r?.skills ) );
  }

  get specializations(): Observable<ISpecialization[] | undefined> {
    return this._settings.asObservable().pipe( map( r => r?.specializations ) );
  }

  get cities(): Observable<ICity[] | undefined> {
    return this._settings.asObservable().pipe( map( r => r?.cities ) );
  }

  constructor( private http: HttpClient ) {
    this.http.get( apiUrl( '/settings' ) ).subscribe( ( response ) => {
      this._settings.next( response as ISetting );
    } )
  }
}
