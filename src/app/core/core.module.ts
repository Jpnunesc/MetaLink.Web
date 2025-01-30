import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { BadgeModule } from 'primeng/badge';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { RippleModule } from 'primeng/ripple';
import { RouterModule } from '@angular/router';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { AppTopBarComponent } from './layout/app-topbar/app-topbar.component';
import { AppMenuComponent } from './layout/app-menu/app-menu.component';
import { AppFooterComponent } from './layout/app-footer/app-footer.component';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';
import { AccordionModule } from 'primeng/accordion';
import { SharedModule } from 'primeng/api';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipsModule } from 'primeng/chips';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DividerModule } from 'primeng/divider';
import { ImageModule } from 'primeng/image';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MultiSelectModule } from 'primeng/multiselect';
import { PaginatorModule } from 'primeng/paginator';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { TreeModule } from 'primeng/tree';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { SpeedDialModule } from 'primeng/speeddial';
import { RequestInterceptor } from './intercept/request-interceptor';
import { ErrorInterceptor } from './intercept/alert-http-error.interceptor';
import { FieldErrorsComponent } from '../shared/field-errors/field-errors.component';
import { AppSidebarComponent } from './layout/app-sidebar/app-sidebar.component';
import { FloatLabelModule } from 'primeng/floatlabel';
import { BreadcrumbModule } from 'primeng/breadcrumb';
@NgModule({
    declarations: [
      AppLayoutComponent,
      AppTopBarComponent,
      AppSidebarComponent,
      AppMenuComponent,
      AppFooterComponent,
      PageNotFoundComponent,
      FieldErrorsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        InputTextModule,
        SidebarModule,
        BadgeModule,
        RadioButtonModule,
        InputSwitchModule,
        RippleModule,
        RouterModule,
        MenubarModule,
        ReactiveFormsModule,
        FloatLabelModule,
        BreadcrumbModule,
        ToastModule

    ],
    schemas: [
      CUSTOM_ELEMENTS_SCHEMA
    ],
    exports: [
      CommonModule,
      CardModule,
      AccordionModule,
      TableModule,
      SplitButtonModule,
      DividerModule,
      ButtonModule,
      CalendarModule,
      SharedModule,
      TabViewModule,
      InputTextModule,
      AutoCompleteModule,
      InputSwitchModule,
      ChipsModule,
      ToastModule,
      ImageModule,
      ProgressSpinnerModule,
      RadioButtonModule,
      CheckboxModule,
      InputTextareaModule,
      InputNumberModule,
      ConfirmDialogModule,
      MultiSelectModule,
      AccordionModule,
      PaginatorModule,
      DialogModule,
      TreeModule,
      FieldErrorsComponent,
      SpeedDialModule,
      ReactiveFormsModule,
      FloatLabelModule,
      BreadcrumbModule
    ],
    providers: [
      {
        provide: HTTP_INTERCEPTORS,
        useClass: RequestInterceptor,
        multi: true
      },
      {
        provide: HTTP_INTERCEPTORS,
        useClass: ErrorInterceptor,
        multi: true
      }
  ],
})
export class CoreModule { }
