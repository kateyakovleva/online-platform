import { Component } from '@angular/core';
import {naming} from "../../../data/naming/naming/naming.service";
import {PersonalDataComponent} from "./personal-data/personalData.component";
import {RouterLink, RouterOutlet} from "@angular/router";
import {ResponseComponent} from "./response/response.component";
import {OfferComponent} from "./offer/offer.component";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    PersonalDataComponent,
    RouterOutlet,
    RouterLink,
    ResponseComponent,
    OfferComponent,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

    naming = naming;

}
