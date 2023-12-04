import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListViewComponent } from './list-view/list-view.component';
import { DetailViewComponent } from './detail-view/detail-view.component';

const routes: Routes = [
    { path: "shadow-run/characters", component: ListViewComponent },
    { path: "shadow-run/characters/:id", component: DetailViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShadowRunCharactersRoutingModule { }
