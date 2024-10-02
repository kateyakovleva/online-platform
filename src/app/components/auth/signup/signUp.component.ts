import { Component } from '@angular/core';
import {naming} from "../../../data/naming/naming/naming.service";
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-signUp',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './signUp.component.html',
  styleUrl: '../auth/auth.component.scss'
})
export class SignUpComponent {

  naming = naming;

}
