import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component( {
  selector: 'raw-html',
  standalone: true,
  imports: [],
  templateUrl: './html.component.html',
} )
export class HtmlComponent implements AfterViewInit {
  @Input()
  html?: string = '';

  @ViewChild( "ref", { read: ElementRef } )
  ref?: ElementRef = undefined;

  ngAfterViewInit() {
    console.log( '===========', this.html )
    if ( this.ref?.nativeElement ) {
      this.ref.nativeElement.innerHTML = this.html;
    }
  }
}
