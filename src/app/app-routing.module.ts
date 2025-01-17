import { NgModule } from '@angular/core';
import { AppLayoutComponent } from './core/layout/app-layout/app-layout.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [         {
  path: '',
  component: AppLayoutComponent,
  children: [
    {
      path: 'public',
      loadChildren: () =>
        import('./public/public.module').then((m) => m.PublicModule),
    },
    {
      path: 'private',
      loadChildren: () =>
        import('./private/private.module').then((m) => m.PrivateModule),
    },
  ],
},
{
  path: 'auth',
  loadChildren: () =>
    import('./auth/auth.module').then((m) => m.AuthModule),
},
{ path: '**',
  component: AppLayoutComponent
},];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false,
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
