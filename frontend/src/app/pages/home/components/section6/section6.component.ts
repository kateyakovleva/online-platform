import { Component } from '@angular/core';
import {naming} from "../../../../data/naming/naming/naming.service";

@Component({
  selector: 'app-section6',
  standalone: true,
  imports: [],
  templateUrl: './section6.component.html',
  styleUrl: './section6.component.scss'
})
export class Section6Component {

  naming = naming;
}
