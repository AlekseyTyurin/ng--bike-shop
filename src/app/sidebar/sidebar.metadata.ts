export enum MenuType {
    BRAND,
    LEFT,
    RIGHT
}

export interface RouteInfo {
    id?: number;
    path?: string;
    title: string;
    menuType: MenuType;
    icon: string;
}
// export interface RouteInfo {
//     id: number;
//     menuIcon: string;
//     menuName: string;
//     router: string;
//     menuType: MenuType;
// }