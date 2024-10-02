import { Component } from '@angular/core';
import {naming} from "../../../../data/naming/naming/naming.service";

@Component({
  selector: 'app-section2',
  standalone: true,
  imports: [

  ],
  templateUrl: './section2.component.html',
  styleUrl: './section2.component.scss'
})
export class Section2Component {

  naming = naming;

}
