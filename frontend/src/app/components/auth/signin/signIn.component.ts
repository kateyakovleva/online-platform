import { Component } from '@angular/core';
import { naming } from "../../../data/naming/naming/naming.service";
import { Router, RouterLink } from "@angular/router";
import { SettingsStore } from "../../../stores/SettingsStore";
import { NgIf } from "@angular/common";
import { AppClient } from "../../../services/AppClient";
import { AuthStore } from "../../../stores/AuthStore";

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
  constructor(
    public settings: SettingsStore,
    private http: AppClient,
    private auth: AuthStore,
    private router: Router
  ) {
    this.auth.auth$.subscribe( ( a ) => {
      if ( a ) {
        this.router.navigate( [ "/profile" ] );
      }
    } );
  }

  naming = naming;
  errors: any = {}

  signIn( $event: SubmitEvent ) {
    $event.preventDefault();
    this.http.post( '/auth', new FormData( $event.target as HTMLFormElement ) )
      .subscribe( {
        next: ( data: any ) => {
          if ( data.token ) {
            this.auth.updateToken( data.token );
          }
          // this.router.navigate( [ "/profile" ] );
        },
        error: error => {
          this.errors = error.error?.errors || {}
        }
      } )
  }
}
