import {RouterModule, Routes} from "@angular/router";
import {ChartComponent} from "@app/features/chart/chart.component";

export const routes: Routes = [
    {
        path: '',
        component: ChartComponent,
        data: {
            pageTitle: 'Chart'
        }
    }
]

export const routing = RouterModule.forChild(routes);
