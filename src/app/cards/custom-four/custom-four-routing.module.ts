import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomFourPage } from './custom-four.page';

const routes: Routes = [
  {
    path: '',
    component: CustomFourPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomFourPageRoutingModule {}
