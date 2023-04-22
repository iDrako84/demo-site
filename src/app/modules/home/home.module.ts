import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
// COMPONENTS
import { HomeComponent } from "./components/home.component";
// ROUTER
import { HomeRoutingModule } from "./home.routing";

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,

        HomeRoutingModule
    ],
    exports: []
})
export class HomeModule {

}