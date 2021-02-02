import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsPage } from './forms.page';

const routes: Routes = [
  {
    path: '',
    component: FormsPage
  },
  {
    path: 'footer-form',
    loadChildren: () => import('./footer-form/footer-form.module').then( m => m.FooterFormPageModule)
  },
  {
    path: 'custom-one',
    loadChildren: () => import('./custom-one/custom-one.module').then( m => m.CustomOnePageModule)
  },
  {
    path: 'simple-form',
    loadChildren: () => import('./simple-form/simple-form.module').then( m => m.SimpleFormPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormsPageRoutingModule {}
