import { Pipe, PipeTransform } from '@angular/core';

@Pipe( {
  name: 'limit',
  standalone: true
} )
export class LimitPipe implements PipeTransform {
  transform( str?: string, limit: number = 0 ): string {
    if ( !str ) return '';

    return str.length > limit ? ( str.slice( 0, limit ) + '...' ) : str;
  }
}
