import { Component } from '@angular/core';
import { naming } from "../../../../data/naming/naming/naming.service";
import { SettingsService } from "../../../../stores/SettingsService";
import { MarkdownComponent } from "ngx-markdown";
import { AsyncPipe, NgForOf, NgIf } from "@angular/common";
import { SplitStringPipe } from "../../../../filters/splitString.pipe";

@Component( {
  selector: 'app-section9',
  standalone: true,
  imports: [
    MarkdownComponent,
    AsyncPipe,
    NgIf,
    NgForOf,
    SplitStringPipe
  ],
  templateUrl: './section9.component.html',
  styleUrl: './section9.component.scss'
} )
export class Section9Component {
  constructor( public settings: SettingsService ) {
  }

  naming = naming;

}
