import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamprofilePage } from './teamprofile.page';

const routes: Routes = [
  {
    path: '',
    component: TeamprofilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamprofilePageRoutingModule {}
