import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "@app/features/dashboard/dashboard.component";

export const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        data: {
            pageTitle: 'Dashboard'
        }
    }
]

export const routing = RouterModule.forChild(routes);
