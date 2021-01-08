import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SharedModule} from "@app/shared/shared.module";
import {ChartJsModule} from "@app/shared/graphs/chart-js/chart-js.module";
import {SmartadminWidgetsModule} from "@app/shared/widgets/smartadmin-widgets.module";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {DashboardComponent} from "@app/features/dashboard/dashboard.component";
import {routing} from "@app/features/dashboard/dashboard.routing";

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ChartJsModule,
        SmartadminWidgetsModule,
        NgxDatatableModule,
        routing
    ],
    declarations: [DashboardComponent]
})
export class DashboardModule {}
