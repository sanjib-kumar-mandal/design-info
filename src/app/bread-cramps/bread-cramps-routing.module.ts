import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BreadCrampsPage } from './bread-cramps.page';

const routes: Routes = [
  {
    path: '',
    component: BreadCrampsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BreadCrampsPageRoutingModule {}
