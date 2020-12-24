import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainLayoutComponent } from "./shared/layout/app-layouts/main-layout.component";
import {AuthLayoutComponent} from "@app/shared/layout/app-layouts/auth-layout.component";

const routes: Routes = [
  {
    path: "",
    component: AuthLayoutComponent,
    children: [
      {
        path: "",
        redirectTo: "auth",
        pathMatch: "full",
      },
      {
        path: "auth",
        loadChildren: "./features/auth/auth.module#AuthModule"
      }
    ]
  },
  {
    path: "member",
    component: MainLayoutComponent,
    children: [
      {
        path: "home",
        loadChildren: "./features/home/home.module#HomeModule"
      },
      {
        path: "access",
        loadChildren: "./features/access/access.module#AccessModule"
      },
      {
        path: "todo",
        loadChildren: "./features/todo/todo.module#TodoModule"
      },
      {
        path: "chart",
        loadChildren: "./features/chart/chart.module#ChartModule"
      },
      {
        path: "meetingRoom",
        loadChildren: "./features/meeting-room/meeting-room.module#MeetingRoomModule"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
