import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: LoginComponent, },
    ])],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
