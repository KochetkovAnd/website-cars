import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Announcement } from 'src/app/models/announcement';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-announcement-page',
  templateUrl: './announcement-page.component.html',
  styleUrls: ['./announcement-page.component.css']
})
export class AnnouncementPageComponent {

  constructor (
    private httpService: HttpService,
    private route: ActivatedRoute
  ) {}

  id = Number(this.route.snapshot.paramMap.get('id'))
  announcement: Announcement | undefined;
  current = -1

  async ngOnInit() {
    this.announcement = await lastValueFrom(this.httpService.getAnnouncementById(this.id))

  }

  left() {
    if (this.announcement) {
      if (this.current == 0) {
        this.current = this.announcement.photos.length -1
      } else {
        this.current -=1
      }
    }    
  }

  right() {
    if (this.announcement) {
      if (this.current == this.announcement.photos.length -1) {
        this.current = 0
      } else {
        this.current +=1
      }
    }    
  }

  exit() {
    this.current  = -1
  }
}
