import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HugeInfoListPage } from './huge-info-list.page';

const routes: Routes = [
  {
    path: '',
    component: HugeInfoListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HugeInfoListPageRoutingModule {}
