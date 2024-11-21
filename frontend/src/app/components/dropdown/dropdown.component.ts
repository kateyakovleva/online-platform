import { Component, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { NgForOf, NgIf } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component( {
  selector: 'app-dropdown',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    RouterLink
  ],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
} )
export class DropdownComponent {
  constructor( private eRef: ElementRef ) {
  }

  @HostListener( 'document:click', [ '$event' ] )
  clickOut( event: Event ) {
    if ( !this.eRef.nativeElement.contains( event.target ) ) {
      if ( this.isOpen ) this.onClose.emit();
      this.isOpen = false;
    }
  }

  selected: any;

  @Input()
  isOpen: boolean = false;

  @Output()
  onClose = new EventEmitter();

  showItemsList() {
    if ( this.isOpen ) this.onClose.emit();
    this.isOpen = !this.isOpen;
  };
}
