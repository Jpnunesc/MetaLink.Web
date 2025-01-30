import { NgModule } from '@angular/core';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CoreModule } from '../../core/core.module';
import { CustomerRoutingModule } from './customer-routing.module';

@NgModule({
  declarations: [CustomerListComponent, CustomerFormComponent],
  imports: [CoreModule, CustomerRoutingModule],
})
export class CustomerModule {}
