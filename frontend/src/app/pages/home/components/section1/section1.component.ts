import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { naming } from "../../../../data/naming/naming/naming.service";
import { SettingsStore } from "../../../../stores/SettingsStore";
import { AsyncPipe } from "@angular/common";
import { MarkdownComponent } from "ngx-markdown";

@Component( {
  selector: 'app-section1',
  standalone: true,
  imports: [
    RouterLink,
    AsyncPipe,
    MarkdownComponent,
  ],
  templateUrl: './section1.component.html',
  styleUrl: './section1.component.scss'
} )
export class Section1Component {

  naming = naming;

  constructor( public settings: SettingsStore ) {
  }
}
