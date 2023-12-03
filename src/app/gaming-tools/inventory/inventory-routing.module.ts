import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ListViewComponent } from "../inventory/list-view/list-view.component";
import { DetailViewComponent } from "../inventory/detail-view/detail-view.component";

const routes: Routes = [
	{ path: "gaming-tools/inventories", component: ListViewComponent },
	{ path: "gaming-tools/inventories/:id", component: DetailViewComponent },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class InventoryRoutingModule {}
