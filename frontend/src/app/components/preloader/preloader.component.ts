import { Component } from '@angular/core';


@Component( {
  selector: 'app-preloader',
  standalone: true,
  templateUrl: './preloader.component.html',
  styleUrl: './preloader.component.scss',
  host: {
    class: 'position-absolute'
  }
} )
export class PreloaderComponent {
}
