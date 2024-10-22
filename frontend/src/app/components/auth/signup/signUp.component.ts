import { Component } from '@angular/core';
import { naming } from "../../../data/naming/naming/naming.service";
import { Router, RouterLink, RouterOutlet } from "@angular/router";
import { SettingsService } from "../../../stores/SettingsService";
import { AsyncPipe, NgIf } from "@angular/common";
import { ECustomerType } from "../../../types/customer";
import { FormsModule } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { apiUrl } from "../../../utils";

@Component( {
  selector: 'app-signUp',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    AsyncPipe,
    FormsModule,
    NgIf
  ],
  templateUrl: './signUp.component.html',
  styleUrl: '../auth/auth.component.scss'
} )
export class SignUpComponent {
  constructor( public settings: SettingsService, private http: HttpClient, private router: Router ) {
  }

  naming = naming;

  type = ECustomerType.WORKER;

  errors: any = {}

  changeType( e: any ) {
    this.type = Number( e.target.value )
  }

  protected readonly ECustomerType = ECustomerType;

  signUp( $event: SubmitEvent ) {
    $event.preventDefault();
    this.http.post( apiUrl( '/register' ), new FormData( $event.target as HTMLFormElement ) )
      .subscribe( {
        next: data => {
          this.router.navigate( [ "/verify" ] );
        },
        error: error => {
          this.errors = error.error?.errors || {}
        }
      } )
  }
}
