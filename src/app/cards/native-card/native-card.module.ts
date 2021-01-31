import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NativeCardPageRoutingModule } from './native-card-routing.module';

import { NativeCardPage } from './native-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NativeCardPageRoutingModule
  ],
  declarations: [NativeCardPage]
})
export class NativeCardPageModule {}
