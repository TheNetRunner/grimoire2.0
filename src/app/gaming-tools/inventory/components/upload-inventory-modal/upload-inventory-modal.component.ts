import { Component, EventEmitter, Output, inject } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

import { Inventory } from "../../models/inventory.model";
import { InventoryService } from "../../services/inventory.service";

@Component({
	selector: "app-upload-inventory-modal",
	templateUrl: "./upload-inventory-modal.component.html",
	styleUrl: "./upload-inventory-modal.component.css",
})
export class UploadInventoryModalComponent {
	activeModal = inject(NgbActiveModal);
	inventoryService = inject(InventoryService);

	selectedFile: File | null = null;
	selectedFileErrors: string[] = [];
    isSelectedFileValid: boolean = false;

	@Output() uploadInventoryEvent = new EventEmitter<Inventory>();

	async onFileSelected(event: Event): Promise<void> {
		const fileInput = event.target as HTMLInputElement;

		this.reset();

		if (fileInput.files && fileInput.files.length > 0) {
			this.selectedFile = fileInput.files[0];
            const isFileValid = await this.validateSelectedFile()

            if(isFileValid) {
                this.isSelectedFileValid = true;
            } else {
                this.selectedFileErrors.push("The file provided failed validation, please check and try again."); 
            }
			
		}
	}

	private async validateSelectedFile(): Promise<boolean> {
		if (this.selectedFile) {
			console.log("Validating selected file...");
			const fileContentAsJson = await this.readFileContents(this.selectedFile);
			if (fileContentAsJson) {
				console.log("Validating the files contents.");
				 if (this.inventoryService.validateInventoryJson(fileContentAsJson)) {
                    return true;
                 }
			}
		} else {
			this.selectedFileErrors.push("Please provide a file");
		}

		return false;
	}

    private async readFileContents(file: File): Promise<Inventory | undefined> {
        return new Promise((res, rej) => {
            const reader = new FileReader();

            reader.onload = (ev) => {
                const fileContent = ev.target?.result as string;

                try {
                    const inventoryAsJSON = JSON.parse(fileContent);
                    console.log("File read successfully.");
                    res(inventoryAsJSON);
                } catch (err) {
                    this.selectedFileErrors.push("There was an error parsing your inventory file.");
                    console.error(err);
                    rej(err);
                }
            }

            reader.onerror = (err) => {
                console.error("Error reading file:", err);
                rej(err);
            }

            reader.readAsText(file);
        });
    }

	private reset(): void {
        this.isSelectedFileValid = false;
		this.selectedFileErrors = [];
	}

	async onSubmit(event: Event): Promise<void> {
        event.preventDefault();
        
        if (this.selectedFile && this.isSelectedFileValid) {
            const fileContentAsJson = await this.readFileContents(this.selectedFile);
            this.uploadInventoryEvent.emit(fileContentAsJson);
        }
    }
}
