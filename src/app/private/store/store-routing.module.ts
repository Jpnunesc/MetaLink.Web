import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreListComponent } from './store-list/store-list.component';
import { StoreFormComponent } from './store-form/store-form.component';



const routes: Routes = [
  {
      path: 'list',
      component: StoreListComponent
  },
  {
    path: 'create',
    component: StoreFormComponent
  },
  {
    path: 'detail/:id',
    component: StoreFormComponent
  },
  {
    path: 'edit/:id',
    component: StoreFormComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
