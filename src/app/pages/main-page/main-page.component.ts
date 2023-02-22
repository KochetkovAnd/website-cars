import { Component } from '@angular/core';
import { last, lastValueFrom } from 'rxjs';
import { Announcement } from 'src/app/models/announcement';
import { HttpService } from 'src/app/services/http/http.service';




@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  constructor (
    private httpService: HttpService
  ) {}

  announcements: Announcement[] = []
  n = 5

  async ngOnInit() {
    let data = await lastValueFrom(this.httpService.getAllAnnouncements())
    for (let i = 0; i < this.n; i++) {
      let c  = Math.floor(Math.random() * (data.length - i)) + i
      this.announcements.push(data[c])
      let t = data[c]
      data[c] = data[i]
      data[i] = t
    }   
  }
}
