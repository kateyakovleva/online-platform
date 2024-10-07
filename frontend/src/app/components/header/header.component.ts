import {Component} from '@angular/core';
import {naming} from "../../data/naming/naming/naming.service";
import {ProfileButtonComponent} from "./profile-button/profile-button.component";


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    ProfileButtonComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  naming = naming;

}
