export interface ISetting {
  content: ISettingContent;
  tariffs: ISettingTariffs[];
  specializations: ISpecialization[];
  skills: ISkill[];
  cities: ICity[];
}

export interface ISettingContent {
  title: string;
  sub_title: string;
  description: string;
  description_1: string;
  description_2: string;
  advantages: string;
  advantages_company: string;
  advantages_worker: string;
  coop_educational: string;
  advantages_title: string;
  advantages_company_2: string;
  advantages_worker_2: string;
  advantages_worker_3: string;
  contact_form_description: string;
  email: string;
  telephone: string;
  offer_link: string;
  requisites_link: string;
  personal_policy_link: string;
}

export interface ISettingTariffs {
  id: number;
  name: string;
  price: number;
  description: string;
  comment: string;
  created_at: string;
  updated_at: string;
}

export interface IBaseItemType {
  id: number;
  name: string;
}

export interface ICity extends IBaseItemType {
}

export interface ISkill extends IBaseItemType {
}

export interface ISpecialization extends IBaseItemType {
}

