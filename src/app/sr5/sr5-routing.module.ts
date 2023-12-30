import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListViewComponent } from './views/list-view/list-view.component';
import { EditViewComponent } from './views/edit-view/edit-view.component';
import { PlayViewComponent } from './views/play-view/play-view.component';

const routes: Routes = [
    { path: 'sr5/characters', component: ListViewComponent },
    { path: 'sr5/characters/:id/edit', component: EditViewComponent },
    { path: 'sr5/characters/:id/play', component: PlayViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Sr5RoutingModule { }
