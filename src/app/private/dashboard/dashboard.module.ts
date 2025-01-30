import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardStoreComponent } from './dashboard-store/dashboard-store.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FullCalendarModule } from '@fullcalendar/angular';
import { DialogModule } from 'primeng/dialog';
import { CoreModule } from '../../core/core.module';


@NgModule({
  declarations: [DashboardStoreComponent],
  imports: [
    CoreModule,
    DashboardRoutingModule,
    FullCalendarModule,
  ]
})
export class DashboardModule { }
