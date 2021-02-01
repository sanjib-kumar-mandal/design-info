import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomSixPage } from './custom-six.page';

const routes: Routes = [
  {
    path: '',
    component: CustomSixPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomSixPageRoutingModule {}
