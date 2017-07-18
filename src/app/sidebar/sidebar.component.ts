import {Component, OnInit} from "@angular/core";
// import {Menu} from "./menu.model";

import {MenuType, RouteInfo} from "./sidebar.metadata";
import {ROUTES} from "./sidebar-routes.config";

declare let $: any;
@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    showCross: boolean = true;
    setStyle: boolean = true;
    menuItems: RouteInfo[];
    selectedItem: RouteInfo;
    // menuItems: any[];

    constructor() {
    }




    ngOnInit() {
        $('[data-toggle="offcanvas"]').click(function () {
            $('#wrapper').toggleClass('toggled');
        });

        // this.menuItems = [
        //     {id: 1, menuIcon: "home", menuName: "Home", router: "/dashboard"},
        //     {id: 2, menuIcon: "bubble_chart", menuName: "About", router: "/about"},
        //     {id: 3, menuIcon: "build", menuName: "Services", router: "/services"},
        //     {id: 4, menuIcon: "import_contacts", menuName: "Contact", router: "/contact"}
        // ];

        this.menuItems = ROUTES.filter(menuItem => menuItem.menuType !== MenuType.BRAND)
    }

    hamburger_cross(): void {
        this.showCross = !this.showCross;
        this.setStyle = !this.setStyle;
    }

    onSelect(menuItem: RouteInfo) {
        this.selectedItem = menuItem;
    }
}
