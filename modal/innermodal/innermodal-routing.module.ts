import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InnermodalPage } from './innermodal.page';

const routes: Routes = [
  {
    path: '',
    component: InnermodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [InnermodalPage],
})
export class InnermodalPageRoutingModule {}
