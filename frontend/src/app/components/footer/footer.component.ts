import { Component } from '@angular/core';
import { SettingsStore } from "../../stores/SettingsStore";
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
  constructor( public settings: SettingsStore ) {
  }
}
