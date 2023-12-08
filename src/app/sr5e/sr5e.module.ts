import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { SharedModule } from '../shared/shared.module';
import { Sr5eRoutingModule } from './sr5e-routing.module';

import { ListViewComponent } from './pages/list-view/list-view.component';
import { EditViewComponent } from './pages/edit-view/edit-view.component';
import { PlayViewComponent } from './pages/play-view/play-view.component';
import { DeleteCharacterComponent } from './modals/delete-character/delete-character.component';
import { ConceptStepComponent } from './edit-view/concept-step/concept-step.component';
import { MetaTypeStepComponent } from './edit-view/meta-type-step/meta-type-step.component';
import { PrioritiesStepComponent } from './edit-view/priorities-step/priorities-step.component';
import { AttributeStepComponent } from './edit-view/attribute-step/attribute-step.component';
import { NavbarComponent } from './edit-view/navbar/navbar.component';

@NgModule({
  declarations: [
    ListViewComponent,
    EditViewComponent,
    PlayViewComponent,
    DeleteCharacterComponent,
    ConceptStepComponent,
    MetaTypeStepComponent,
    PrioritiesStepComponent,
    AttributeStepComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    AppRoutingModule,
    Sr5eRoutingModule,
    NgbModule
  ]
})
export class Sr5eModule { }