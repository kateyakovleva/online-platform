import { Component } from '@angular/core';
import {naming} from "../../../../data/naming/naming/naming.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-signUpVerify',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './signUpVerify.component.html',
  styleUrl: '../../auth/auth.component.scss'
})
export class SignUpVerifyComponent {

  naming = naming;

}
