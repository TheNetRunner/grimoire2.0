import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { SharedModule } from '../shared/shared.module';
import { AosRoutingModule } from './aos-routing.module';
import { PtgListComponent } from './views/ptg-list/ptg-list.component';
import { PtgDetailComponent } from './views/ptg-detail/ptg-detail.component';


@NgModule({
  declarations: [
    PtgListComponent,
    PtgDetailComponent
  ],
  imports: [
    CommonModule,
    AosRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AosModule { }
