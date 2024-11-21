export interface IResponsePaginate<T> {
  current_page: number;
  data: T[];
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

export interface ICity {
  id: number;
  name: string;
}

export interface ISkillPivot {
  vacancy_id?: number;
  resume_id?: number;
  skill_id: number;
}

export interface ISpecialization {
  id: number;
  name: string;
}

export interface IBaseItemType {
  id: number;
  name: string;
}

export interface ICity extends IBaseItemType {
}

export interface ISkill extends IBaseItemType {
  pivot?: ISkillPivot;
}

export interface ISpecialization extends IBaseItemType {
}

export interface IPageLink {
  url?: any;
  label: string;
  active: boolean;
}
