import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { homeRouting } from './home.routing';
import {HomeComponent} from "./home.component";
import { SharedModule } from '@app/shared/shared.module';
import {StatsModule} from "@app/shared/stats/stats.module";
import {SmartadminWidgetsModule} from "@app/shared/widgets/smartadmin-widgets.module";
import {SmartadminEditorsModule} from "@app/shared/forms/editors/smartadmin-editors.module";

@NgModule({
    imports: [
        CommonModule,
        homeRouting,
        SharedModule,
        StatsModule,
        SmartadminWidgetsModule,
        SmartadminEditorsModule
    ],
  declarations: [HomeComponent]
})
export class HomeModule { }
