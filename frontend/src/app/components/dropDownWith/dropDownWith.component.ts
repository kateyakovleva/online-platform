import { Component } from '@angular/core';
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-dropDownWith',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './dropDownWith.component.html',
  styleUrl: './dropDownWith.component.scss'
})
export class DropDownWithComponent {

  items = [
    {name: 'найти работу'},
    {name: 'мои отклики'},
    {name: 'найти работу'},
    {name: 'входящие предложения'},
    {name: 'выход'},
  ]

  items_list: boolean = false;

  showItemsList() {

      this.items_list = !this.items_list;

  };

}
