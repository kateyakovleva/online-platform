import { Component } from '@angular/core';
import {naming} from "../../../../data/naming/naming/naming.service";
import {RouterLink} from "@angular/router";
import {CardComponent} from "../../card/card.component";

@Component({
  selector: 'app-offer',
  standalone: true,
  imports: [RouterLink, CardComponent],
  templateUrl: './offer.component.html',
  styleUrl: './offer.component.scss'
})
export class OfferComponent {

  naming = naming;

}
