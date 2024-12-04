import { Component, Input } from '@angular/core';
import { naming } from "../../../data/naming/naming/naming.service";
import { NgForOf, NgIf } from "@angular/common";
import { IResume } from "../../../types/resumes";
import { Router, RouterLink } from "@angular/router";
import { OnlineComponent } from "../../online/online.component";
import { FormatComponent } from "../../format/format.component";

@Component( {
  selector: 'app-card-response',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
    OnlineComponent,
    FormatComponent,
    NgIf
  ],
  templateUrl: './card-response.component.html',
  styleUrl: './card-response.component.scss'
} )
export class CardResponseComponent {
  constructor(
    private router: Router,
  ) {
  }

  naming = naming;

  @Input()
  item?: IResume = undefined;

  viewResume() {
    this.router.navigate( [ '/search/resume/' + this.item?.id ] );
  }

  protected readonly undefined = undefined;
}
