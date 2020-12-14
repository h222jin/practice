import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {SecondManagementComponent} from "@app/features/access/second-management/second-management.component";

const routes: Routes = [
    { path: 'second-management', component: SecondManagementComponent, pathMatch: 'full'},
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class SecondManagementRouting {}
