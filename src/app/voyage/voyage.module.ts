import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartComponent } from './depart/depart.component';
import { VoyageRoutingModule } from './voyage-routing.module';

@NgModule({
  imports: [
    CommonModule,
    VoyageRoutingModule
  ],
  declarations: [DepartComponent]
})
export class VoyageModule { }
