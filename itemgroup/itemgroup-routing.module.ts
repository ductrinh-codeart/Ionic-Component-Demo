import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemgroupPage } from './itemgroup.page';

const routes: Routes = [
  {
    path: '',
    component: ItemgroupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemgroupPageRoutingModule {}
