import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { naming } from "../../../../data/naming/naming/naming.service";

@Component({
  selector: 'app-section1',
  standalone: true,
	imports: [
		RouterLink

	],
  templateUrl: './section1.component.html',
  styleUrl: './section1.component.scss'
})
export class Section1Component {

  naming = naming;

}
