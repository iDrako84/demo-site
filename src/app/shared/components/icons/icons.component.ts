import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-icons',
    templateUrl: './icons.component.html',
    styleUrls: ['./icons.component.scss']
})
export class IconsComponent {
    @Input() icon: string | null;
    @Input() classIcon: string;

    constructor() {
        this.icon = null;
        this.classIcon = 'w-6 h-6';
    }

}
