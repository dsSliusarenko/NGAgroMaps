import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {NavigationModule} from "./ui/navigation/navigation.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {HeaderModule} from "./ui/header/header.module";
import {ProfileSectionModule} from "./ui/profile-section/profile-section.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NavigationModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HeaderModule,
    ProfileSectionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
