import { Component, Input } from '@angular/core';
import { naming } from "../../data/naming/naming/naming.service";

@Component( {
  selector: 'online',
  standalone: true,
  imports: [],
  templateUrl: './online.component.html',
  styleUrl: './online.component.scss'
} )
export class OnlineComponent {

  naming = naming;

  @Input()
  online?: boolean = false;
  @Input()
  type: 'small' | 'large' | 'medium' = 'small';
}
