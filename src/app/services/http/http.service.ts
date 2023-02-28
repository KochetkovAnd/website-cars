import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Announcement } from 'src/app/models/announcement';
import { Car } from 'src/app/models/car';
import { Filter } from 'src/app/models/filter';
import { Photo } from 'src/app/models/photo';

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

  getManufacturers() {
    return this.http.get<string[]>(this.baseURL + "/Car/manufacturers")
  }

  getModelsByManufacturers(manufacturer: string) {
    return this.http.get<string[]>(this.baseURL + "/Car/models/" + manufacturer)
  }

  getCarsByManufacturerAndModel(manufacturer: string, model: string) {
    return this.http.get<Car[]>(this.baseURL + "/Car/getByMNM/"+ manufacturer +"/" + model)
  }

  savePhotos(photos: Photo[]): Observable<Photo[]> {
    return this.http.post<Photo[]>(this.baseURL + "/Photo", photos)
  }

  createAnnouncement(announcement: Announcement) {
    return this.http.post<boolean>(this.baseURL + "/Announcement", announcement)
  }
}
