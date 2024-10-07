import { Component } from '@angular/core';
import {naming} from "../../../../data/naming/naming/naming.service";

@Component({
  selector: 'app-section7',
  standalone: true,
  imports: [],
  templateUrl: './section7.component.html',
  styleUrl: './section7.component.scss'
})
export class Section7Component {

  naming = naming;

}
