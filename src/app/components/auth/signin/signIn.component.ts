import { Component } from '@angular/core';
import {naming} from "../../../data/naming/naming/naming.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-signIn',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './signIn.component.html',
  styleUrl: '../auth/auth.component.scss'
})
export class SignInComponent {

  naming = naming;

}
