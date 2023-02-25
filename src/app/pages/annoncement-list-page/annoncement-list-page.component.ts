import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Announcement } from 'src/app/models/announcement';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-annoncement-list-page',
  templateUrl: './annoncement-list-page.component.html',
  styleUrls: ['./annoncement-list-page.component.css']
})
export class AnnoncementListPageComponent {
  constructor (
    private httpService: HttpService
  ) {}

  announcements: Announcement[] = []

  async ngOnInit() {
    this.announcements = await lastValueFrom(this.httpService.getAllAnnouncements())   
  }
}
