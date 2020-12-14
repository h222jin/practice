
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {RegisterComponent} from "@app/features/access/register/register.component";

const routes: Routes = [
    { path: 'register', component: RegisterComponent, pathMatch: 'full'},
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class RegisterRouting {}
