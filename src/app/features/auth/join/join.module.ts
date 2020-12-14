import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SharedModule} from "@app/shared/shared.module";
import {JoinComponent} from "@app/features/auth/join/join.component";

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
    ],
    declarations: [ JoinComponent ]
})

export class JoinModule { }
