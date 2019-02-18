import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartComponent } from './depart/depart.component';
import { VoyageComponent } from './voyage/voyage.component';

const routeVoyages: Routes = [
  {
      path: 'voyage',
      children:[
        {
          path:'',
          component: VoyageComponent,
        },
        {
          path:'depart',
          component: DepartComponent
        }
      ]
  }
];

export const VoyageRoutingModule : ModuleWithProviders = RouterModule.forChild(routeVoyages);
