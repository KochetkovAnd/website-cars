import { Car } from "./car";
import { Photo } from "./photo";

export interface Announcement {
    id: number,
    car: Car,
    color: string,
    price: string,
    mileage: number,
    yearOfManufacture: number,
    sellerDescription: string,
    photos: Photo[]
}