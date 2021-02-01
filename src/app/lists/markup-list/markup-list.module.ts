import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarkupListPageRoutingModule } from './markup-list-routing.module';

import { MarkupListPage } from './markup-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarkupListPageRoutingModule
  ],
  declarations: [MarkupListPage]
})
export class MarkupListPageModule {}
