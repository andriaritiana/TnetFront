import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AccueilModule } from './accueil/accueil.module';
import { VoyageModule } from './voyage/voyage.module';

const routes: Routes = [
  {
    path: '',
    redirectTo:'/accueil',
    pathMatch:'full'
  },
  {
    path: 'voyage', 
    loadChildren: './voyage/voyage.module#VoyageModule'
  },
  {
    path: 'cooperative', 
    loadChildren: './cooperative/cooperative.module#CooperativeModule'
  }
]; 

@NgModule({
  imports: [
  	RouterModule.forRoot(routes),
    CommonModule,
    AccueilModule,
    VoyageModule
  ],
  declarations: []
})
export class AppRoutingModule { }
