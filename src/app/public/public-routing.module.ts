import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [RouterModule.forChild([
        // { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
        { path: '**', redirectTo: '' }
    ])],
    exports: [RouterModule]
})
export class PublicRoutingModule { }
