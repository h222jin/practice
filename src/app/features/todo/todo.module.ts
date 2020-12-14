import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SharedModule} from "@app/shared/shared.module";
import {TodoComponent} from "@app/features/todo/todo.component";
import {TodoRouting} from "@app/features/todo/todo.routing";
import {SmartadminWidgetsModule} from "@app/shared/widgets/smartadmin-widgets.module";
import {TodoListComponent} from "@app/features/todo/todo-list.component";
import {TodoService} from "@app/features/todo/TodoService";

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        TodoRouting,
        SmartadminWidgetsModule
    ],
    declarations: [TodoComponent, TodoListComponent],
    providers: [TodoService]
})

export class TodoModule {}
