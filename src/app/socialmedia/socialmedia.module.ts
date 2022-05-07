import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SocialmediaPageRoutingModule } from './socialmedia-routing.module';

import { SocialmediaPage } from './socialmedia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SocialmediaPageRoutingModule
  ],
  declarations: [SocialmediaPage]
})
export class SocialmediaPageModule {}
