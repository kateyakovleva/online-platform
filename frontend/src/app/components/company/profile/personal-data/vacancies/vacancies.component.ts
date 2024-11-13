import {Component} from '@angular/core';
import {naming} from "../../../../../data/naming/naming/naming.service";
import {CardComponent} from "../../../../candidate/card/card.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-vacancies',
  standalone: true,
  imports: [
    CardComponent,
    NgForOf
  ],
  templateUrl: './vacancies.component.html',
  styleUrl: './vacancies.component.scss'
})
export class VacanciesComponent {

  naming = naming;

  items = [
    {
      id: '2342424',
      specialisation: 'Frontend',
      title: 'Собрать актуальную версию TDLib и написать пошаговую инструкцию',
      text: 'Свертка не отрабатывает, т.к. много пользовательских ошибок в данных. Необходимо разобрать обработчик и убрать лишние проверки, чтобы сформировать начальные остатки\n' +
        'по всем разделам учета. В предложении прошу называть цену, план работ и сроки.',
      price: '150 000 - 200 000 ₽',
      company: 'ООО КОМПАНИЯ ОЗОН',
      logoCompany: 'images/test.png',
      city: 'Казань',
      status: 'online'
    },
    {
      id: '2424rf',
      specialisation: 'QA',
      title: 'Собрать что-то на фронте и получить бабаок',
      text: 'Свертка не отрабатывает, т.к. много пользовательских ошибок в данных. Необходимо разобрать обработчик и убрать лишние проверки, чтобы сформировать начальные остатки\n' +
        'по всем разделам учета. В предложении прошу называть цену, план работ и сроки.',
      price: '150 000 - 200 000 ₽',
      company: 'ООО Компания-мечта',
      logoCompany: 'images/test.png',
      city: 'Москва',
      status: 'online'
    },
  ]
}
