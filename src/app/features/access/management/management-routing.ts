
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ManagementComponent} from "@app/features/access/management/management.component";

const routes: Routes = [
    { path: 'management', component: ManagementComponent, pathMatch: 'full'},
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ManagementRouting {}
