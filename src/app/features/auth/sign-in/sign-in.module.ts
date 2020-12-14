import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SharedModule} from "@app/shared/shared.module";
import {SignInComponent} from "@app/features/auth/sign-in/sign-in.component";

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
    ],
    declarations: [ SignInComponent ]
})

export class SignInModule { }
