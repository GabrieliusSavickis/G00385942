import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeamprofilePageRoutingModule } from './teamprofile-routing.module';

import { TeamprofilePage } from './teamprofile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeamprofilePageRoutingModule
  ],
  declarations: [TeamprofilePage]
})
export class TeamprofilePageModule {}
