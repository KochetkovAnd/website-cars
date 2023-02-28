import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Car } from 'src/app/models/car';
import { Photo } from 'src/app/models/photo';
import { HttpService } from 'src/app/services/http/http.service';



@Component({
  selector: 'app-create-announcement-page',
  templateUrl: './create-announcement-page.component.html',
  styleUrls: ['./create-announcement-page.component.css']
})
export class CreateAnnouncementPageComponent {

  constructor(
    private httpService: HttpService
  ) { }

  manufacturer = ""
  manufacturers: string[] = []

  model = ""
  models: string[] = []

  announcement = {
    car: {
      type: "",
      bodyType: "",
      manufacturer: "",
      model: "",
      generation: "",
      drive: "",
      engine: ""
    },
    color: "",
    price: 0,
    mileage: 0,
    yearOfManufacture: 0,
    sellerDescription: "",
    photos: [
      {url: ""}
    ]
  }

  cars: Car[] = []
  photos: Photo[] = []

  imageURL = ""

  async ngOnInit() {
    this.manufacturers = await lastValueFrom(this.httpService.getManufacturers())
  }

  async changeManufacturer() {
    this.announcement.car.generation = ""
    this.model = ""
    this.models = await lastValueFrom(this.httpService.getModelsByManufacturers(this.manufacturer))
  }

  async changeModel() {
    this.announcement.car.generation = ""
    this.cars = await lastValueFrom(this.httpService.getCarsByManufacturerAndModel(this.manufacturer, this.model))
  }

  async save() { 
    if (this.announcement.car.generation != "") {      
      if (this.announcement.color != "") {              
        this.announcement.photos = this.photos
        await lastValueFrom(this.httpService.createAnnouncement(this.announcement))
      } else {
        alert("Цвет не может быть пустой строкой") 
      }      
    } else {
      alert("Автомобиль не выбран")
    }
  }

  addPhoto() {
    this.photos.push({url: this.imageURL})
  }


}
