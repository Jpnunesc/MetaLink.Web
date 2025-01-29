import { PaginationInput } from '../../../core/interface/pagination-Input';

export interface CreateCustomerOutput extends PaginationInput {
  ClientId: number;

  Name: string;

  Contact: string;

  Status: StatusEnum;

  EnrollmentDate: Date;

  LastPaymentDate?: Date;

  BookingWeek: number;
}

export enum StatusEnum {
  Active = 'Active',
  Inactive = 'Inactive',
}
