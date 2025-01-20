import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './store-routing.module';
import { StoreListComponent } from './store-list/store-list.component';
import { StoreFormComponent } from './store-form/store-form.component';
import { CoreModule } from '../../core/core.module';




@NgModule({
  declarations: [StoreListComponent, StoreFormComponent],
  imports: [
    CoreModule,
    DashboardRoutingModule
  ]
})
export class StoreModule { }
