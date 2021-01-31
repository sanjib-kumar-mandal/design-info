import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomOnePageRoutingModule } from './custom-one-routing.module';

import { CustomOnePage } from './custom-one.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomOnePageRoutingModule
  ],
  declarations: [CustomOnePage]
})
export class CustomOnePageModule {}
