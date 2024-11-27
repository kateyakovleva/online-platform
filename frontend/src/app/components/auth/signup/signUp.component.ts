import { Component, ElementRef, ViewChild } from '@angular/core';
import { naming } from "../../../data/naming/naming/naming.service";
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from "@angular/router";
import { SettingsStore } from "../../../stores/SettingsStore";
import { AsyncPipe, NgIf } from "@angular/common";
import { ECustomerType } from "../../../types/customer";
import { FormsModule } from "@angular/forms";
import { RegisterStore } from "../../../stores/RegisterStore";
import { AppClient } from "../../../services/AppClient";
import { AuthStore } from "../../../stores/AuthStore";

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
  constructor(
    public settings: SettingsStore,
    private http: AppClient,
    private router: Router,
    private regStore: RegisterStore,
    private auth: AuthStore,
    private location: ActivatedRoute,
  ) {
    this.auth.auth$.subscribe( ( a ) => {
      if ( a ) {
        this.router.navigate( [ "/profile" ] );
      }
    } );

    this.type = Number( location.snapshot.queryParams[ 'is_company' ] || '1' );
  }

  naming = naming;

  type = ECustomerType.WORKER;

  errors: any = {}

  changeType( e: any ) {
    this.type = Number( e.target.value );
    this.changeRouteType();
  }

  changeRouteType() {
    this.router.navigate( [ this.router.url.split( '?' )[ 0 ] ], {
      queryParams: {
        is_company: this.type
      },
    } );
  }

  protected readonly ECustomerType = ECustomerType;

  signUp( $event: SubmitEvent ) {
    $event.preventDefault();
    this.regStore.registerData.next( new FormData( $event.target as HTMLFormElement ) );
    this.http.post( '/register', this.regStore.registerData.getValue() )
      .subscribe( {
        next: data => {
          this.router.navigate( [ "/verify" ] );
        },
        error: error => {
          this.errors = error.error?.errors || {}
        }
      } )
  }

  @ViewChild( 'password', { static: false } )
  password: ElementRef | null = null;

  @ViewChild( 'confirm', { static: false } )
  confirm: ElementRef | null = null;

  comparePassword( event: Event ) {
    if ( this.password?.nativeElement?.value !== this.confirm?.nativeElement?.value ) {
      this.errors.password = [ 'Введенные пароли не совпадают.' ];
    } else {
      delete this.errors.password;
    }
  }

  protected readonly Object = Object;
}
