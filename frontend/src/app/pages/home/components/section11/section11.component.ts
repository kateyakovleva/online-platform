import { Component } from '@angular/core';
import { naming } from "../../../../data/naming/naming/naming.service";
import { SettingsStore } from "../../../../stores/SettingsStore";
import { MarkdownComponent } from "ngx-markdown";
import { AsyncPipe, NgIf } from "@angular/common";
import { AppClient } from "../../../../services/AppClient";

@Component( {
  selector: 'app-section11',
  standalone: true,
  imports: [
    MarkdownComponent,
    AsyncPipe,
    NgIf
  ],
  templateUrl: './section11.component.html',
  styleUrl: './section11.component.scss'
} )
export class Section11Component {
  constructor(
    public settings: SettingsStore,
    private http: AppClient,
  ) {
  }

  naming = naming;

  success = false;

  send( e: Event ) {
    e.preventDefault();

    this.http.post( '/form-request', new FormData( e.target as HTMLFormElement ) ).subscribe( ( r ) => {
      this.success = true;
    } )
  }
}
