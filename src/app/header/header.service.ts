import { Injectable } from "@angular/core";
import { HeaderModel } from "./header.model";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class HeaderService {
    private headerItems: BehaviorSubject<HeaderModel[]>;

    constructor() {
        this.headerItems = new BehaviorSubject([
            new HeaderModel('Home', 'home', 'home'),
            new HeaderModel('User', 'user', 'user'),
        ] as HeaderModel[]);
    }

    public getHeaderItems(): BehaviorSubject<HeaderModel[]> {
        return this.headerItems;
    }
}