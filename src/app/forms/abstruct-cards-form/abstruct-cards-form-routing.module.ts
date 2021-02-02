import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbstructCardsFormPage } from './abstruct-cards-form.page';

const routes: Routes = [
  {
    path: '',
    component: AbstructCardsFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbstructCardsFormPageRoutingModule {}
