import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
// COMPONENTS
import { HomeComponent } from "./components/home.component";

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ]
})
export class HomeRoutingModule {

}
