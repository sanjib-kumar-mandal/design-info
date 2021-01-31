import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SageSavasListPageRoutingModule } from './sage-savas-list-routing.module';

import { SageSavasListPage } from './sage-savas-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SageSavasListPageRoutingModule
  ],
  declarations: [SageSavasListPage]
})
export class SageSavasListPageModule {}
