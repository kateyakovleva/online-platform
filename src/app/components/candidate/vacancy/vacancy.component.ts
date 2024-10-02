import { Component } from '@angular/core';
import {OfferComponent} from "../profile/offer/offer.component";
import {RouterLink} from "@angular/router";
import {naming} from "../../../data/naming/naming/naming.service";
import {OneVacancyComponent} from "./oneVacancy/oneVacancy.component";
import {AllVacancyComponent} from "./allVacancy/allVacancy.component";

@Component({
  selector: 'app-vacancy',
  standalone: true,
  imports: [
    OfferComponent,
    RouterLink,
    OneVacancyComponent,
    AllVacancyComponent
  ],
  templateUrl: './vacancy.component.html',
  styleUrl: './vacancy.component.scss'
})
export class VacancyComponent {


  naming = naming;

}
