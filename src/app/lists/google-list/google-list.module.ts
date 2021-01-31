import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoogleListPageRoutingModule } from './google-list-routing.module';

import { GoogleListPage } from './google-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoogleListPageRoutingModule
  ],
  declarations: [GoogleListPage]
})
export class GoogleListPageModule {}
