export enum ECustomerType {
  COMPANY = 1,
  WORKER = 2
}

// * @property int $customer_id
//  * @property int $specialization_id
//  * @property string|null $vacancy
//  * @property string|null $courses
//  * @property string|null $interesting
//  * @property int $city_id
//  * @property string|null $format
//  * @property string|null $finances
//  * @property string|null $comment
//  * @property string|null $file

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
