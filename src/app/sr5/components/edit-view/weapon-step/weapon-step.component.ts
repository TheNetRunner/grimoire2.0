import { Component, Input, inject } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { DataStoreService } from "../../../services/data-store.service";
import { ShadowRun5ECharacter } from "../../../character/character";
import { ShopComponent } from "../../modals/shop/shop.component";

@Component({
  selector: "app-weapon-step",
  templateUrl: "./weapon-step.component.html",
  styleUrl: "./weapon-step.component.css"
})
export class WeaponStepComponent {
    private modalService = inject(NgbModal);
    private dataStoreService = inject(DataStoreService);

    @Input() character!: ShadowRun5ECharacter;

    openFirearmsShopModal(): void {
        const options = { animation: true, fullscreen: true, fade: true };
        const modalRef = this.modalService.open(ShopComponent, options);

        modalRef.componentInstance.title = "Buddy's Gun Shop";
        modalRef.componentInstance.items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    }
}
