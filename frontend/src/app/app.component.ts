import { Component, ViewEncapsulation } from '@angular/core';
import { AppClient } from "./services/AppClient";
import { SettingsStore } from "./stores/SettingsStore";

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None
} )
export class AppComponent {
  constructor(
    public settings: SettingsStore,
    public client: AppClient,
  ) {
  }


  title = 'online-platform';
}
