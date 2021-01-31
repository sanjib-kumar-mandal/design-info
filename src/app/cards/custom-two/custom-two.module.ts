import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomTwoPageRoutingModule } from './custom-two-routing.module';

import { CustomTwoPage } from './custom-two.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomTwoPageRoutingModule
  ],
  declarations: [CustomTwoPage]
})
export class CustomTwoPageModule {}
