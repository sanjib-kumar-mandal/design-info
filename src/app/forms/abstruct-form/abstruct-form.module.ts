import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbstructFormPageRoutingModule } from './abstruct-form-routing.module';

import { AbstructFormPage } from './abstruct-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbstructFormPageRoutingModule
  ],
  declarations: [AbstructFormPage]
})
export class AbstructFormPageModule {}
