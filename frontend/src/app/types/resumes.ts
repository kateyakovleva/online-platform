import { IWorker } from "./customer";
import { ICity, IResponsePaginate, ISkill, ISpecialization } from "./other_types";

export type IResumes = IResponsePaginate<IResume>;

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
  city?: ICity;
  skills?: ISkill[];
  specialization?: ISpecialization;
  worker?: IWorker;
}
