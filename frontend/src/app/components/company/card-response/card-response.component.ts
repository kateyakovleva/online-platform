import { Component, Input } from '@angular/core';
import { naming } from "../../../data/naming/naming/naming.service";
import { NgForOf } from "@angular/common";
import { IResume } from "../../../types/resumes";

@Component( {
  selector: 'app-card-response',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './card-response.component.html',
  styleUrl: './card-response.component.scss'
} )
export class CardResponseComponent {

  naming = naming;

  @Input()
  item?: IResume = undefined;
}
