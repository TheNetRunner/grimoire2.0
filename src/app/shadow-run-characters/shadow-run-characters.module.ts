import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShadowRunCharactersRoutingModule } from './shadow-run-characters-routing.module';
import { ListViewComponent } from './list-view/list-view.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { DeleteCharacterModalComponent } from './components/delete-character-modal/delete-character-modal.component';


@NgModule({
  declarations: [
    ListViewComponent,
    DetailViewComponent,
    DeleteCharacterModalComponent
  ],
  imports: [
    CommonModule,
    ShadowRunCharactersRoutingModule
  ]
})
export class ShadowRunCharactersModule { }
