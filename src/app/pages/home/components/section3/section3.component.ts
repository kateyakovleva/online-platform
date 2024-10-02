import { Component } from '@angular/core';
import {naming} from "../../../../data/naming/naming/naming.service";

@Component({
  selector: 'app-section3',
  standalone: true,
  imports: [],
  templateUrl: './section3.component.html',
  styleUrl: './section3.component.scss'
})
export class Section3Component {

  naming = naming;
}
