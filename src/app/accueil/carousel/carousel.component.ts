import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { reslt } from '../../common/common.interface';
import { Observable } from 'rxjs';

declare var $ :any;

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  provinces: Object;
  action: string = "incr";
  cptr: number = 1;

  constructor(private data : DataService) { }

  ngOnInit() {
    let comp = this;

    function clickOnTimeOut(timeout, action, cptr) {
      setTimeout(function(){
        if(cptr == 6) {
            comp.action = "dec";
            comp.cptr = 5;
            $("#slide-prev > a").trigger('click');
        } else if (cptr == 1) {
            comp.action = "inc";
            comp.cptr = 2;
            $("#slide-next > a").trigger('click');
        } else {
            comp.cptr = action == "inc" ? cptr + 1 : cptr - 1;
            if(action == "inc") $("#slide-next > a").trigger('click');
            else $("#slide-prev > a").trigger('click');
        }
        clickOnTimeOut(timeout, comp.action, comp.cptr);
      }, timeout);
    }

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
      clickOnTimeOut(10000, comp.action, comp.cptr);
    });


    this.data.getProvincesForCarousel().subscribe(
      res => { 
        let result = <reslt>res;
        this.provinces = result.data;}, 
      err => console.error(err),
      () => console.log('Done loading provinces with infos')
    );
  }

}


