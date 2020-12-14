import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SharedModule} from "@app/shared/shared.module";
import {ManagementRouting} from "@app/features/access/management/management-routing";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {SmartadminDatatableModule} from "@app/shared/ui/datatable/smartadmin-datatable.module";
import {BootstrapModule} from "@app/shared/bootstrap.module";
import {SmartadminValidationModule} from "@app/shared/forms/validation/smartadmin-validation.module";
import {SmartadminInputModule} from "@app/shared/forms/input/smartadmin-input.module";
import {SmartadminWidgetsModule} from "@app/shared/widgets/smartadmin-widgets.module";
import {SecondManagementComponent} from "@app/features/access/second-management/second-management.component";
import {SecondManagementRouting} from "@app/features/access/second-management/second-management.routing";
import {TreeViewModule} from "@app/shared/ui/tree-view/tree-view.module";

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        SecondManagementRouting,
        NgxDatatableModule,
        SmartadminDatatableModule,
        BootstrapModule,
        NgxDatatableModule,
        SmartadminInputModule,
        SmartadminValidationModule,
        SmartadminWidgetsModule,
        TreeViewModule,
    ],
    declarations: [
        SecondManagementComponent
    ]
})

export class SecondManagementModule {}
