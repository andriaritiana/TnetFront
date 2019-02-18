import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CooperativeRoutingModule } from './/cooperative-routing.module';
import { ListeComponent } from './liste/liste.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  imports: [
    CommonModule,
    CooperativeRoutingModule
  ],
  declarations: [ListeComponent, DetailsComponent]
})
export class CooperativeModule { }
