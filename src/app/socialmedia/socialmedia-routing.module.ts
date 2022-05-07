import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SocialmediaPage } from './socialmedia.page';

const routes: Routes = [
  {
    path: '',
    component: SocialmediaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SocialmediaPageRoutingModule {}
