import {Component} from '@angular/core';
import {naming} from "../../../data/naming/naming/naming.service";
import {PersonalDataCustomerComponent} from "./personal-data/personalDataCustomer.component";
import {RouterLink, RouterOutlet} from "@angular/router";
import {ResponsesComponent} from "./responses/responses.component";
import {PersonalDataComponent} from "../../candidate/profile/personal-data/personalData.component";
import {OffersCusComponent} from "./offers-customer/offersCustomer.component";


@Component({
  selector: 'app-profileCustomer',
  standalone: true,
  imports: [
    PersonalDataCustomerComponent,
    RouterOutlet,
    RouterLink,
    ResponsesComponent,
    PersonalDataComponent,
    OffersCusComponent,
    OffersCusComponent,
  ],
  templateUrl: './profileCustomer.component.html',
  styleUrl: '../../candidate/profile/profile.component.scss'
})
export class ProfileCustomerComponent {

  naming = naming;

}
