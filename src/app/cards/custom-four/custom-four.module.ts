import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomFourPageRoutingModule } from './custom-four-routing.module';

import { CustomFourPage } from './custom-four.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomFourPageRoutingModule
  ],
  declarations: [CustomFourPage]
})
export class CustomFourPageModule {}
