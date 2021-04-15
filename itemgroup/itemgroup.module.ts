import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemgroupPageRoutingModule } from './itemgroup-routing.module';

import { ItemgroupPage } from './itemgroup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemgroupPageRoutingModule
  ],
  declarations: [ItemgroupPage]
})
export class ItemgroupPageModule {}
