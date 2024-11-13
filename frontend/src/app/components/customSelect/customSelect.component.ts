import { Component, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
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

  @Output() change: EventEmitter<any> = new EventEmitter();

  onChange( item: any ): void {
    this.change.emit( item );
  }

  selected: any;

  isOpen: boolean = false;

  showItemsList() {
    this.isOpen = !this.isOpen;
  };

  onSelect( item: any ) {
    this.selected = item;
    this.isOpen = false;
    if ( this.onChange ) this.onChange( item );
  }

  getLabel( item: any ) {
    if ( item && typeof item === 'object' ) {
      return item[ this.labelFieldName ] || '';
    } else {
      return item || '';
    }
  }

  getValue( item: any ) {
    if ( item && typeof item === 'object' ) {
      return item[ this.valueFieldName ] || '';
    } else {
      return item || '';
    }
  }
}
