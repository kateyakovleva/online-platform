import { Injectable } from "@angular/core";
import { BehaviorSubject, combineLatest, map } from "rxjs";

@Injectable( {
  providedIn: 'root'
} )
export class ContentHeightService {
  header = new BehaviorSubject( 0 );
  footer = new BehaviorSubject( 0 );

  content = combineLatest( [
    this.header,
    this.footer
  ] ).pipe( map( ( [ header, footer ] ) => {
    if ( typeof window !== 'undefined' ) {
      return window.innerHeight - header - footer;
    }

    return 0;
  } ) );

  height = this.header.pipe( map( h => {
    console.log( '====dsdsds======', h )
  } ) )
}
