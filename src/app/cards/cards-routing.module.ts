import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardsPage } from './cards.page';

const routes: Routes = [
  {
    path: '',
    component: CardsPage
  },
  {
    path: 'native-card',
    loadChildren: () => import('./native-card/native-card.module').then( m => m.NativeCardPageModule)
  },
  {
    path: 'custom-one',
    loadChildren: () => import('./custom-one/custom-one.module').then( m => m.CustomOnePageModule)
  },
  {
    path: 'custom-two',
    loadChildren: () => import('./custom-two/custom-two.module').then( m => m.CustomTwoPageModule)
  },
  {
    path: 'custom-three',
    loadChildren: () => import('./custom-three/custom-three.module').then( m => m.CustomThreePageModule)
  },
  {
    path: 'custom-four',
    loadChildren: () => import('./custom-four/custom-four.module').then( m => m.CustomFourPageModule)
  },
  {
    path: 'custom-five',
    loadChildren: () => import('./custom-five/custom-five.module').then( m => m.CustomFivePageModule)
  },
  {
    path: 'custom-six',
    loadChildren: () => import('./custom-six/custom-six.module').then( m => m.CustomSixPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardsPageRoutingModule {}
