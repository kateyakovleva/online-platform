import { Component } from '@angular/core';
import {naming} from "../../../data/naming/naming/naming.service";
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-auth',
  standalone: true,
	imports: [
		RouterLink,
		RouterOutlet,
	],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
    naming = naming;
}
