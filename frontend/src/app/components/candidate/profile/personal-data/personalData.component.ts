import { Component } from '@angular/core';
import { naming } from "../../../../data/naming/naming/naming.service";
import { RouterLink } from "@angular/router";
import { UserStore } from "../../../../stores/UserStore";
import { async } from "rxjs";
import { AsyncPipe, NgIf } from "@angular/common";

@Component( {
  selector: 'app-personalData',
  standalone: true,
  imports: [ RouterLink, AsyncPipe, NgIf ],
  templateUrl: './personalData.component.html',
  styleUrl: './personalData.component.scss'
} )
export class PersonalDataComponent {

  naming = naming;

  constructor(
    public user: UserStore,
  ) {
  }

  protected readonly async = async;
}
