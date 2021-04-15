import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatetimepickerPage } from './datetimepicker.page';

const routes: Routes = [
  {
    path: '',
    component: DatetimepickerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatetimepickerPageRoutingModule {}
