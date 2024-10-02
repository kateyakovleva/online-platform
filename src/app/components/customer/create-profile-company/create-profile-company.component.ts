import { Component } from '@angular/core';
import { naming } from "../../../data/naming/naming/naming.service";

@Component({
  selector: 'app-create-profile-company',
  standalone: true,
  imports: [],
  templateUrl: './create-profile-company.component.html',
  styleUrl: './create-profile-company.component.scss'
})
export class CreateProfileCompanyComponent {

  naming = naming;

}
