import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbstructCardsFormPageRoutingModule } from './abstruct-cards-form-routing.module';

import { AbstructCardsFormPage } from './abstruct-cards-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbstructCardsFormPageRoutingModule
  ],
  declarations: [AbstructCardsFormPage]
})
export class AbstructCardsFormPageModule {}
