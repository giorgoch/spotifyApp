import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { AboutComponent } from './about/about.component';
import { appRouterProviders} from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    AboutComponent
=======

@NgModule({
  declarations: [
    AppComponent
>>>>>>> d88f20f86f03ae1bf23e56a730134c48f0e5d513
  ],
  imports: [
    BrowserModule,
    FormsModule,
<<<<<<< HEAD
    HttpModule,
    appRouterProviders
=======
    HttpModule
>>>>>>> d88f20f86f03ae1bf23e56a730134c48f0e5d513
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
