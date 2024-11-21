import { IResume } from "./resumes";
import { IVacancy } from "./vacancies";
import { IResponsePaginate } from "./other_types";

export type IResponses = IResponsePaginate<IResponse>;

export interface IResponse {
  id: number;
  resume_id: number;
  vacancy_id: number;
  created_at: string;
  updated_at: string;
  type: ResponseType;
  resume: IResume;
  vacancy: IVacancy;
}

export enum EResponseType {
  INIT_COMPANY = 1,
  INIT_WORKER = 2
}
