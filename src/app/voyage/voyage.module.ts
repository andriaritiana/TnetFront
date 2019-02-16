import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartComponent } from './depart/depart.component';
import { VoyageRoutingModule } from './voyage-routing.module';
import { VoyageComponent } from './voyage/voyage.component';
import { HttpModule } from '@angular/http';
import { VoyageService } from './voyage.service';


import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker'; 
import { TimepickerModule } from 'ngx-bootstrap/timepicker'; 
import { AlertModule } from 'ngx-bootstrap/alert';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { NgxSelectModule, INgxSelectOptions } from 'ngx-select-ex';
import { FilterPipeModule } from 'ngx-filter-pipe';

import { defineLocale } from 'ngx-bootstrap/chronos';
import { frLocale } from 'ngx-bootstrap/locale';
defineLocale('fr', frLocale);

@NgModule({
  imports: [
    CommonModule,
    VoyageRoutingModule,
    HttpModule,
    FormsModule,
    BrowserModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    AlertModule.forRoot(),
    TooltipModule.forRoot(),
    NgxSelectModule,
    FilterPipeModule
  ],
  providers:[FormsModule,VoyageService],
  declarations: [
    DepartComponent,
    VoyageComponent
  ]
})
export class VoyageModule { }
