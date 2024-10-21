import { Component } from '@angular/core';
import { naming } from "../../../../data/naming/naming/naming.service";
import { SettingsService } from "../../../../stores/SettingsService";
import { MarkdownComponent } from "ngx-markdown";
import { AsyncPipe } from "@angular/common";

@Component( {
  selector: 'app-section2',
  standalone: true,
  imports: [
    MarkdownComponent,
    AsyncPipe

  ],
  templateUrl: './section2.component.html',
  styleUrl: './section2.component.scss'
} )
export class Section2Component {
  constructor( public settings: SettingsService ) {
  }

  naming = naming;

}
