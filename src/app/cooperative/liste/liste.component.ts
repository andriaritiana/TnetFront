import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { reslt } from '../../common/common.interface';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  cooperatives: Object;
  constructor(private data : DataService) { }

  ngOnInit() {
    this.data.getCooperatives().subscribe(
      res => { 
        let rs = <reslt>res;
        this.cooperatives = rs.data;}, 
      err => console.error(err),
      () => console.log('Done loading cooperatives!')
    );
  }

  coopDetail(idcoop) {
    console.log("Appel "+idcoop);
  }
}
