import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
// COMPONENTS
import { UserComponent } from "./components/user.component";

const routes: Routes = [
    {
        path: '',
        component: UserComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ]
})
export class UserRoutingModule {

}
