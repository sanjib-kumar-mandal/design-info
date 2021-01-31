import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomThreePage } from './custom-three.page';

const routes: Routes = [
  {
    path: '',
    component: CustomThreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomThreePageRoutingModule {}
