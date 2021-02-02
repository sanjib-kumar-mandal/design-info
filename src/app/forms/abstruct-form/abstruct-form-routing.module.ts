import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbstructFormPage } from './abstruct-form.page';

const routes: Routes = [
  {
    path: '',
    component: AbstructFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbstructFormPageRoutingModule {}
