import { Component, Input } from '@angular/core';
import { naming } from "../../../data/naming/naming/naming.service";
import { Router, RouterLink } from "@angular/router";
import { IVacancy } from "../../../types/vacancies";
import { PricePipe } from "../../../filters/price.pipe";
import { UserStore } from "../../../stores/UserStore";
import { NgIf } from "@angular/common";
import { OnlineComponent } from "../../online/online.component";
import { FormatComponent } from "../../format/format.component";

@Component( {
  selector: 'app-card',
  standalone: true,
  imports: [
    RouterLink,
    PricePipe,
    NgIf,
    OnlineComponent,
    FormatComponent
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  host: {
    class: 'd-block'
  }
} )
export class CardComponent {
  constructor(
    private router: Router,
    private user: UserStore,
  ) {
  }

  naming = naming;

  @Input()
  item?: IVacancy = undefined;

  viewVacancy() {
    if ( this.user._user.value?.id === this.item?.company?.id ) {
      this.router.navigate( [ '/company_profile/vacancies/' + this.item?.id ] );
    } else {
      this.router.navigate( [ '/search/vacancies/' + this.item?.id ] );
    }
  }
}
