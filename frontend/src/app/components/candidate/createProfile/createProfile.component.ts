import { Component } from '@angular/core';
import { naming } from "../../../data/naming/naming/naming.service";
import { RouterLink, RouterOutlet } from "@angular/router";
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from "@angular/forms";
import { AsyncPipe, NgForOf, NgIf } from "@angular/common";
import { SettingsStore } from "../../../stores/SettingsStore";
import { File } from "buffer";
import { CustomSelectComponent } from "../customSelect/customSelect.component";
import { CheckboxComponent } from "../../checkbox/checkbox.component";

@Component( {
  selector: 'app-createProfile',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    CheckboxModule,
    FormsModule,
    NgForOf,
    AsyncPipe,
    CustomSelectComponent,
    NgIf,
    CheckboxComponent
  ],
  templateUrl: './createProfile.component.html',
  styleUrl: './createProfile.component.scss'
} )
export class CreateProfileComponent {
  constructor( public settings: SettingsStore ) {
  }

  naming = naming;

  profile = {
    skills: [ 1, 2, 3 ]
  }

  file: File | null = null;

  selectFile( e: Event ) {
    //@ts-ignore
    this.file = e.target?.files[ 0 ] || null;
  }
}
