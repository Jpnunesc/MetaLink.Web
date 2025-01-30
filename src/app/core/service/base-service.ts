import { HttpParams } from '@angular/common/http';

export class BaseService {
  protected convertToHttpParams(filter: any): HttpParams {
    let params = new HttpParams();

    for (const key in filter) {
      if (Object.prototype.hasOwnProperty.call(filter, key)) {
        let value = (filter as any)[key];
        if (value !== undefined && value !== null) {
          if (Array.isArray(value)) {
            value.forEach((item: any) => {
              params = params.append(key, item);
            });
          } else {
            if (value instanceof Date) {
              value = value.toISOString();
            }
            params = params.set(key, value.toString());
          }
        }
      }
    }
    return params;
  }

  public appendasicFields(formData: FormData, entryData: any): void {
    for (const key of Object.keys(entryData) as (keyof object)[]) {
      const value = entryData[key];
      if (value === undefined || value === null || value === '' || value === 'null') {
        continue;
      }
      if (!(value instanceof Object)) {
        formData.append(key, value);
      }
    }
  }
}
