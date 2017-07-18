import {Injectable, OnInit} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {IBike} from "../dashboard/bike";
import 'rxjs/add/operator/map';


@Injectable()

export class BikeService {

    //constructor(private _http: Http) {}


    // getBikes(): Observable<IBike[]> {
    //     return this._http.get('api/bikes/road-bikes.json')
    //         .map((response: Response) => <IBike[]>response.json())
    // }

    getBikes(): IBike[] {
        return [
            {
                bikeName: "Cannondale SuperSix EVO Hi-MOD Dura-Ace 1",
                bikePrice: "8299.99",
                bikeImageUrl: "../../assets/images/cannondale-supersix-evo-hi-mod-dura-ace-277975-11-sm.jpg",
                description: "For the ultimate all-around race performance, the SuperSix EVO strikes the perfect balance. Its unrivaled blend of light weight, stiffness, aerodynamics and smooth-riding compliance gives you the winning edge on every part of the race course. For serious road racers, or people looking to ride like one, the SuperSix EVO is a perfect choice. Shimano's Dura-Ace drivetrain is the pinnacle of shifting excellence, and their caliper brakes are smooth and powerful enough to ensure the utmost confidence for the discerning rider. Cannondale's own fine components make a stiff, sprint-ready cockpit, while Mavic's Ksyrium Pro Carbon SL rims fly to rocket speeds. A Fizik Arione saddle completes this incredible machine, leaving only one question: are you super enough to handle the SuperSix?"
            },
            {
                bikeName: "Cannondale SuperSix EVO Hi-MOD RED eTAP",
                bikePrice: "7999.99",
                bikeImageUrl: "../../assets/images/cannondale-supersix-evo-hi-mod-etap-277974-1-sm.jpg",
                description: "For the ultimate all-around race performance, the SuperSix EVO strikes the perfect balance. Its unrivaled blend of light weight, stiffness, aerodynamics and smooth-riding compliance gives you the winning edge on every part of the race course. Cut the cords with SRAM's groundbreaking eTap wireless component group, and enjoy smooth, precise shifting and powerful braking performance. Cannondale Hollowgram carbon clinchers and Schwalbe tires reach rolling speeds fast, and provide plenty of traction in the corners. Completed with Cannondale's own carbon handlebar and Ultralight stem, your cockpit is plenty stiff enough for finish line sprints, and a Fizik Arione saddle is supportive for long days in the saddle."
            },
            {
                bikeName: "Cannondale SuperSix EVO Hi-MOD Disc Ultegra Di2",
                bikePrice: "6199.99",
                bikeImageUrl: "../../assets/images/cannondale-supersix-evo-hydraulic-disc-ultegra-di2-277981-1-sm.jpg",
                description: "For the ultimate all-around race performance, the SuperSix EVO strikes the perfect balance. Its unrivaled blend of stiffness, aerodynamics, low weight, and smooth-riding compliance gives you the winning edge on every part of the race course. With a super light Hi-Mod carbon frame featuring Cannondale's innovative Speed Save and TAP Aero technologies, you'll fly up tough climbs and find your Fabian legs on the flats. Cannondale spec'd this model with the luxe Shimano Ultegra Di2 electronic shifting group, hydraulic disc brakes, lightweight carbon clincher rims, and their own aluminum handlebar and stem."
            },
            {
                bikeName: "Cannondale Synapse Hi-MOD Disc Ultegra Di2",
                bikePrice: "5999.99",
                bikeImageUrl: "../../assets/images/cannondale-synapse-hydraulic-disc-ultegra-di2-277919-11-sm.jpg",
                description: "Cannondale's Synapse Hi-MOD is the perfect balance of raw power and all-day ride-ability. It's race-proven combination of endurance geometry, low weight, and road-smoothing comfort is ready for anything from the cobbles of the UCI WorldTour to your first century. The BallisTec Hi-MOD carbon frame features Cannondale's Endurance Geometry for the ideal balance between pure race position and upright comfort. The shaped blades and offset dropouts of the SAVE PLUS fork allow the front wheel to track smoothly over rough surfaces. Cannondale's carbon HollowGram Si wheels are stiff. incredibly responsive, and tubeless ready. They're paired with tubeless Schwalbe Pro ONE tires for a plush ride and loads of traction across rough surfaces and at high speeds. Shimano's flawless Ultegra Di2 drivetrain gives you instant shifting and a wide range for those steep climbs. Powerful hydraulic disc brakes provide smooth modulation and plenty of power, and a lineup of high quality components straight from Cannondale, the Synapse is near impossible to beat."
            },
            {
                bikeName: "Liv Envie Advanced Pro 0",
                bikePrice: "7500.99",
                bikeImageUrl: "../../assets/images/liv-envie-advanced-pro-0-womens-264240-1-sm.jpg",
                description: "A proven winner with big-time race victories, Liv's Envie Advanced Pro 0 is the reigning queen of aero road. Attack, sprint, get that podium. It’s no surprise that the first women’s-specific aero road bike would be eye-catchingly sleek with elegant finishing, but this speedy weapon can also dish it out in all aspects of speed and handling. With an ultra-lightweight build, this bike gets downright punchy on the climbs and greater stiffness means precise handling. It all adds up to the ultimate aero race machine for sprints, short-distance triathlons and everyday training on the road. "
            },
            {
                bikeName: "Cannondale Supersix EVO Black Inc.",
                bikePrice: "12499.99",
                bikeImageUrl: "../../assets/images/cannondale-supersix-evo-black-inc-277968-1-sm.jpg",
                description: "The SuperSix EVO Black Inc. makes crushing the competition a formal affair. With its unrivaled blend of stiffness, aerodynamics, low weight, and smooth-riding compliance, you'll be armed with the winning edge on every part of the race course. Cannondale's SuperSix EVO Black Inc. is a beastly climber and a full-octane sprinter thanks to its full Hi-Mod carbon frame and dialed-in race geometry. With luxurious ENVE carbon rims and Schwalbe ONE clincher tires, you'll accelerate fast and maintain control even in tricky conditions. Shimano's best-of-the-best Dura-Ace Di2 drivetrain is primed to provide perfect gear shifts, while Dura-Ace caliper brakes are smooth, powerful, and unfailing in their performance. An ENVE carbon stem and handlebar create the command center, and a Fizik Arione saddle is supportive, lightweight, and svelte enough for the long haul or the final burst of speed."
            }
        ]
    }
}
