import {Component} from '@angular/core';
import {naming} from "../../../../data/naming/naming/naming.service";
import {CardResponseComponent} from "../../card-response/card-response.component";

@Component({
  selector: 'app-offersCustomer',
  standalone: true,
  imports: [
    CardResponseComponent
  ],
  templateUrl: './offersCustomer.component.html',
  styleUrl: '../personal-data/personalDataCustomer.component.scss'
})
export class OffersCusComponent {

  naming = naming;

}
