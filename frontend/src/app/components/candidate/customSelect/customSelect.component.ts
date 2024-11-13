import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { NgForOf, NgIf } from "@angular/common";
import { NgScrollbar } from "ngx-scrollbar";

@Component( {
  selector: 'app-custom-select',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    NgScrollbar
  ],
  templateUrl: './customSelect.component.html',
  styleUrl: './customSelect.component.scss'
} )
export class CustomSelectComponent {
  constructor( private eRef: ElementRef ) {
  }

  @HostListener( 'document:click', [ '$event' ] )
  clickOut( event: Event ) {
    if ( !this.eRef.nativeElement.contains( event.target ) ) {
      this.isOpen = false;
    }
  }

  @Input()
  items: any[] | undefined | null = [];
  @Input()
  name: string = '';
  @Input()
  labelFieldName: string = 'label';
  @Input()
  valueFieldName: string = 'value';
  @Input()
  placeholder: string = '';
  @Input()
  defaultValue: any = null;

  selected: any;

  isOpen: boolean = false;

  showItemsList() {
    this.isOpen = !this.isOpen;
  };

  onSelect( item: any ) {
    this.selected = item;
    this.isOpen = false;
  }

  getLabel( item: any ) {
    if ( typeof item === 'object' ) {
      return item[ this.labelFieldName ] || '';
    } else {
      return item;
    }
  }

  getValue( item: any ) {
    if ( typeof item === 'object' ) {
      return item[ this.valueFieldName ] || '';
    } else {
      return item;
    }
  }
}
