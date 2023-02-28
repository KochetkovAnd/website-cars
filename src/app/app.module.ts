import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AnnouncementPageComponent } from './pages/announcement-page/announcement-page.component';
import { AnnoncementListPageComponent } from './pages/annoncement-list-page/annoncement-list-page.component';
import { CreateAnnouncementPageComponent } from './pages/create-announcement-page/create-announcement-page.component';
@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NavbarComponent,
    FooterComponent,
    AnnouncementPageComponent,
    AnnoncementListPageComponent,
    CreateAnnouncementPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
