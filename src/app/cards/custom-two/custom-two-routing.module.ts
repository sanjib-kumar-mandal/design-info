import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomTwoPage } from './custom-two.page';

const routes: Routes = [
  {
    path: '',
    component: CustomTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomTwoPageRoutingModule {}
