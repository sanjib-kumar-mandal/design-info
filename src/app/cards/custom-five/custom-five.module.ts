import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomFivePageRoutingModule } from './custom-five-routing.module';

import { CustomFivePage } from './custom-five.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomFivePageRoutingModule
  ],
  declarations: [CustomFivePage]
})
export class CustomFivePageModule {}
