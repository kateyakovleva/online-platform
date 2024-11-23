import { Component, ViewEncapsulation } from '@angular/core';
import { AppClient } from "./services/AppClient";
import { ActivatedRoute, Router } from "@angular/router";

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None
} )
export class AppComponent {
  constructor(
    public client: AppClient,
    private location: ActivatedRoute,
    private router: Router,
  ) {
  }


  title = 'online-platform';
}
