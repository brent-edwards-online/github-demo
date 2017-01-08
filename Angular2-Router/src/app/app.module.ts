import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FitnessComponent } from './fitness/fitness.component';
import { ItComponent } from './it/it.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BeolCarouselComponent } from './home/beol-carousel/beol-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    FitnessComponent,
    ItComponent,
    NavigationComponent,
    BeolCarouselComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
