import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FreeCardPageRoutingModule } from './free-card-routing.module';

import { FreeCardPage } from './free-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FreeCardPageRoutingModule
  ],
  declarations: [FreeCardPage]
})
export class FreeCardPageModule {}
