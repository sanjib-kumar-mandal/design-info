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
  },
  {
    path: 'huge-info-list',
    loadChildren: () => import('./huge-info-list/huge-info-list.module').then( m => m.HugeInfoListPageModule)
  },
  {
    path: 'hidden-buttons',
    loadChildren: () => import('./hidden-buttons/hidden-buttons.module').then( m => m.HiddenButtonsPageModule)
  },
  {
    path: 'profile-list',
    loadChildren: () => import('./profile-list/profile-list.module').then( m => m.ProfileListPageModule)
  },
  {
    path: 'swiggylist',
    loadChildren: () => import('./swiggylist/swiggylist.module').then( m => m.SwiggylistPageModule)
  },
  {
    path: 'icon-list',
    loadChildren: () => import('./icon-list/icon-list.module').then( m => m.IconListPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListsPageRoutingModule {}
