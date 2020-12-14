import {NgModule} from "@angular/core";
import {JoinModule} from "@app/features/auth/join/join.module";
import {routing} from "./auth.routing";
import {JoinComponent} from "./join/join.component";
import {CommonModule} from "@angular/common";
import {AppComponent} from "@app/app.component";
import { SignInComponent } from './sign-in/sign-in.component';
import {SignInModule} from "@app/features/auth/sign-in/sign-in.module";

@NgModule({
    imports: [
        routing,
        CommonModule,
        JoinModule,
        SignInModule
    ],
    declarations: [ ],
})

export class AuthModule{}
