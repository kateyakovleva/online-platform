import { Component } from '@angular/core';
import { naming } from "../../data/naming/naming/naming.service";
import { CustomSelectComponent } from "../candidate/customSelect/customSelect.component";
import { CardComponent } from "../candidate/card/card.component";
import { SettingsStore } from "../../stores/SettingsStore";
import { AsyncPipe } from "@angular/common";

@Component( {
  selector: 'app-filter',
  standalone: true,
  imports: [
    CustomSelectComponent,
    CardComponent,
    AsyncPipe
  ],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
} )
export class FilterComponent {

  constructor(
    public settings: SettingsStore,
  ) {
  }

  naming = naming;
}
