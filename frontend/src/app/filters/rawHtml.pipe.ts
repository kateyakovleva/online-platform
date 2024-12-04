import { Pipe, PipeTransform } from '@angular/core';

@Pipe( {
  name: 'rawHtml',
  standalone: true
} )
export class RawHtmlPipe implements PipeTransform {
  transform( html?: string ): string {
    if ( !html || typeof document === 'undefined' ) return '';
    let re = /<script\b([^>]*)>([\s\S]*?)<\/script>/gm;

    if ( html.indexOf( '<script' ) !== -1 ) {
      let match;
      while ( match = re.exec( html ) ) {
        if ( match[ 2 ] ) eval( match[ 2 ] );
        if ( match[ 1 ] && match[ 1 ].indexOf( 'src' ) !== -1 ) {
          let src = match[ 1 ].replace( /^(.*)src="([^"]*)"(.*)$/gm, '$2' );
          this.addScript( src );
        }
      }
    }

    return html.replace( re, '' );
  }

  addScript( src: string ) {
    if ( !src || typeof document === 'undefined' ) return;
    let script = document.createElement( 'script' );
    script.type = 'text/javascript';
    script.src = src;
    document.getElementsByTagName( 'head' )[ 0 ].appendChild( script );
  }
}
