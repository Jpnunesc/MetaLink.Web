import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardStoreComponent } from './dashboard-store/dashboard-store.component';


const routes: Routes = [
  {
      path: 'store',
      component: DashboardStoreComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
