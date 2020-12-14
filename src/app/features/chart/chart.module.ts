import {NgModule} from "@angular/core";
import {ChartComponent} from "@app/features/chart/chart.component";
import {CommonModule} from "@angular/common";
import {SharedModule} from "@app/shared/shared.module";
import {ChartJsModule} from "@app/shared/graphs/chart-js/chart-js.module";
import {routing} from "@app/features/chart/chart.routing";

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ChartJsModule,
        routing
    ],
    declarations: [ChartComponent]
})
export class ChartModule {}
