import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login';
import { NgModule } from '@angular/core';
const routes: Routes = [
    {
        path: '', component: LoginComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }