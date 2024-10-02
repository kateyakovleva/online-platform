import { Component } from '@angular/core';
import { naming } from "../../../../data/naming/naming/naming.service";
import { CardResponseComponent } from "../../card-response/card-response.component";

@Component({
  selector: 'app-OffersCus',
  standalone: true,
  imports: [
    CardResponseComponent
  ],
  templateUrl: './offersCus.component.html',
  styleUrl: './offersCus.component.scss'
})
export class OffersCusComponent {

  naming = naming;

}
