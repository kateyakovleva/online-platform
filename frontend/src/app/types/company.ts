import { ICustomer } from "./customer";

export interface ICompany extends ICustomer {
  vacancies: ICompanyVacancies[];
}

export interface ICompanyVacancies {
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
}
