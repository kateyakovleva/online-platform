import { IWorker } from "./customer";
import { ICity, IPageLink, ISkill, ISpecialization } from "./other_types";

export interface IResumes {
  current_page: number;
  data: IResume[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: IPageLink[];
  next_page_url?: any;
  path: string;
  per_page: number;
  prev_page_url?: any;
  to: number;
  total: number;
}


export interface IResume {
  id: number;
  customer_id: number;
  specialization_id: number;
  vacancy: string;
  courses: string;
  interesting: string;
  city_id: number;
  format: string;
  finances: string;
  comment: string;
  file?: any;
  created_at: string;
  updated_at: string;
  city: ICity;
  skills: ISkill[];
  specialization: ISpecialization;
  worker: IWorker;
}
