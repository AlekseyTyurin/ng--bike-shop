export enum MenuType {
    BRAND,
    LEFT,
    RIGHT
}

export class Menu {
    id?: number;
    menuIcon: string;
    menuName: string;
    router: string;
}
