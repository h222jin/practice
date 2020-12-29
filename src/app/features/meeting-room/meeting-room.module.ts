import {NgModule} from "@angular/core";
import {ChartComponent} from "@app/features/chart/chart.component";
import {CommonModule} from "@angular/common";
import {SharedModule} from "@app/shared/shared.module";
import {ChartJsModule} from "@app/shared/graphs/chart-js/chart-js.module";
import {SmartadminWidgetsModule} from "@app/shared/widgets/smartadmin-widgets.module";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {MeetingRoomComponent} from "@app/features/meeting-room/meeting-room.component";
import {routing} from "@app/features/meeting-room/meeting-room.routing";
import {SmartadminDatatableModule} from "@app/shared/ui/datatable/smartadmin-datatable.module";
import {RegisterModule} from "@app/features/access/register/register.module";
import {SmartadminInputModule} from "@app/shared/forms/input/smartadmin-input.module";
import {SmartadminValidationModule} from "@app/shared/forms/validation/smartadmin-validation.module";
import {BookingService} from "@app/features/meeting-room/booking.service";
import {BookingComponent} from "@app/features/meeting-room/booking.component";


@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        routing,
        SmartadminWidgetsModule,
        SmartadminDatatableModule,
        RegisterModule,
        SmartadminInputModule

    ],
    declarations: [MeetingRoomComponent, BookingComponent],
    providers: [BookingService]
})
export class MeetingRoomModule {}
