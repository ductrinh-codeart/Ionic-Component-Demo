import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopoverListPageRoutingModule } from './popover-list-routing.module';

import { PopoverListPage } from './popover-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopoverListPageRoutingModule
  ],
  declarations: [PopoverListPage]
})
export class PopoverListPageModule {}
