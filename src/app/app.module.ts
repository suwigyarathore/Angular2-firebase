import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListingsComponent } from './components/listings/listings.component';
import { AddListingComponent } from './components/add-listings/add-listing.component';
import { EditListingComponent } from './components/edit-listings/edit-listing.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListingComponent } from './components/listing/listing.component';

import { FirebaseService } from './services/firebase.service';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'listings', component: ListingsComponent},
  {path: 'listing/:id', component: ListingComponent},
  {path: 'add-listing', component: AddListingComponent},
  {path: 'edit-listing/:id', component: EditListingComponent},
];

const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyBNwJPOAuD6fV8dblXT54DLApsJ85m6tGA',
  authDomain: 'ng-fire2.firebaseapp.com',
  databaseURL: 'https://ng-fire2.firebaseio.com',
  storageBucket: 'ng-fire2.appspot.com',
  messagingSenderId: '375250310089'
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingsComponent,
    AddListingComponent,
    EditListingComponent,
    NavbarComponent,
    ListingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlashMessagesModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
