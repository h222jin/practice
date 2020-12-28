import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';
import {GatewayService} from "@app/features/_service/gateway.service";
import {ApiGatewayService} from "@app/features/_service/api-gateway.service";
import {API_URL_TOKEN} from "@app/app.token";
import { ChartComponent } from './features/chart/chart.component';
import { MeetingRoomComponent } from './features/meeting-room/meeting-room.component';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        SharedModule,
        CoreModule,
    ],
    providers: [
        GatewayService,
        ApiGatewayService,
        {provide: API_URL_TOKEN, useValue: '/admin/api/v1'},


    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
