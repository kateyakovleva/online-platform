import { Component } from '@angular/core';
import { naming } from "../../../../data/naming/naming/naming.service";
import { Router, RouterLink } from "@angular/router";
import { SettingsStore } from "../../../../stores/SettingsStore";
import { NgIf } from "@angular/common";
import { RegisterStore } from "../../../../stores/RegisterStore";
import { AppClient } from "../../../../services/AppClient";
import { AuthStore } from "../../../../stores/AuthStore";

@Component( {
  selector: 'app-signUpVerify',
  standalone: true,
  imports: [
    RouterLink,
    NgIf
  ],
  templateUrl: './signUpVerify.component.html',
  styleUrl: '../../auth/auth.component.scss'
} )
export class SignUpVerifyComponent {

  naming = naming;

  constructor(
    public settings: SettingsStore,
    private http: AppClient,
    private router: Router,
    private regStore: RegisterStore,
    private auth: AuthStore,
  ) {
    this.auth.auth$.subscribe( ( a ) => {
      if ( a ) {
        this.router.navigate( [ "/profile" ] );
      }
    } );
  }

  errors: any = {}

  signUp( $event: SubmitEvent | null ) {
    const data = this.regStore.registerData.getValue();
    if ( !data ) return;

    if ( $event ) {
      $event.preventDefault();
      const form = new FormData( $event.target as HTMLFormElement );
      data.set( 'code', form.get( 'code' ) as string )
    }

    this.http.post( '/register', data )
      .subscribe( {
        next: ( data: any ) => {
          if ( data.token ) {
            this.auth.updateToken( data.token );
          }
        },
        error: error => {
          this.errors = error.error?.errors || {}
        }
      } )
  }
}
