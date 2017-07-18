import {Component, OnInit} from "@angular/core";
import {Location} from "@angular/common";
import {MenuType} from "../../sidebar/sidebar.metadata";
import {ROUTES} from "../../sidebar/sidebar-routes.config";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


    private listTitles: any[];
    location: Location;

    constructor(location: Location) {
        this.location = location;
    }

    ngOnInit() {
        this.listTitles = ROUTES.filter(listTitle => listTitle.menuType !== MenuType.BRAND);
    }

    getTitle() {
        let titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(2);
        }
        for (let item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Home';
    }

    getPath() {
        // console.log(this.location);
        return this.location.prepareExternalUrl(this.location.path());
    }
}
