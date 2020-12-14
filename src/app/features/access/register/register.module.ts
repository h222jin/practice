import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SharedModule} from "@app/shared/shared.module";
import {BootstrapModule} from "@app/shared/bootstrap.module";
import {SmartadminInputModule} from "@app/shared/forms/input/smartadmin-input.module";
import {RegisterComponent} from "@app/features/access/register/register.component";
import {SmartadminValidationModule} from "@app/shared/forms/validation/smartadmin-validation.module";
import {SmartadminWidgetsModule} from "@app/shared/widgets/smartadmin-widgets.module";
import {RegisterRouting} from "@app/features/access/register/register-routing";

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        BootstrapModule,
        SmartadminInputModule,
        SmartadminValidationModule,
        SmartadminWidgetsModule,
        RegisterRouting
    ],
    declarations: [ RegisterComponent ]
})

export class RegisterModule { }
