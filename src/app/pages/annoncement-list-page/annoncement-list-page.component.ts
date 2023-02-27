import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Announcement } from 'src/app/models/announcement';
import { Filter } from 'src/app/models/filter';
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

  filters: Filter[] = [
    {
      name: "Кузов",
      items: [
        { isChosen: true, name: "Седан"},
        { isChosen: true, name: "Хетчбек"},
        { isChosen: true, name: "Универсал"},
        { isChosen: true, name: "Внедорожник"},
        { isChosen: true, name: "Фургон"},
        { isChosen: true, name: "Грузовик"},
        { isChosen: true, name: "Тягач"}
      ]
    },
    {
      name: "Привод",
      items: [
        { isChosen: true, name: "Передний"},
        { isChosen: true, name: "Полный"},
        { isChosen: true, name: "Задний"}
      ]
    },
    {
      name: "Производитель",
      items: [
        { isChosen: true, name: "Ford"},
        { isChosen: true, name: "Nissan"},
        { isChosen: true, name: "Skoda"},
        { isChosen: true, name: "Honda"},
        { isChosen: true, name: "Hyundai"},
        { isChosen: true, name: "Lada"},
        { isChosen: true, name: "Volkswagen"},
        { isChosen: true, name: "Volvo"},
        { isChosen: true, name: "Subaru"},
        { isChosen: true, name: "Kia"},
        { isChosen: true, name: "ГАЗ"},
        { isChosen: true, name: "MAN"},
        { isChosen: true, name: "КамАЗ"},
        { isChosen: true, name: "DAF"},
      ]
    },

  ]

  actives: boolean[] = [
    false,
    false,
    false
  ]

  announcements: Announcement[] = []

  async ngOnInit() {
    this.announcements = await lastValueFrom(this.httpService.getAllAnnouncements())   
  }

  async search() {
    this.announcements = await lastValueFrom(this.httpService.getAnnouncementByFilter(this.filters)) 
  }

  async drop() {
    this.announcements = await lastValueFrom(this.httpService.getAllAnnouncements())   
  }
}
