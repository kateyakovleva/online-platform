import { Component } from '@angular/core';
import { naming } from "../../../../data/naming/naming/naming.service";
import { SettingsService } from "../../../../stores/SettingsService";
import { MarkdownComponent } from "ngx-markdown";
import { AsyncPipe } from "@angular/common";

@Component( {
  selector: 'app-section3',
  standalone: true,
  imports: [
    MarkdownComponent,
    AsyncPipe
  ],
  templateUrl: './section3.component.html',
  styleUrl: './section3.component.scss'
} )
export class Section3Component {
  constructor( public settings: SettingsService ) {
  }

  naming = naming;
}
