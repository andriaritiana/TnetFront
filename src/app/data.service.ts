import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient) {

  }

  getCooperatives(){
    return this.http.get("http://localhost:8060/cooperatives");
  }
}
