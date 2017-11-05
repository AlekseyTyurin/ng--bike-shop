import {Component, OnInit} from "@angular/core";
import {Bike} from "./bike";
import {BikeService} from "../services/bike.services";
// import {BikeService} from "./dashboard.service";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
    bikes: any;
    errorMessage: string;

    constructor(private _bikeService: BikeService) {
    }

    ngOnInit() {
        this.getBikes()
    }

    getBikes() {
        this._bikeService.getBikes()
            .subscribe(
            data => this.bikes = data,
            error => this.errorMessage = <any>error
        );
    }

}
