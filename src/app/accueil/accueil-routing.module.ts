import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';

const routes: Routes = [
  {
      path: 'accueil',
      children:[
        {
          path:'',
          component: CarouselComponent,
        }
      ]
  }
];

export const AccueilRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
