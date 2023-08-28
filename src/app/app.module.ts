import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RoomsPageComponent } from './pages/rooms-page/rooms-page.component';
import { ReceptionhallPageComponent } from './pages/receptionhall-page/receptionhall-page.component';
import { DayoutPageComponent } from './pages/dayout-page/dayout-page.component';
import { GalleryPageComponent } from './pages/gallery-page/gallery-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomeBannerComponent } from './components/home-banner/home-banner.component';
import { HomeMapComponent } from './components/home-map/home-map.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    RoomsPageComponent,
    ReceptionhallPageComponent,
    DayoutPageComponent,
    GalleryPageComponent,
    LoginPageComponent,
    HomeBannerComponent,
    HomeMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
