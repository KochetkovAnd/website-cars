import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnouncementPageComponent } from './pages/announcement-page/announcement-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'announcement/:id', component: AnnouncementPageComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
