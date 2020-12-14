import {NgModule} from "@angular/core";
import {SharedModule} from "@app/shared/shared.module";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {routing} from "@app/features/access/access.routing";
import {ManagementModule} from "@app/features/access/management/management.module";
import {RegisterModule} from "@app/features/access/register/register.module";
import {SecondManagementModule} from "@app/features/access/second-management/second-management.module";


@NgModule({
    imports: [
        SharedModule,
        NgxDatatableModule,
        routing,
        ManagementModule,
        RegisterModule,
        SecondManagementModule
    ],
    declarations: [ ],
    providers: []
})

export class AccessModule{}
