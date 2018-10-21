import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartComponent } from './depart/depart.component';
import { VoyageRoutingModule } from './voyage-routing.module';
import { VoyageComponent } from './voyage/voyage.component';
import { HttpModule } from '@angular/http';
import { VoyageService } from './voyage.service';

@NgModule({
  imports: [
    CommonModule,
    VoyageRoutingModule,
    HttpModule
  ],
  providers:[VoyageService],
  declarations: [
    DepartComponent,
    VoyageComponent
  ]
})
export class VoyageModule { }
