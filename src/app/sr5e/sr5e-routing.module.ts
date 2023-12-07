import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListViewComponent } from './pages/list-view/list-view.component';
import { EditViewComponent } from './pages/edit-view/edit-view.component';
import { PlayViewComponent } from './pages/play-view/play-view.component';

const routes: Routes = [
    { path: 'sr5e/characters', component: ListViewComponent },
    { path: 'sr5e/characters/:id/edit', component: EditViewComponent },
    { path: 'sr5e/characters/:id/play', component: PlayViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Sr5eRoutingModule { }
