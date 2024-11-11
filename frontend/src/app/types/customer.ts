import { ICity, ISkill, ISpecialization } from "./other_types";

export enum ECustomerType {
  COMPANY = 1,
  WORKER = 2
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
}

export interface ICustomer {
  id: number;
  type: number;
  name: string;
  image: string;
  email: string;
  phone: string;
  data?: any;
  tariff_id?: any;
  tariff_end_of?: any;
  email_verified_at: string;
  deleted_at?: any;
  created_at: string;
  updated_at: string;
  photo?: any;
  is_company: boolean;
  tariff?: any;
}

export interface IWorker extends ICustomer {
  resume?: IResume;
}
