import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgbTooltipModule } from "@ng-bootstrap/ng-bootstrap";

import { SharedModule } from '../shared/shared.module';

import { Sr5RoutingModule } from './sr5-routing.module';
import { ListViewComponent } from './views/list-view/list-view.component';
import { EditViewComponent } from './views/edit-view/edit-view.component';
import { PlayViewComponent } from './views/play-view/play-view.component';
import { CharacterCardComponent } from './components/list-view/character-card/character-card.component';
import { DeleteComponent } from './components/modals/delete/delete.component';
import { EditNavbarComponent } from './components/edit-view/edit-navbar/edit-navbar.component';
import { ConceptStepComponent } from './components/edit-view/concept-step/concept-step.component';
import { PortraitSelectComponent } from './components/modals/portrait-select/portrait-select.component';


@NgModule({
  declarations: [
    ListViewComponent,
    EditViewComponent,
    PlayViewComponent,
    CharacterCardComponent,
    DeleteComponent,
    EditNavbarComponent,
    ConceptStepComponent,
    PortraitSelectComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    NgbTooltipModule,
    Sr5RoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class Sr5Module { }