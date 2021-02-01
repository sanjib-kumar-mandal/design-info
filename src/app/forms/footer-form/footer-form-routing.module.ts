import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FooterFormPage } from './footer-form.page';

const routes: Routes = [
  {
    path: '',
    component: FooterFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FooterFormPageRoutingModule {}
