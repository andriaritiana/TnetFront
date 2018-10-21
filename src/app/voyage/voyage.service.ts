import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
//import 'rxjs/add/operator';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoyageService {

  private URL_SERVICE:any = 'http://localhost:8060';

  constructor(private http:Http) {}

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

  get_all_cat_vehicules(){
    return this.http.get(this.URL_SERVICE + '/cat_vehicule');
  }

  get_all_voyages(){
    return this.http.get(this.URL_SERVICE + '/voyage');
  }




}
