import { Component } from '@angular/core';
import { naming } from "../../../../../data/naming/naming/naming.service";
import { CardComponent } from "../../../../candidate/card/card.component";
import { NgForOf } from "@angular/common";

@Component( {
  selector: 'app-vacancies',
  standalone: true,
  imports: [
    CardComponent,
    NgForOf
  ],
  templateUrl: './vacancies.component.html',
  styleUrl: './vacancies.component.scss'
} )
export class VacanciesComponent {
  naming = naming;
}
