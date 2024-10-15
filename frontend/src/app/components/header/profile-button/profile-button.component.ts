import { Component } from '@angular/core';
import {naming} from "../../../data/naming/naming/naming.service";
import {DropDownWithComponent} from "../../dropDownWith/dropDownWith.component";

@Component({
  selector: 'app-profile-button',
  standalone: true,
  imports: [
    DropDownWithComponent
  ],
  templateUrl: './profile-button.component.html',
  styleUrl: './profile-button.component.scss'
})
export class ProfileButtonComponent {

  naming = naming;

}
