import { Component } from '@angular/core';
import { naming } from "../../../../data/naming/naming/naming.service";
import { SettingsStore } from "../../../../stores/SettingsStore";
import { MarkdownComponent } from "ngx-markdown";
import { AsyncPipe } from "@angular/common";

@Component( {
  selector: 'app-section11',
  standalone: true,
  imports: [
    MarkdownComponent,
    AsyncPipe
  ],
  templateUrl: './section11.component.html',
  styleUrl: './section11.component.scss'
} )
export class Section11Component {
  constructor( public settings: SettingsStore ) {
  }

  naming = naming;

}
