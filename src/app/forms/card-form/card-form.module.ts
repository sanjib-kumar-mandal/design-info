import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardFormPageRoutingModule } from './card-form-routing.module';

import { CardFormPage } from './card-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardFormPageRoutingModule
  ],
  declarations: [CardFormPage]
})
export class CardFormPageModule {}
