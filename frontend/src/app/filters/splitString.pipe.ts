import { Pipe, PipeTransform } from '@angular/core';
import { stringToArray } from "../utils";

@Pipe( {
  name: 'splitString',
  standalone: true
} )
export class SplitStringPipe implements PipeTransform {
  transform( str: string ): string[] {
    return stringToArray( str );
  }
}
