import { IResume } from "./resumes";

export enum ECustomerType {
  COMPANY = 1,
  WORKER = 2
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
  is_online?: boolean;
  last_online?: string;
  tariff?: any;
  description?: string;
  city_id?: number;
}

export interface IWorker extends ICustomer {
  resume?: IResume;
}
