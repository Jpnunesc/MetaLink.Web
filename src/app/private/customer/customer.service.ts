import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { environment } from '../../../environments/environment';
import { BaseService } from '../../core/service/base-service';
import { PaginationOutput } from '../../core/interface/pagination-output';
import { ResultOutput } from '../../core/interface/result-output';
import { PaginationInput } from '../../core/interface/pagination-Input';
import { CreateCustomerOutput } from './interface/create-customer-output';
import { CreateCustomerInput } from './interface/create-customer-input';

@Injectable({
  providedIn: 'root',
})
export class CustomerService extends BaseService {
  private http = inject(HttpClient);
  private baseURI = `${environment.meta_api}/customer`;

  public paged = (
    filter: PaginationInput
  ): Observable<ResultOutput<PaginationOutput<CreateCustomerOutput>>> => {
    const params = this.convertToHttpParams(filter);
    return this.http
      .get<ResultOutput<PaginationOutput<CreateCustomerOutput>>>(
        `${this.baseURI}/paged`,
        { params }
      )
      .pipe(take(1));
  };

  public create = (
    input: CreateCustomerInput
  ): Observable<ResultOutput<CreateCustomerOutput>> => {
    const formData = new FormData();
    this.appendasicFields(formData, input);
    return this.http
      .post<ResultOutput<CreateCustomerOutput>>(`${this.baseURI}`, formData)
      .pipe(take(1));
  };
}
