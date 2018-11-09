import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  base_url = "http://dev.hackaton.mg:8060/";

  constructor(private http : HttpClient) {

  }

  getCooperatives(){
    return this.http.get(this.base_url +"guichets");
  }

  getProvincesForCarousel() {
    return this.http.get(this.base_url +"api/provinces/infos");
  }
}
