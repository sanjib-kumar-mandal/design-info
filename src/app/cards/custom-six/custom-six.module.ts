import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomSixPageRoutingModule } from './custom-six-routing.module';

import { CustomSixPage } from './custom-six.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomSixPageRoutingModule
  ],
  declarations: [CustomSixPage]
})
export class CustomSixPageModule {}
