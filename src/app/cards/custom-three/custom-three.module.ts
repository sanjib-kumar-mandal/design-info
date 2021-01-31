import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomThreePageRoutingModule } from './custom-three-routing.module';

import { CustomThreePage } from './custom-three.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomThreePageRoutingModule
  ],
  declarations: [CustomThreePage]
})
export class CustomThreePageModule {}
