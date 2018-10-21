import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Observable } from 'rxjs';

declare var $ :any;

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

    guichets$: Object;

  constructor(private data : DataService) { }

  ngOnInit() {

    function defilerSlideADroite(e) {
      e.preventDefault();
      
      var index = $("#slide > ul > li.current").index();
      if (index < $("#slide > ul > li").length - 1) {
        $("#slide > ul > li.current").removeClass("current").next().addClass("current");
        $("#slide > ul").css("margin-left", -((index + 1) * 100) + "%");
        
        $("#slide-pagination > ul > li.active").removeClass("active");
        $($("#slide-pagination > ul > li")[index + 1]).addClass("active");
      }
    }
    
    function defilerSlideAGauche(e) {
      e.preventDefault();
      
      var index = $("#slide > ul > li.current").index();
      if (index > 0) {
        $("#slide > ul > li.current").removeClass("current").prev().addClass("current");
        $("#slide > ul").css("margin-left", -((index - 1) * 100) + "%");
        
        $("#slide-pagination > ul > li.active").removeClass("active");
        $($("#slide-pagination > ul > li")[index - 1]).addClass("active");
      }
    }
  
    $(function() {
      $("#slide-next > a").click(defilerSlideADroite);
      $("#slide-prev > a").click(defilerSlideAGauche);
      $("#slide-pagination > ul > li > a").click(function(e) {
        e.preventDefault();
      
        var index = $(this).parent().index();
        
        $("#slide > ul > li.current").removeClass("current");
        $($("#slide > ul > li")[index]).addClass("current");
        $("#slide > ul").css("margin-left", -(index * 100) + "%");
      
        $("#slide-pagination > ul > li.active").removeClass("active");
        $($("#slide-pagination > ul > li")[index]).addClass("active");
      });
    });


    /* this.data.getCooperatives().subscribe(
      //data => { this.guichets$ = data.data; console.log(data)},
      err => console.error(err),
      () => console.log('done loading guichets')
    ) */
  }

}
