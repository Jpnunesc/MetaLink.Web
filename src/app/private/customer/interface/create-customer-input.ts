import { PaginationInput } from '../../../core/interface/pagination-Input';

export interface CreateCustomerInput extends PaginationInput {
  ClientId: number;

  Name: string;

  Contact: string;

  Status: StatusEnum;

  EnrollmentDate: Date;

  LastPaymentDate?: Date;

  BookingWeek: number;

  UserId: number;
}

export enum StatusEnum {
  Active = 'Active',
  Inactive = 'Inactive',
}
