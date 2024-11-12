import {Component} from '@angular/core';
import {naming} from "../../../data/naming/naming/naming.service";
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-profileCustomer',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './vacancy.component.html',
  styleUrls: ['../profile/personal-data/create-vacancy/create-vacancy.component.scss', '../../candidate/profile/personal-data/personalData.component.scss']
})
export class ProfileCustomerComponent {

  naming = naming;

}
