import {Component, Input} from '@angular/core';
import {naming} from "../../data/naming/naming/naming.service";
import {RouterLink, RouterOutlet} from "@angular/router";
import {CheckboxModule} from 'primeng/checkbox';
import {FormsModule} from "@angular/forms";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {SettingsStore} from "../../stores/SettingsStore";


@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    CheckboxModule,
    FormsModule,
    NgForOf,
    AsyncPipe,
    NgIf
  ],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
  host: {
    class: 'd-flex direction-row w-6 a-1-center j-c-start mr-30 mb-10'
  }
})
export class CheckboxComponent {
  constructor(public settings: SettingsStore) {
    // this.id = uuidv4();
  }

  naming = naming;

  id = '';

  @Input()
  name?: string | null = null;

  @Input()
  label?: string | null = null;

  @Input()
  value?: string | number | null = null;

  @Input()
  checked?: boolean | null = null;
}
