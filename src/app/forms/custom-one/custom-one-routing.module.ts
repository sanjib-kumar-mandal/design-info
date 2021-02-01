import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomOnePage } from './custom-one.page';

const routes: Routes = [
  {
    path: '',
    component: CustomOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomOnePageRoutingModule {}
