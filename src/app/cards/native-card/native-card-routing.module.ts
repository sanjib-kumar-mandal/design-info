import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NativeCardPage } from './native-card.page';

const routes: Routes = [
  {
    path: '',
    component: NativeCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NativeCardPageRoutingModule {}
