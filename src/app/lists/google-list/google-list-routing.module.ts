import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoogleListPage } from './google-list.page';

const routes: Routes = [
  {
    path: '',
    component: GoogleListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoogleListPageRoutingModule {}
