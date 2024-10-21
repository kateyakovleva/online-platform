import { Component } from '@angular/core';
import { naming } from "../../../../data/naming/naming/naming.service";
import { SettingsService } from "../../../../stores/SettingsService";
import { MarkdownComponent } from "ngx-markdown";
import { AsyncPipe } from "@angular/common";

@Component( {
  selector: 'app-section6',
  standalone: true,
  imports: [
    MarkdownComponent,
    AsyncPipe
  ],
  templateUrl: './section6.component.html',
  styleUrl: './section6.component.scss'
} )
export class Section6Component {
  constructor( public settings: SettingsService ) {
  }

  naming = naming;
}
