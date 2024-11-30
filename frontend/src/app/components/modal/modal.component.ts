import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgIf} from "@angular/common";
import {CardResponseComponent} from "../company/card-response/card-response.component";
import {NgScrollbar} from "ngx-scrollbar";
import {CardComponent} from "../candidate/card/card.component";


@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    NgIf,
    CardResponseComponent,
    NgScrollbar,
    CardComponent
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
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
