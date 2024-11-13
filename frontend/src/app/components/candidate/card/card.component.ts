import { Component, Input } from '@angular/core';
import { naming } from "../../../data/naming/naming/naming.service";
import { Router, RouterLink } from "@angular/router";
import { IVacancy } from "../../../types/vacancies";
import { PricePipe } from "../../../filters/price.pipe";

@Component( {
  selector: 'app-card',
  standalone: true,
  imports: [
    RouterLink,
    PricePipe
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
} )
export class CardComponent {
  constructor(
    private router: Router
  ) {
  }

  naming = naming;

  @Input()
  item?: IVacancy = undefined;

  viewVacancy( vacancy: any ) {
    this.router.navigate( [ '/company_profile/vacancies/' + vacancy.id ] );
  }
}
