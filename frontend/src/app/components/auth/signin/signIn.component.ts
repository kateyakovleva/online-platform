import { Component } from '@angular/core';
import { naming } from "../../../data/naming/naming/naming.service";
import { Router, RouterLink } from "@angular/router";
import { SettingsService } from "../../../stores/SettingsService";
import { HttpClient } from "@angular/common/http";
import { apiUrl } from "../../../utils";
import { NgIf } from "@angular/common";

@Component( {
  selector: 'app-signIn',
  standalone: true,
  imports: [
    RouterLink,
    NgIf
  ],
  templateUrl: './signIn.component.html',
  styleUrl: '../auth/auth.component.scss'
} )
export class SignInComponent {
  constructor( public settings: SettingsService, private http: HttpClient, private router: Router ) {
  }

  naming = naming;
  errors: any = {}

  signIn( $event: SubmitEvent ) {
    $event.preventDefault();
    this.http.post( apiUrl( '/auth' ), new FormData( $event.target as HTMLFormElement ) )
      .subscribe( {
        next: data => {
          this.router.navigate( [ "/profile" ] );
        },
        error: error => {
          this.errors = error.error?.errors || {}
        }
      } )
  }
}
