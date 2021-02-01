import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FooterFormPageRoutingModule } from './footer-form-routing.module';

import { FooterFormPage } from './footer-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FooterFormPageRoutingModule
  ],
  declarations: [FooterFormPage]
})
export class FooterFormPageModule {}
