import { Component, OnInit } from '@angular/core';
import { VoyageService } from './../voyage.service';

@Component({
  selector: 'app-voyage',
  templateUrl: './voyage.component.html',
  styleUrls: ['./voyage.component.css']
})
export class VoyageComponent implements OnInit {
  villes:any = []
  chauffeurs:any = []
  listages:any = []
  vehicules:any = []
  classe_vehicules:any = []
  type_vehicules:any = []
  voyages:any = []

  constructor(private voyageService:VoyageService) {}

  ngOnInit() {
    this.get_all_villes();
    this.get_all_chauffeurs();
    this.get_all_listages();
    this.get_all_vehicules();
    this.get_all_type_vehicules();
    this.get_all_classe_vehicules();
    this.get_all_voyages();
  }

  get_all_villes(){
    this.voyageService.get_all_villes()
    .subscribe(response => {  
              this.villes = response.json();
              console.log(this.villes);
            },
              error =>  {  console.log(error); } 
              );
  }

  get_all_chauffeurs(){
    this.voyageService.get_all_chauffeurs()
    .subscribe(response => {  
      this.chauffeurs = response.json();
      console.log(this.chauffeurs);
    },
              error =>  {  console.log(error); } 
              );
  }

  get_all_listages(){
    this.voyageService.get_all_listages()
    .subscribe(response => {  this.listages = response.json()},
              error =>  {  console.log(error); } 
              );
  }

  get_all_vehicules(){
    this.voyageService.get_all_vehicules()
    .subscribe(response => { this.vehicules = response.json()},
              error =>  {  console.log(error); } 
              );
  }

  get_all_type_vehicules(){
    this.voyageService.get_all_type_vehicules()
    .subscribe(response => { this.type_vehicules = response.json()},
              error =>  {  console.log(error); } 
              );
  }

  get_all_classe_vehicules(){
    this.voyageService.get_all_classe_vehicules()
    .subscribe(response => { this.classe_vehicules = response.json()},
              error =>  {  console.log(error); } 
              );
  }

  get_all_voyages(){
    this.voyageService.get_all_voyages()
    .subscribe(response => { this.voyages = response.json()},
              error =>  {  console.log(error); } 
              );
  }

}
