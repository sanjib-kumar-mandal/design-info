import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IconListPage } from './icon-list.page';

const routes: Routes = [
  {
    path: '',
    component: IconListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IconListPageRoutingModule {}
