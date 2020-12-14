
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {TodoComponent} from "@app/features/todo/todo.component";

const routes: Routes = [
    {
        path: '',
        component: TodoComponent,
        data: {
            pageTitle: 'Todo'
        }
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class TodoRouting {}
