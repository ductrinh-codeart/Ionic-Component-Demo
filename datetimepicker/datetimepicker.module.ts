import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatetimepickerPageRoutingModule } from './datetimepicker-routing.module';

import { DatetimepickerPage } from './datetimepicker.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatetimepickerPageRoutingModule
  ],
  declarations: [DatetimepickerPage]
})
export class DatetimepickerPageModule {}
