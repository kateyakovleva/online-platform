import { Component } from '@angular/core';
import { naming } from "../../../data/naming/naming/naming.service";

@Component({
  selector: 'app-card-response',
  standalone: true,
  imports: [],
  templateUrl: './card-response.component.html',
  styleUrl: './card-response.component.scss'
})
export class CardResponseComponent {

  naming = naming;

}
