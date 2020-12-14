import {RouterModule, Routes} from "@angular/router";

export const routes: Routes = [
    { path: '', redirectTo: 'management', pathMatch:'full' },
    { path: 'management', loadChildren: './management/management.module#ManagementModule'},
    { path: 'secondManagement', loadChildren: './second-management/second-management.module#SecondManagementModule'},
    { path: 'register', loadChildren: './register/register.module#RegisterModule'},
]
export const routing = RouterModule.forChild(routes);
