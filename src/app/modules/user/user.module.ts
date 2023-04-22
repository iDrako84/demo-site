import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
// COMPONENTS
import { UserComponent } from "./components/user.component";
// ROUTER
import { UserRoutingModule } from "./user.routing";

@NgModule({
    declarations: [
        UserComponent
    ],
    imports: [
        CommonModule,

        UserRoutingModule
    ],
    exports: []
})
export class UserModule {

}