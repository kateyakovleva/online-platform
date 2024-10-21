import { Component } from '@angular/core';
import { SettingsService } from "../../stores/SettingsService";
import { AsyncPipe, NgIf } from "@angular/common";

@Component( {
  selector: 'app-footer',
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
} )
export class FooterComponent {
  constructor( public settings: SettingsService ) {
  }
}
