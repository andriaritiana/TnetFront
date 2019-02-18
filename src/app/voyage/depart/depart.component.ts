import { Component, OnInit } from '@angular/core';

declare var $ :any;

@Component({
  selector: 'app-depart',
  templateUrl: './depart.component.html',
  styleUrls: ['./depart.component.css']
})
export class DepartComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    $(function() {
      $("#options-recherche-voyage > li > a").click(function(e) {
        e.preventDefault();
        
        $("#options-recherche-voyage > li.active").removeClass("active");
        $(this).parent().addClass("active");
        
        $("#voyages-recherche-option-choix > div.active").removeClass("active");
        $($(this).attr("href")).addClass("active");
        
      });
      
      $("#reservation-etape-btn-rechercher").click(function(e) {
        e.preventDefault();
        $("#main-container").removeClass("etape-3 etape-4").addClass("etape-2");
      });
      
      $("#reservation-etape-btn-choisir").click(function(e) {
        e.preventDefault();
        $("#main-container").removeClass("etape-2 etape-4").addClass("etape-3");
      });
    });
  }

}
