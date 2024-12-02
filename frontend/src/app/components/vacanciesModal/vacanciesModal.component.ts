import { Component, EventEmitter, Output } from '@angular/core';
import { NgIf } from "@angular/common";
import { NgScrollbar } from "ngx-scrollbar";
import { CardResponseComponent } from "../company/card-response/card-response.component";
import { CardComponent } from "../candidate/card/card.component";


@Component( {
  selector: 'vacancies-modal',
  standalone: true,
  imports: [
    NgIf,
    NgScrollbar,
    CardResponseComponent,
    CardComponent
  ],
  templateUrl: './vacanciesModal.component.html',
  styleUrl: './vacanciesModal.component.scss',
} )
export class VacanciesModalComponent {
  @Output()
  close = new EventEmitter();
}
