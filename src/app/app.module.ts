import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HomeComponent } from './home/home.component';
import { ImageComponent } from './image/image.component';
import { LoginComponent } from './login/login.component';
import { SocialButtonsComponent } from './social-buttons/social-buttons.component';
import { SignupComponent } from './signup/signup.component';
import { ErrorComponent } from './error/error.component';
import { FooterComponent } from './footer/footer.component';
import { AnimalsComponent } from './animals/animals.component';
import { MyclicksComponent } from './myclicks/myclicks.component';
import { PlacesComponent } from './places/places.component';
import { CreativityComponent } from './creativity/creativity.component';
import { DollComponent } from './doll/doll.component';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    HomeComponent,
    ImageComponent,
    LoginComponent,
    SocialButtonsComponent,
    SignupComponent,
    ErrorComponent,
    FooterComponent,
    AnimalsComponent,
    MyclicksComponent,
    PlacesComponent,
    CreativityComponent,
    DollComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
