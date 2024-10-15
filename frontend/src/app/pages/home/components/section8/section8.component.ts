import { Component } from '@angular/core';
import {naming} from "../../../../data/naming/naming/naming.service";

@Component({
  selector: 'app-section8',
  standalone: true,
  imports: [],
  templateUrl: './section8.component.html',
  styleUrl: './section8.component.scss'
})
export class Section8Component {

  items = [
    {id: 1, company: 'Ozon', role: 'открытая роль', profession: 'IT-специалист', skills: [{name: 'js'}, {name: 'react'}, {name: 'react'}, {name: 'js'}, {name: 'react'},
        {name: 'react'}], city: 'Moscow', status: true,
      yourSkills: [{name: 'структуры данных и алгоритмы'}, {name: 'cтруктуры данных и алгоритмы'}, {name: 'cтруктуры данных и алгоритмы'}],
      yourTasks: [{name: 'развитие в компании'}, {name: 'cтруктуры данных и алгоритмы'}, {name: 'cтруктуры данных и алгоритмы'}],
      yourProgress: [{name: 'развитие в компании'}, {name: 'cтруктуры данных и алгоритмы'}, {name: 'cтруктуры данных и алгоритмы'}]
    },
    {id: 2, company: 'Ozon', role: 'открытая роль', profession: 'IT-специалист', skills: [{name: 'vue'}, {name: 'vuex'}], city: 'Omsk', status: true,
      yourSkills: [{name: 'структуры данных и алгоритмы'}, {name: 'cтруктуры данных и алгоритмы'}, {name: 'cтруктуры данных и алгоритмы'}],
      yourTasks: [{name: 'развитие в компании'}, {name: 'cтруктуры данных и алгоритмы'}, {name: 'cтруктуры данных и алгоритмы'}],
      yourProgress: [{name: 'развитие в компании'}, {name: 'cтруктуры данных и алгоритмы'}, {name: 'cтруктуры данных и алгоритмы'}]
    },
    {id: 3, company: 'Ozon', role: 'открытая роль', profession: 'IT-специалист', skills: [{name: 'react'}, {name: 'vuex'}, {name: 'vuex'}],
      city: 'Kazan',
      status: false,
      yourSkills: [{name: 'структуры данных и алгоритмы'}, {name: 'cтруктуры данных и алгоритмы'}, {name: 'cтруктуры данных и алгоритмы'}],
      yourTasks: [{name: 'развитие в компании'}, {name: 'cтруктуры данных и алгоритмы'}, {name: 'cтруктуры данных и алгоритмы'}],
      yourProgress: [{name: 'развитие в компании'}, {name: 'труктуры данных и алгоритмы'}, {name: 'труктуры данных и алгоритмы'}]
    },
    {id: 4, company: 'Ozon', role: 'открытая роль', profession: 'IT-специалист', skills: [{name: 'vue'}, {name: 'vuex'}], city: 'Omsk', status: true,
      yourSkills: [{name: 'структуры данных и алгоритмы'}, {name: 'cтруктуры данных и алгоритмы'}, {name: 'cтруктуры данных и алгоритмы'}],
      yourTasks: [{name: 'развитие в компании'}, {name: 'cтруктуры данных и алгоритмы'}, {name: 'cтруктуры данных и алгоритмы'}],
      yourProgress: [{name: 'развитие в компании'}, {name: 'cтруктуры данных и алгоритмы'}, {name: 'cтруктуры данных и алгоритмы'}]
    },
  ]

  naming = naming;

}
