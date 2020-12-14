import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SharedModule} from "@app/shared/shared.module";
import {ManagementComponent} from "@app/features/access/management/management.component";
import {ManagementRouting} from "@app/features/access/management/management-routing";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {SmartadminDatatableModule} from "@app/shared/ui/datatable/smartadmin-datatable.module";
import {BootstrapModule} from "@app/shared/bootstrap.module";
import {SmartadminValidationModule} from "@app/shared/forms/validation/smartadmin-validation.module";
import {SmartadminInputModule} from "@app/shared/forms/input/smartadmin-input.module";
import {SmartadminWidgetsModule} from "@app/shared/widgets/smartadmin-widgets.module";
import {SmartadminEditorsModule} from "@app/shared/forms/editors/smartadmin-editors.module";
@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ManagementRouting,
        NgxDatatableModule,
        SmartadminDatatableModule,
        BootstrapModule,
        NgxDatatableModule,

        SmartadminInputModule,
        SmartadminValidationModule,
        SmartadminWidgetsModule,
        SmartadminEditorsModule,
    ],
    declarations: [
        ManagementComponent
    ]
})

export class ManagementModule {}
