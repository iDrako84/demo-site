import { Component, HostBinding } from "@angular/core";
// SERVICE
import { HeaderService } from "./header.service";
import { BehaviorSubject } from "rxjs";
import { HeaderModel } from "./header.model";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    @HostBinding('class') private setClass = 'min-w-[238px] max-w-[238px]';
    headerItems: BehaviorSubject<HeaderModel[]>;

    constructor(
        private _headerService: HeaderService
    ) {
        this.headerItems = this._headerService.getHeaderItems();
    }
}
