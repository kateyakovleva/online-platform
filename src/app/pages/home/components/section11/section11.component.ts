import { Component } from '@angular/core';
import {naming} from "../../../../data/naming/naming/naming.service";

@Component({
  selector: 'app-section11',
  standalone: true,
  imports: [],
  templateUrl: './section11.component.html',
  styleUrl: './section11.component.scss'
})
export class Section11Component {

  naming = naming;

}
