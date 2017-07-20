import { MenuType, RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
        {id: 1, icon: "home", title: "Home", path: "/dashboard", menuType: MenuType.LEFT,},
        {id: 2, icon: "camera", title: "Bike Gallery", path: "/gallery", menuType: MenuType.LEFT,},
        {id: 3, icon: "bubble_chart", title: "About", path: "/about", menuType: MenuType.LEFT,},
        // {id: 4, icon: "build", title: "Services", path: "/services", menuType: MenuType.LEFT,},
        {id: 5, icon: "import_contacts", title: "Contact", path: "/contact", menuType: MenuType.LEFT,}

];
