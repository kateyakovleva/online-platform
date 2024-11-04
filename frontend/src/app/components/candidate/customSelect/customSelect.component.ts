import {Component, ElementRef, HostListener, input, Input} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {NgScrollbar} from "ngx-scrollbar";

@Component({
  selector: 'app-custom-select',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    NgScrollbar
  ],
  templateUrl: './customSelect.component.html',
  styleUrl: './customSelect.component.scss'
})
export class CustomSelectComponent {
  constructor(private eRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  clickOut(event: Event) {
    if(!this.eRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }

  @Input()
  items: any[]|undefined|null = [];
  @Input()
  name: string = '';
  @Input()
  labelFieldName: string = 'label';
  @Input()
  valueFieldName: string = 'value';

  selected: any;

  isOpen: boolean = false;

  showItemsList() {
      this.isOpen = !this.isOpen;
  };

  onSelect(item: any) {
    this.selected = item;
    this.isOpen = false;
  }

}
