import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { reslt } from '../../common/common.interface';

@Component({
  selector: 'coop-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() idcoop: number;
  details: Object;

  constructor(private data : DataService) {}

  ngOnInit() {
    console.log("appel details");
    this.data.getDetailCoop(this.idcoop).subscribe(
      res => { 
        let rs = <reslt>res;
        this.details = rs.data; 
        console.log(this.details);
      }, 
      err => console.log(err),
      () => console.log('Done loading details!')
    );
  }

}
