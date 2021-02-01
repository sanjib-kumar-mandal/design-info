import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SwiggylistPageRoutingModule } from './swiggylist-routing.module';

import { SwiggylistPage } from './swiggylist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwiggylistPageRoutingModule
  ],
  declarations: [SwiggylistPage]
})
export class SwiggylistPageModule {}
