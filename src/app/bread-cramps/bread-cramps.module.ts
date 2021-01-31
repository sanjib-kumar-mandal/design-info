import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BreadCrampsPageRoutingModule } from './bread-cramps-routing.module';

import { BreadCrampsPage } from './bread-cramps.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BreadCrampsPageRoutingModule
  ],
  declarations: [BreadCrampsPage]
})
export class BreadCrampsPageModule {}
