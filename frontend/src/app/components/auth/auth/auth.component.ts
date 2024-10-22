import { Component } from '@angular/core';
import { naming } from "../../../data/naming/naming/naming.service";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";

@Component( {
  selector: 'app-auth',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    RouterLinkActive,
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
} )
export class AuthComponent {
  naming = naming;
}
