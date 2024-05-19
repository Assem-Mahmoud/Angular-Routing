import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectLayoutComponent } from './components/project-layout/project-layout.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PortofolioPageComponent } from './components/portofolio-page/portofolio-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectLayoutComponent,
    HomePageComponent,
    PortofolioPageComponent,
    AboutPageComponent,
    ContactPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
