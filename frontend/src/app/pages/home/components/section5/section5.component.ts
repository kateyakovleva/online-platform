import { Component } from '@angular/core';
import { naming } from "../../../../data/naming/naming/naming.service";
import { RouterLink } from "@angular/router";
import { AsyncPipe, NgForOf, NgIf } from "@angular/common";
import { SettingsStore } from "../../../../stores/SettingsStore";
import { MarkdownComponent } from "ngx-markdown";
import { SplitStringPipe } from "../../../../filters/splitString.pipe";

@Component( {
  selector: 'app-section5',
  standalone: true,
  imports: [
    RouterLink,
    NgIf,
    AsyncPipe,
    NgForOf,
    MarkdownComponent,
    SplitStringPipe,
  ],
  templateUrl: './section5.component.html',
  styleUrl: './section5.component.scss'
} )
export class Section5Component {
  constructor( public settings: SettingsStore ) {
  }

  naming = naming;
}
