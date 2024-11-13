import { Pipe, PipeTransform } from '@angular/core';

@Pipe( {
  name: 'price',
  standalone: true
} )
export class PricePipe implements PipeTransform {
  transform( price?: number ): string {
    if ( !price ) return '';

    return price.toLocaleString() + ' ₽';
  }
}
