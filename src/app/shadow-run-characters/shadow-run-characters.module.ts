import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Form, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ShadowRunCharactersRoutingModule } from './shadow-run-characters-routing.module';
import { ListViewComponent } from './list-view/list-view.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { DeleteCharacterModalComponent } from './components/delete-character-modal/delete-character-modal.component';
import { PersonalDataCardComponent } from './components/personal-data-card/personal-data-card.component';
import { AttributeCardComponent } from './components/attribute-card/attribute-card.component';


@NgModule({
  declarations: [
    ListViewComponent,
    DetailViewComponent,
    DeleteCharacterModalComponent,
    PersonalDataCardComponent,
    AttributeCardComponent
  ],
  imports: [
    CommonModule,
    ShadowRunCharactersRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ShadowRunCharactersModule { }
