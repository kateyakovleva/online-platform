import { Component, Input } from '@angular/core';
import { naming } from "../../data/naming/naming/naming.service";

@Component( {
  selector: 'format',
  standalone: true,
  imports: [],
  templateUrl: './format.component.html',
  styleUrl: './format.component.scss'
} )
export class FormatComponent {

  naming = naming;

  @Input()
  format?: string = '';
  @Input()
  type: 'small' | 'large' | 'medium' = 'small';
}
