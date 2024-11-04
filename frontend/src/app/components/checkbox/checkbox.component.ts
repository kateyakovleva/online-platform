import {Component} from '@angular/core';
import {naming} from "../../data/naming/naming/naming.service";
import {RouterLink, RouterOutlet} from "@angular/router";
import {CheckboxModule} from 'primeng/checkbox';
import {FormsModule} from "@angular/forms";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {SettingsService} from "../../stores/SettingsService";
import {File} from "buffer";


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
  styleUrl: './checkbox.component.scss'
})
export class CheckboxComponent {
  constructor(public settings: SettingsService) {
  }

  naming = naming;

  profile = {
    skills: [1, 2, 3]
  }

  file: File | null = null;

  selectFile(e: Event) {
    //@ts-ignore
    this.file = e.target?.files[0] || null;
  }
}
