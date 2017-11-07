import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {FlexLayoutModule} from '@angular/flex-layout';

import {AppComponent} from "./app.component";
import {NavbarComponent} from "./shared/navbar/navbar.component";
import {FooterComponent} from "./shared/footer/footer.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {Routes, RouterModule} from "@angular/router";
import {ContactComponent} from "./contact/contact.component";
import {AboutComponent} from "./about/about.component";
import {TruncatePipe} from "./shared/pipes/truncate.pipe";
import {BikeService} from "./services/bike.services";
import {LoaderComponent} from "./gallery/loader/loader.component";

import {CardComponent} from "./gallery/card";
import {ModalServiceService} from "./services/modal-service.service";
import {GroupsService} from "./services/groups.service";
import {PreviewBusService} from "./services/preview-bus.service";
import {GroupComponent} from "./gallery/group/group.component";
import {ImageComponent} from "./gallery/image/image.component";
import {ImagePreviewComponent} from "./gallery/image-preview/image-preview.component";
import {IndexPageComponent} from "./gallery/index-page/index-page.component";
import {GalleryComponent} from "./gallery/gallery.component";
import {ImageModalComponent} from "./gallery/image-modal/image-modal.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CommonModule} from "@angular/common";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {CarouselComponent} from './shared/carousel/carousel.component';
import {AngularFireModule} from "angularfire2";
import {AngularFirestoreModule} from "angularfire2/firestore";

const appRoutes: Routes = [
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'gallery', component: GalleryComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent}
];

// Must export the config
export const firebaseConfig = {
    apiKey: "AIzaSyDaU010tX-Kgh9rexkhOcurnW4sRQs59uo",
    authDomain: "ng-bike-shop.firebaseapp.com",
    databaseURL: "https://ng-bike-shop.firebaseio.com",
    projectId: "ng-bike-shop",
    storageBucket: "ng-bike-shop.appspot.com",
    messagingSenderId: "376532030333"
};

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        SidebarComponent,
        DashboardComponent,
        ContactComponent,
        AboutComponent,
        TruncatePipe,
        GalleryComponent,
        LoaderComponent,
        CardComponent,
        GroupComponent,
        ImageComponent,
        ImagePreviewComponent,
        IndexPageComponent,
        ImageModalComponent,
        CarouselComponent,
    ],
    imports: [
        CommonModule,
        BrowserModule,
        AngularFireModule.initializeApp(firebaseConfig),  // Add this
        AngularFirestoreModule,

        FormsModule,
        HttpModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        RouterModule.forRoot(
            appRoutes,
            //{enableTracing: true} // <-- debugging purposes only
        )
    ],
    providers: [
        BikeService,
        ModalServiceService,
        GroupsService,
        PreviewBusService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
