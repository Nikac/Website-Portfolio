import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

import { PortfolioService } from './services/portfolio.service';
import { ClientsComponent } from './components/portfolio/clients/clients.component';
import { OurServiceComponent } from './components/our-service/our-service.component';
import { ServiceComponent } from './components/our-service/service/service.component';
import { OurService } from './services/our.service';
import { BlogComponent } from './components/blog/blog.component';
import { BlogService } from './services/blog.service';
import { OneBlogComponent } from './components/blog/one-blog/one-blog.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PortfolioComponent,
    ClientsComponent,
    OurServiceComponent,
    ServiceComponent,
    BlogComponent,
    OneBlogComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    PortfolioService,
    OurService,
    BlogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
