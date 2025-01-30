import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreListComponent } from './store-list/store-list.component';
import { StoreFormComponent } from './store-form/store-form.component';

const routes: Routes = [
  {
    path: 'list',
    component: StoreListComponent,
    data: {
      titulo: 'Loja - Listagem',
      breadcrumb: 'Listagem',
    },
  },
  {
    path: 'create',
    component: StoreFormComponent,
    data: {
      titulo: 'Loja - Cadastro',
      breadcrumb: 'Cadastrar',
    },
  },
  {
    path: 'detail/:id',
    component: StoreFormComponent,
    data: {
      titulo: 'Loja - Detalhe',
      breadcrumb: 'Detalhe',
    },
  },
  {
    path: 'edit/:id',
    component: StoreFormComponent,
    data: {
      titulo: 'Loja - Edição',
      breadcrumb: 'Editar',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
