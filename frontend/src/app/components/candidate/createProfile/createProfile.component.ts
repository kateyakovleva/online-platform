import { Component } from '@angular/core';
import { naming } from "../../../data/naming/naming/naming.service";
import { RouterLink, RouterOutlet } from "@angular/router";
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from "@angular/forms";
import { AsyncPipe, NgForOf } from "@angular/common";
import { SettingsService } from "../../../stores/SettingsService";
import { File } from "buffer";

@Component( {
  selector: 'app-createProfile',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    CheckboxModule,
    FormsModule,
    NgForOf,
    AsyncPipe
  ],
  templateUrl: './createProfile.component.html',
  styleUrl: './createProfile.component.scss'
} )
export class CreateProfileComponent {
  constructor( public settings: SettingsService ) {
  }

  naming = naming;

  file: File | null = null;

  selectFile( e: Event ) {
    //@ts-ignore
    this.file = e.target?.files[ 0 ] || null;
  }
}
