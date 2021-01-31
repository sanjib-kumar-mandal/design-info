import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListsPage } from './lists.page';

const routes: Routes = [
  {
    path: '',
    component: ListsPage
  },
  {
    path: 'google-list',
    loadChildren: () => import('./google-list/google-list.module').then( m => m.GoogleListPageModule)
  },
  {
    path: 'sage-savas-list',
    loadChildren: () => import('./sage-savas-list/sage-savas-list.module').then( m => m.SageSavasListPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListsPageRoutingModule {}
