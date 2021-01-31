import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HugeInfoListPageRoutingModule } from './huge-info-list-routing.module';

import { HugeInfoListPage } from './huge-info-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HugeInfoListPageRoutingModule
  ],
  declarations: [HugeInfoListPage]
})
export class HugeInfoListPageModule {}
