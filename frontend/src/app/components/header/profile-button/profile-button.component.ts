import { Component } from '@angular/core';
import { naming } from "../../../data/naming/naming/naming.service";
import { CustomSelectComponent } from "../../candidate/customSelect/customSelect.component";
import { RouterLink } from "@angular/router";

@Component( {
  selector: 'app-profile-button',
  standalone: true,
  imports: [
    CustomSelectComponent,
    RouterLink
  ],
  templateUrl: './profile-button.component.html',
  styleUrl: './profile-button.component.scss'
} )
export class ProfileButtonComponent {

  naming = naming;

}
