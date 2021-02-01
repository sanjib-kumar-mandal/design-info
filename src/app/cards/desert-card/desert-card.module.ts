import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesertCardPageRoutingModule } from './desert-card-routing.module';

import { DesertCardPage } from './desert-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesertCardPageRoutingModule
  ],
  declarations: [DesertCardPage]
})
export class DesertCardPageModule {}
