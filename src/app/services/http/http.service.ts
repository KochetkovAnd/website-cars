import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Announcement } from 'src/app/models/announcement';
import { Filter } from 'src/app/models/filter';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseURL = "http://localhost:4200/api"

  constructor(
    private http: HttpClient
  ) { }

  getAllAnnouncements() {
    return this.http.get<Announcement[]>(this.baseURL + "/Announcement")
  }

  getAnnouncementById(id: number) {
    return this.http.get<Announcement>(this.baseURL + "/Announcement/" + id)
  }

  getAnnouncementByFilter(filters: Filter[]) {
    return this.http.post<Announcement[]>(this.baseURL +"/Announcement/filters", filters)
  }
}
