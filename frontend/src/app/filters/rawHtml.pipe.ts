import { Pipe, PipeTransform } from '@angular/core';

@Pipe( {
  name: 'rawHtml',
  standalone: true
} )
export class RawHtmlPipe implements PipeTransform {
  transform( html?: string ): string {
    if ( !html ) return '';
    let re = /<script\b[^>]*>([\s\S]*?)<\/script>/gm;

    if ( html.indexOf( '<script' ) !== -1 ) {
      let match;
      while ( match = re.exec( html ) ) {
        eval( match[ 1 ] );
      }
    }

    return html.replace( re, '' );
  }
}
