import { Component } from '@angular/core';
import {naming} from "../../../data/naming/naming/naming.service";
import {PersonalDataCustomerComponent} from "./personal-data/personalDataCustomer.component";
import {RouterLink, RouterOutlet} from "@angular/router";
import { ResponsesComponent } from "./responses/responses.component";


@Component({
  selector: 'app-profileCustomer',
  standalone: true,
  imports: [
    PersonalDataCustomerComponent,
    RouterOutlet,
    RouterLink,
    ResponsesComponent,
  ],
  templateUrl: './profileCustomer.component.html',
  styleUrl: './profileCustomer.component.scss'
})
export class ProfileCustomerComponent {

    naming = naming;

}
