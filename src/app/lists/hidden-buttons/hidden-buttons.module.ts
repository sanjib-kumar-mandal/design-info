import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HiddenButtonsPageRoutingModule } from './hidden-buttons-routing.module';

import { HiddenButtonsPage } from './hidden-buttons.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HiddenButtonsPageRoutingModule
  ],
  declarations: [HiddenButtonsPage]
})
export class HiddenButtonsPageModule {}
