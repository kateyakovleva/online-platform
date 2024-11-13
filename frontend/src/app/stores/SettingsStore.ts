import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable } from "rxjs";
import { ISetting, ISettingContent, ISettingTariffs } from "../types/settings";
import { AppClient } from "../services/AppClient";
import { ICity, ISkill, ISpecialization } from "../types/other_types";

@Injectable( {
  providedIn: 'root'
} )
export class SettingsStore {
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

  constructor( private http: AppClient ) {
    this.http.get<ISetting>( '/settings' ).subscribe( ( response ) => {
      this._settings.next( response );
    } )
  }
}
