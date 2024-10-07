import { Component } from '@angular/core';
import {naming} from "../../../data/naming/naming/naming.service";
import { DropDownComponent } from "../../dropDown/dropDown.component";

@Component({
  selector: 'app-profile-button',
  standalone: true,
	imports: [
		DropDownComponent
	],
  templateUrl: './profile-button.component.html',
  styleUrl: './profile-button.component.scss'
})
export class ProfileButtonComponent {

  naming = naming;

}
