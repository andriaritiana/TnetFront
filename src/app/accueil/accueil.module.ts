import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilRoutingModule } from './accueil-routing.module';
import { CarouselComponent } from './carousel/carousel.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    AccueilRoutingModule,
    HttpClientModule
  ],
  declarations: [CarouselComponent]
})
export class AccueilModule { }
