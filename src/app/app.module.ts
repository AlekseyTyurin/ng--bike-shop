import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {NavbarComponent} from "./shared/navbar/navbar.component";
import {FooterComponent} from "./shared/footer/footer.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {Routes, RouterModule} from "@angular/router";
import {ContactComponent} from './contact/contact.component';
import {AboutComponent} from './about/about.component';
import {TruncatePipe} from "./shared/pipes/truncate.pipe";
import {BikeService} from "./services/bike.services";



const appRoutes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        SidebarComponent,
        DashboardComponent,
        ContactComponent,
        AboutComponent,
        TruncatePipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        )
    ],
    providers: [
        BikeService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
