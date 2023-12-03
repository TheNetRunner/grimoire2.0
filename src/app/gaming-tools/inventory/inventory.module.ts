import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { NgbCollapseModule } from "@ng-bootstrap/ng-bootstrap";
import { NgbTooltipModule } from "@ng-bootstrap/ng-bootstrap";

import { InventoryRoutingModule } from "./inventory-routing.module";
import { AddInventoryModalComponent } from "./components/add-inventory-modal/add-inventory-modal.component";
import { DetailViewComponent } from "./detail-view/detail-view.component";
import { ListViewComponent } from "./list-view/list-view.component";
import { DeleteInventoryModalComponent } from "./components/delete-inventory-modal/delete-inventory-modal.component";
import { UpdateCurrencyModalComponent } from "./components/update-currency-modal/update-currency-modal.component";
import { InventoryItemListItemComponent } from "./components/inventory-item-list-item/inventory-item-list-item.component";
import { SharedModule } from "../../shared/shared.module";
import { EditInventoryItemModalComponent } from "./components/edit-inventory-item-modal/edit-inventory-item-modal.component";
import { AddInventoryItemModalComponent } from "./components/add-inventory-item-modal/add-inventory-item-modal.component";
import { GameSystemItemListModalComponent } from "./components/game-system-item-list-modal/game-system-item-list-modal.component";
import { UploadInventoryModalComponent } from './components/upload-inventory-modal/upload-inventory-modal.component';

@NgModule({
	declarations: [
		AddInventoryModalComponent,
		DetailViewComponent,
		ListViewComponent,
		DeleteInventoryModalComponent,
		UpdateCurrencyModalComponent,
		InventoryItemListItemComponent,
		EditInventoryItemModalComponent,
		AddInventoryItemModalComponent,
		GameSystemItemListModalComponent,
        UploadInventoryModalComponent,
	],
	imports: [
		CommonModule,
		InventoryRoutingModule,
        FormsModule,
		ReactiveFormsModule,
		SharedModule,
		NgbCollapseModule,
		NgbTooltipModule,
	],
})
export class InventoryModule {}
