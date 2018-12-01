import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeComponent } from './liste/liste.component';

const routes: Routes = [
  {
      path: '',
      component: ListeComponent,
  }
];

export const CooperativeRoutingModule : ModuleWithProviders = RouterModule.forChild(routes);