import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import 'rxjs/add/operator';
import { Observable } from 'rxjs/Rx';
import { Voyage } from './state/voyage.interface';

@Injectable({
  providedIn: 'root'
})
export class VoyageService {

  private URL_SERVICE:any = 'http://tnet-service:3000';

  constructor(private http:HttpClient) {}

  get_all_cooperatives(){
    return this.http.get(this.URL_SERVICE + '/cooperative');
  }

  get_all_villes(){
    return this.http.get(this.URL_SERVICE + '/ville');
  }

  get_all_chauffeurs(){
    return this.http.get(this.URL_SERVICE + '/chauffeur');
  }

  get_all_listages(){
    return this.http.get(this.URL_SERVICE + '/listage');
  }

  get_all_vehicules(){
    return this.http.get(this.URL_SERVICE + '/vehicule');
  }

  get_all_type_vehicules(){
    return this.http.get(this.URL_SERVICE + '/type_vehicule');
  }

  get_all_classe_vehicules(){
    return this.http.get(this.URL_SERVICE + '/classe_vehicule');
  }

  get_all_voyages(): Observable<Voyage[]> {
    return this.http.get<Voyage[]>(this.URL_SERVICE + '/voyage');
  }

  get_voyage_by_search(data){
    return this.http.post(this.URL_SERVICE + '/voyage_by_search', data );
  }




}
