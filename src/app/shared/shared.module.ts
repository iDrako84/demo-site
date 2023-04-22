import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
// COMPONENTS
import { IconsComponent } from "./components/icons/icons.component";

@NgModule({
    declarations: [
        IconsComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        IconsComponent
    ]
})
export class SharedModule {

}