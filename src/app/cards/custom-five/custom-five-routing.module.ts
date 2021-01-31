import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomFivePage } from './custom-five.page';

const routes: Routes = [
  {
    path: '',
    component: CustomFivePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomFivePageRoutingModule {}
