import {RouterModule, Routes} from "@angular/router";
import {JoinComponent} from "@app/features/auth/join/join.component";
import {SignInComponent} from "@app/features/auth/sign-in/sign-in.component";

export const routes: Routes = [
    {
        path: '',
        component: JoinComponent,
    },
    {
        path: 'signIn',
        component: SignInComponent
    }
];
export const routing = RouterModule.forChild(routes);
