import { Component } from '@angular/core';
import { SettingsService } from "../../stores/SettingsService";

@Component( {
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
} )
export class FooterComponent {
  constructor( public settings: SettingsService ) {

  }

}
