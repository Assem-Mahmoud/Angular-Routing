import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProjectLayoutComponent } from './components/project-layout/project-layout.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { PortofolioPageComponent } from './components/portofolio-page/portofolio-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        component: HomePageComponent,
        data: {
          title: 'Home',
        },
      },
      {
        path: 'about',
        component: AboutPageComponent,
        data: {
          title: 'About',
        },
      },
      {
        path: 'portfolio',
        component: PortofolioPageComponent,
        data: {
          title: 'Portfolio',
        },
      },
      {
        path: 'contact',
        component: ContactPageComponent,
        data: {
          title: 'Contact',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
