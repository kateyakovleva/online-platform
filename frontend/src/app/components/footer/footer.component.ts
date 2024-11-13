import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { SettingsStore } from "../../stores/SettingsStore";
import { AsyncPipe, NgIf } from "@angular/common";
import { ContentHeightService } from "../../services/ContentHeightService";

@Component( {
  selector: 'app-footer',
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
} )
export class FooterComponent implements AfterViewInit {
  constructor(
    public settings: SettingsStore,
    public height: ContentHeightService,
  ) {
  }

  @ViewChild( "ref", { read: ElementRef } )
  ref?: ElementRef = undefined;

  ngAfterViewInit() {
    this.height.footer.next( this.ref?.nativeElement?.clientHeight || 0 );
  }
}
