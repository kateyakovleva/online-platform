export enum ECustomerType {
  COMPANY = 1,
  WORKER = 2
}

export interface IResume {
  customer_id?: number;
  specialization_id?: number;
  vacancy?: string;
  courses?: string;
  interesting?: string;
  format?: string;
  finances?: string;
  comment?: string;
  file?: string;
}
