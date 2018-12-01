import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  base_url = "http://localhost:8060/";

  constructor(private http : HttpClient) {

  }

  getCooperatives(){
    return this.http.get(this.base_url +"api/cooperatives");
  }

  getProvincesForCarousel() {
    return this.http.get(this.base_url +"api/provinces/infos");
  }
}
