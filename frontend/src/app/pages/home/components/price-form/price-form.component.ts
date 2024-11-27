import { Component, EventEmitter, Output } from '@angular/core';
import { AsyncPipe, NgIf } from "@angular/common";
import { naming } from "../../../../data/naming/naming/naming.service";
import { CustomSelectComponent } from "../../../../components/customSelect/customSelect.component";
import { SettingsStore } from "../../../../stores/SettingsStore";
import { AppClient } from "../../../../services/AppClient";

@Component( {
  selector: 'app-price-form',
  standalone: true,
  imports: [
    NgIf,
    CustomSelectComponent,
    AsyncPipe
  ],
  templateUrl: './price-form.component.html',
  styleUrl: './price-form.component.scss'
} )
export class PriceFormComponent {
  constructor(
    public settings: SettingsStore,
    private http: AppClient,
  ) {
  }

  @Output()
  close = new EventEmitter();

  protected readonly naming = naming;

  success = false;

  send( e: Event ) {
    e.preventDefault();

    this.http.post( '/form-request', new FormData( e.target as HTMLFormElement ) ).subscribe( ( r ) => {
      this.success = true;
      this.close.emit();
    } )
  }
}
