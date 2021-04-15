import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopoverListPage } from './popover-list.page';

const routes: Routes = [
  {
    path: '',
    component: PopoverListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopoverListPageRoutingModule {}
