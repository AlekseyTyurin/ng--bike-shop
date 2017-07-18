import {Component, OnInit} from "@angular/core";
import {IBike} from "./bike";
import {BikeService} from "./bike.services";
// import {BikeService} from "./dashboard.service";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    bikes: IBike[];
    errorMessage: string;

    constructor(private _bikeService: BikeService) {
        //this.bikes = _bikeService.getBikes();
    }

    ngOnInit() {
        this.getBikes()
    }

    getBikes() {
        this._bikeService.getBikes()
            .subscribe(
            books => this.bikes = books,
            error => this.errorMessage = <any>error
        );
    }

}
