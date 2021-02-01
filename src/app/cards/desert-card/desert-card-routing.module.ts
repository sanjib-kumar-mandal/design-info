import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesertCardPage } from './desert-card.page';

const routes: Routes = [
  {
    path: '',
    component: DesertCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesertCardPageRoutingModule {}
