import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

    guichets$: Object;

  constructor(private data : DataService) { }

  ngOnInit() {
    this.data.getCooperatives().subscribe(
      data => { this.guichets$ = data.data; console.log(data)},
      err => console.error(err),
      () => console.log('done loading guichets')
    )
  }

}
