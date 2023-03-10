import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnoncementListPageComponent } from './pages/annoncement-list-page/annoncement-list-page.component';
import { AnnouncementPageComponent } from './pages/announcement-page/announcement-page.component';
import { CreateAnnouncementPageComponent } from './pages/create-announcement-page/create-announcement-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'announcement/:id', component: AnnouncementPageComponent},
  { path: 'announcements', component: AnnoncementListPageComponent},
  { path: 'create-announcement', component: CreateAnnouncementPageComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
