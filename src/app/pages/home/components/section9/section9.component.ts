import { Component } from '@angular/core';
import {naming} from "../../../../data/naming/naming/naming.service";

@Component({
  selector: 'app-section9',
  standalone: true,
  imports: [],
  templateUrl: './section9.component.html',
  styleUrl: './section9.component.scss'
})
export class Section9Component {

  naming = naming;

}
