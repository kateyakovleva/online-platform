import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIf } from "@angular/common";


@Component( {
  selector: 'app-modal',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
} )
export class ModalComponent {
  @Input()
  showModal = false;

  @Output()
  onClose = new EventEmitter();

  close() {
    this.showModal = false;
    this.onClose.emit();
  }
}
