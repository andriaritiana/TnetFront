import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AccueilModule } from './accueil/accueil.module';
import { VoyageModule } from './voyage/voyage.module';

const routes: Routes = [
  {
    path: '', 
    loadChildren: './accueil/accueil.module#AccueilModule'
  },
  {
    path: 'voyage', 
    loadChildren: './voyage/voyage.module#VoyageModule'
  }
]; 

@NgModule({
  imports: [
  	RouterModule.forRoot(routes),
    CommonModule
  ],
  declarations: [],
  exports: [ RouterModule, AccueilModule ]
})
export class AppRoutingModule { }
