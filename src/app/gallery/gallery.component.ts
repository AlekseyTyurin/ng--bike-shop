import {Component, OnInit, ViewEncapsulation} from "@angular/core";
import {trigger, transition} from "@angular/animations";

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css'],
    encapsulation: ViewEncapsulation.None,
    animations: [
        // trigger('routerAnimations', [
        //     transition()
        // ])
    ]
})
export class GalleryComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
