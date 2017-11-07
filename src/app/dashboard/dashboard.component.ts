import {Component, OnInit} from "@angular/core";
import {BikeService} from "../services/bike.services";
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface Bike {
    img: string;
    name: string;
    price: number;
    description: string;
}


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
    offlineBikes: any;
    errorMessage: string;

    bikesCol: AngularFirestoreCollection<Bike>;
    bikes: Observable<Bike[]>;

    constructor(private _bikeService: BikeService,
                private afs: AngularFirestore) {
    }

    ngOnInit() {
        this.getBikes();
        this.bikesCol = this.afs.collection('bikes');
        this.bikes = this.bikesCol.valueChanges();
    }

    getBikes() {
        this._bikeService.getBikes()
            .subscribe(
            data => this.offlineBikes = data,
            error => this.errorMessage = <any>error
        );
    }

}
