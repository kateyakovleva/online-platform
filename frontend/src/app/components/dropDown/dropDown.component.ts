import { Component } from '@angular/core';
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-dropDown',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './dropDown.component.html',
  styleUrl: './dropDown.component.scss'
})
export class DropDownComponent {

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
