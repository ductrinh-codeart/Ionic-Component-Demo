import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThumbnailPage } from './thumbnail.page';

const routes: Routes = [
  {
    path: '',
    component: ThumbnailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThumbnailPageRoutingModule {}
