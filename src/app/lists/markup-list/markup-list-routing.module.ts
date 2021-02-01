import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarkupListPage } from './markup-list.page';

const routes: Routes = [
  {
    path: '',
    component: MarkupListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarkupListPageRoutingModule {}
