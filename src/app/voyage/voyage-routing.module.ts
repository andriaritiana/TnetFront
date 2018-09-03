import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartComponent } from './depart/depart.component';

const routes: Routes = [
  {
      path: '',
      component: DepartComponent,
  }
];

export const VoyageRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
