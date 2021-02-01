import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SwiggylistPage } from './swiggylist.page';

const routes: Routes = [
  {
    path: '',
    component: SwiggylistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SwiggylistPageRoutingModule {}
