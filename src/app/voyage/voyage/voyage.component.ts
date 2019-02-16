import { Component, OnInit } from '@angular/core';
import { VoyageService } from './../voyage.service';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';

declare var $ :any;

@Component({
  selector: 'app-voyage',
  templateUrl: './voyage.component.html',
  styleUrls: ['./voyage.component.css']
})

export class VoyageComponent implements OnInit {
  cooperatives:any = [];
  villes:any = []
  chauffeurs:any = []
  listages:any = []
  vehicules:any = []
  classe_vehicules:any = []
  type_vehicules:any = []
  voyages:any = []

  constructor(private voyageService:VoyageService,
              private _localeService: BsLocaleService) {
    this._localeService.use('fr');
  }

  villeFilter:any = {ville_nom : ''};
  cooperativeFilter:any = {coop_nom : ''};

  choixVilleDepart = true;
  choix_ville_depart(){
    this.choixVilleDepart = true;
    this.choixVilleArrivee = false;
    this.choixDateDepart = false;
    this.choixCooperative = false;
  }
  villeDepartSelected = {
    ville_id : 1
  };
  ville_depart_selected(ville){
    this.villeDepartSelected = ville;
    //this.get_voyage_by_search();
  }
  choixVilleArrivee = true;
  choix_ville_arrivee(){
    this.choixVilleArrivee = true;
    this.choixVilleDepart = false;
    this.choixDateDepart = false;
    this.choixCooperative = false;
  }

  villeArriveeSelected = {
    ville_id: 1
  };
  ville_arrivee_selected(ville){
    this.villeArriveeSelected = ville;
    //this.get_voyage_by_search();
  }

  choixDateDepart = true;
  choix_date_depart(){
    this.choixDateDepart = true;
    this.choixVilleArrivee = false;
    this.choixVilleDepart = false;
    this.choixCooperative = false;
  }

  dateSelected = {
    date_depart : new Date(),
    date_arrivee : new Date()
  };
  
  heureSelected = {
    heure_depart: new Date(),
    heure_arrivee: new Date()
  };
  
  isMeridian = false;
  showSpinners = true;

  choixCooperative = true;
  choix_cooperative(){
    this.choixCooperative = true;
    this.choixDateDepart = false;
    this.choixVilleArrivee = false;
    this.choixVilleDepart = false;
  }

  cooperativeSelected = {
    coop_id : 120
  };
  cooperative_selected(cooperative){
    this.cooperativeSelected = cooperative;
    //this.get_voyage_by_search();
  }

  voyageSelected = {
    voyage_id : 4
  };
  /* voyage_selected(voyage){
    this.voyageSelected = voyage;
    console.log(this.voyageSelected);

    var data = {};
    data = {
      villeDepart : this.villeDepartSelected,
      villeArrivee : this.villeArriveeSelected,
      dateDepart : this.dateSelected,
      heureDepart : this.heureSelected,
      cooperative : this.cooperativeSelected
    }
    this.voyageService.get_voyage_by_search(data)
    .subscribe(response => { this.voyages = response.json()},
              error =>  {  console.log(error); } 
              );
  } */

  ngOnInit() {

    $(function() {
      
      $("#reservation-etape-btn-rechercher").click(function(e) {
        e.preventDefault();
        $("#main-container").removeClass("etape-3 etape-4").addClass("etape-2");
      });
      
      $("#reservation-etape-btn-choisir").click(function(e) {
        e.preventDefault();
        $("#main-container").removeClass("etape-2 etape-4").addClass("etape-3");
      });
    });

 /*    this.get_all_cooperatives();
    this.get_all_villes(); */
/*     this.get_all_chauffeurs();
    this.get_all_listages();
    this.get_all_vehicules();
    this.get_all_type_vehicules();
    this.get_all_classe_vehicules();
     */
    ////this.get_voyage_by_search();
  }

  /* get_all_cooperatives(){
    this.voyageService.get_all_cooperatives()
    .subscribe(response => { this.cooperatives = response.json(); },
              error =>  {  console.log(error); } 
              );
  }

  get_all_villes(){
    this.voyageService.get_all_villes()
    .subscribe(response => { this.villes = response.json(); },
              error =>  {  console.log(error); } 
              );
  }

  get_all_chauffeurs(){
    this.voyageService.get_all_chauffeurs()
    .subscribe(response => {  this.chauffeurs = response.json(); },
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
  } */

/*   get_all_classe_vehicules(){
    this.voyageService.get_all_classe_vehicules()
    .subscribe(response => { this.classe_vehicules = response.json()},
              error =>  {  console.log(error); } 
              );
  } */

/*   get_all_voyages(){
    this.voyageService.get_all_voyages()
    .subscribe(response => { this.voyages = response.json()},
              error =>  {  console.log(error); } 
              );
  } */


  /* get_voyage_by_search(){
    var data = {};
    data = {
      villeDepart : this.villeDepartSelected,
      villeArrivee : this.villeArriveeSelected,
      dateDepart : this.dateSelected,
      heureDepart : this.heureSelected,
      cooperative : this.cooperativeSelected
    }
    this.voyageService.get_voyage_by_search(data)
    .subscribe(response => { 
      this.voyages = response.json();
      console.log(this.voyages);
    },
              error =>  {  console.log(error); } 
              );
  } */



}
