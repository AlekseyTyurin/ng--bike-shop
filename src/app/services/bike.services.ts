import {Injectable} from "@angular/core";
import {Bike} from "../dashboard/bike";
import "rxjs/add/operator/map";
import {Observable} from "rxjs";
import {Http, Response} from "@angular/http";


@Injectable()
export class BikeService {

    constructor(private _http: Http) {
    }

    public getBikes(): Observable<Bike[]> {
        return this._http.get('/assets/road-bikes.json')
            .map((response: Response) => <Bike[]>response.json())
    }

}
