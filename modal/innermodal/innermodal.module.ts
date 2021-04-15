import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InnermodalPageRoutingModule } from './innermodal-routing.module';

import { InnermodalPage } from './innermodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InnermodalPageRoutingModule
  ],
  declarations: [InnermodalPage]
})
export class InnermodalPageModule {}
