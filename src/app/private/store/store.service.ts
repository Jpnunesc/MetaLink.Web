import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { environment } from '../../../environments/environment';
import { BaseService } from '../../core/service/base-service';
import { PaginationOutput } from '../../core/interface/pagination-output';
import { ResultOutput } from '../../core/interface/result-output';
import { SearchUserPagedOutput } from './interface/search-user-paged-output';
import { SearchUserPagedInput } from './interface/search-user-paged-input';
import { CreateUserOutput } from './interface/create-user-output';
import { CreateUserInput } from './interface/create-user-input';

@Injectable({
  providedIn: 'root',
})
export class StoreService extends BaseService {
  private http = inject(HttpClient);
  private baseURI = `${environment.meta_api}/store`;

  public paged = (
    filter: SearchUserPagedInput
  ): Observable<ResultOutput<PaginationOutput<SearchUserPagedOutput>>> => {
    const params = this.convertToHttpParams(filter);
    return this.http.get<
      ResultOutput<PaginationOutput<SearchUserPagedOutput>>
    >(`${this.baseURI}/paged`, { params }).pipe(take(1));
  }

  public create = (input: CreateUserInput): Observable<ResultOutput<CreateUserOutput>> => {
    const formData = new FormData();
    this.appendasicFields(formData, input);
     return this.http.post<ResultOutput<CreateUserOutput>>(`${this.baseURI}`, formData).pipe(take(1));
  };

}
