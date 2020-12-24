import {RouterModule, Routes} from "@angular/router";
import {ChartComponent} from "@app/features/chart/chart.component";
import {MeetingRoomComponent} from "@app/features/meeting-room/meeting-room.component";

export const routes: Routes = [
    {
        path: '',
        component: MeetingRoomComponent,
        data: {
            pageTitle: 'MeetingRoom'
        }
    }
]

export const routing = RouterModule.forChild(routes);
