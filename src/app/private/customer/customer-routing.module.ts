import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';

const routes: Routes = [
  {
    path: 'list',
    component: CustomerListComponent,
  },
  {
    path: 'create',
    component: CustomerFormComponent,
  },
  {
    path: 'detail/:id',
    component: CustomerFormComponent,
  },
  {
    path: 'edit/:id',
    component: CustomerFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {}
