import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsPageComponent } from './pages/rooms-page/rooms-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ReceptionhallPageComponent } from './pages/receptionhall-page/receptionhall-page.component';
import { DayoutPageComponent } from './pages/dayout-page/dayout-page.component';
import { GalleryPageComponent } from './pages/gallery-page/gallery-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const routes: Routes = [
  { path: 'rooms', component: RoomsPageComponent, title: 'Rooms' },
  { path: '', component: HomePageComponent, title: 'Home' },
  {
    path: 'reception-hall',
    component: ReceptionhallPageComponent,
    title: 'Reception Hall',
  },
  { path: 'dayout', component: DayoutPageComponent, title: 'DayOut' },
  { path: 'gallery', component: GalleryPageComponent, title: 'Gallery' },
  { path: 'login', component: LoginPageComponent, title: 'Login' },
  { path: 'register', component: LoginPageComponent, title: 'Register' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
