import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BuyAHorseComponent } from './buy-a-horse/buy-a-horse.component';
import { SellYourHorseComponent } from './sell-your-horse/sell-your-horse.component';
import { OtherServicesComponent } from './other-services/other-services.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'buy-a-horse', component: BuyAHorseComponent },
    { path: 'sell-your-horse', component: SellYourHorseComponent },
    { path: 'other-services', component: OtherServicesComponent },
    { path: '**', redirectTo: '/home', pathMatch: 'full'}
];
