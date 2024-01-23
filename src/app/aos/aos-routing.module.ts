import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PtgListComponent } from './views/ptg-list/ptg-list.component';
import { PtgDetailComponent } from './views/ptg-detail/ptg-detail.component';

const routes: Routes = [
    {
        path: "aos/path-to-glory",
        component: PtgListComponent
    },
    {
        path: "aos/path-to-glory/:id",
        component: PtgDetailComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AosRoutingModule { }
