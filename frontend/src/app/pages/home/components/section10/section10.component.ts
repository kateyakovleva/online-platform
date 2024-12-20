import { Component } from '@angular/core';
import { naming } from "../../../../data/naming/naming/naming.service";
import { PriceFormComponent } from "../price-form/price-form.component";
import { AsyncPipe, NgForOf, NgIf } from "@angular/common";
import { SettingsStore } from "../../../../stores/SettingsStore";
import { MarkdownComponent } from "ngx-markdown";
import { ModalComponent } from "../../../../components/modal/modal.component";
import { SplitStringPipe } from "../../../../filters/splitString.pipe";

@Component( {
  selector: 'app-section10',
  standalone: true,
  imports: [
    PriceFormComponent,
    NgIf,
    NgForOf,
    AsyncPipe,
    MarkdownComponent,
    ModalComponent,
    SplitStringPipe
  ],
  templateUrl: './section10.component.html',
  styleUrl: './section10.component.scss'
} )
export class Section10Component {
  constructor( public settings: SettingsStore ) {
  }

  priceForm: boolean = false;

  toggleForm() {
    this.priceForm = !this.priceForm;
  }

  naming = naming;

  protected readonly console = console;
}
