import { ICity, IPageLink, ISkill, ISpecialization } from "./other_types";
import { ICompany } from "./company";

export interface IVacancies {
  current_page: number;
  data: IVacancy[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: IPageLink[];
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url?: any;
  to: number;
  total: number;
}

export interface IVacancy {
  id: number;
  company_id: number;
  specialization_id: number;
  vacancy: string;
  skills_description: string;
  description: string;
  growth_description: string;
  city_id: number;
  format: string;
  price_from: number;
  price_to: number;
  price_by_agree: number;
  benefits: string;
  comment: string;
  created_at: string;
  updated_at: string;
  city?: ICity;
  skills?: ISkill[];
  specialization?: ISpecialization;
  company?: ICompany;
}
