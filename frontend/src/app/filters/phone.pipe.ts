import { Pipe, PipeTransform } from '@angular/core';

@Pipe( {
  name: 'phone',
  standalone: true
} )
export class PhonePipe implements PipeTransform {
  transform( phone?: string ): string {
    if ( !phone ) return '';

    phone = phone.replace( /[^0-9]/g, '' );
    if ( phone.startsWith( '8' ) ) {
      phone = '7' + phone.slice( 1 );
    }
    return phone.replace( /([0-9])([0-9]{3})([0-9]{3})([0-9]{2})([0-9]{2})/, '+$1($2)$3-$4-$5' );
  }
}
