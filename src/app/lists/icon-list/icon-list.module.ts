import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IconListPageRoutingModule } from './icon-list-routing.module';

import { IconListPage } from './icon-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IconListPageRoutingModule
  ],
  declarations: [IconListPage]
})
export class IconListPageModule {}
