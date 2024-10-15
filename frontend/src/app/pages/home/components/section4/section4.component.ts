import { Component } from '@angular/core';
import {naming} from "../../../../data/naming/naming/naming.service";

@Component({
  selector: 'app-section4',
  standalone: true,
  imports: [],
  templateUrl: './section4.component.html',
  styleUrl: './section4.component.scss'
})
export class Section4Component {

  items = [
    {id: 1, profession: 'IT-специалист', skills: [{name: 'scala'}, {name: 'react'}, {name: 'java'}, {name: 'js'}, {name: 'C/C++'},
        {name: 'PHP'}], city: 'Moscow', status: true,
      tasks: [{name: 'написание, отладку и тестирование кода'}, {name: 'анализ и написание алгоритмов'}, {name: 'работу с системами контроля версий (Git)'}],
      courses: [{name: 'skillbox, разработчик фронтенд'}, {name: 'яндекс-практикум, разработчик бэкенд'}, {name: 'skillbox, разработчик фронтенд'}]
    },
    {id: 2, profession: 'IT-специалист', skills: [{name: 'vue'}, {name: 'C/C++'}], city: 'Omsk', status: true,
      tasks: [{name: 'написание, отладку и тестирование кода'}, {name: 'анализ и написание алгоритмов'}, {name: 'работу с системами контроля версий (Git)'}],
      courses: [{name: 'skillbox, разработчик фронтенд'}, {name: 'яндекс-практикум, разработчик бэкенд'}, {name: 'skillbox, разработчик фронтенд'}]
    },
    {id: 3, profession: 'IT-специалист', skills: [{name: 'react'}, {name: 'vuex'}, {name: 'C/C++'}],
      city: 'Kazan',
      status: false,
      tasks: [{name: 'написание, отладку и тестирование кода'}, {name: 'анализ и написание алгоритмов'}, {name: 'работу с системами контроля версий (Git)'}],
      courses: [{name: 'skillbox, разработчик фронтенд'}, {name: 'яндекс-практикум, разработчик бэкенд'}, {name: 'skillbox, разработчик фронтенд'}]
    },

  ]

  naming = naming;
}
