import { Component, OnInit } from '@angular/core';
import {Image} from "./image.model";

//IMAGES array implementing Image interface
let IMAGES: Image[] = [
  { "title": "We are covered", "url": "../../../assets/images/carousel-img/bicycle-gear-golden-hipster-42328-wide.jpeg" },
  { "title": "Generation Gap", "url": "../../../assets/images/carousel-img/pexels-photo-126660-wide.jpeg" },
  { "title": "Potter Me", "url": "../../../assets/images/carousel-img/pexels-photo-536692-wide.jpeg" },
  { "title": "Pre-School Kids", "url": "../../../assets/images/carousel-img/sport-bike-bicycle-fitness-wide.jpg" },
  { "title": "Young Peter Cech", "url": "../../../assets/images/carousel-img/pexels-photo-545007-wide.jpeg" }
];

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public images = IMAGES;

}
