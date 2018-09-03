import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AccueilModule } from './accueil/accueil.module';
import { VoyageModule } from './voyage/voyage.module';

const routes: Routes = [
  {
    path: '', 
    loadChildren: 'app/accueil/accueil.module#AccueilModule'
  },
  {
    path: 'voyage', 
    loadChildren: 'app/voyage/voyage.module#VoyageModule'
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
