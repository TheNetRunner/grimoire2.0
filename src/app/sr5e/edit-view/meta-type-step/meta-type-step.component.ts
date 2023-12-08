import { Component, Input, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DataStoreService } from '../../services/data-store.service';
import { ShadowRun5ECharacter } from '../../models/character.inteface';
import { priorityTable } from '../../data/priorityTable';
import { MetaType } from '../../models/priorityTables.interface';
import { IMAGE_SUFFEX } from '../../common/constants';
import { MetaTypeDescription, metaTypeDescriptions } from '../../data/meta-type-descriptions';

@Component({
  selector: 'app-meta-type-step',
  templateUrl: './meta-type-step.component.html',
  styleUrl: './meta-type-step.component.css'
})
export class MetaTypeStepComponent implements OnInit {
    private formBuilder = inject(FormBuilder);
    private dataStoreService = inject(DataStoreService);

	@Input() character!: ShadowRun5ECharacter;

    imageSuffex = IMAGE_SUFFEX;
    metaTypeDescriptions = metaTypeDescriptions;
	metaTypeForm!: FormGroup;
    imageForm!: FormGroup;

    ngOnInit(): void {
        this.generateForms();
    }

    generateForms(): void {
        this.generateMetaTypeForm();
        this.generateImageForm();
    }

    generateImageForm(): void {
        this.imageForm = this.formBuilder.group({
            image: [this.character.image, Validators.required],
        });

        this.imageForm.valueChanges.subscribe((formData: any) => {
            this.dataStoreService.updateCharacter(this.character.id, formData);
        });
    }

    generateMetaTypeForm(): void {
        this.metaTypeForm = this.formBuilder.group({
            metaType: [this.character.metaType, Validators.required],
        });

        this.metaTypeForm.valueChanges.subscribe((formData: any) => {
            const newImageValue = `${formData.metaType}_one`;
            this.setImageFormValue(newImageValue);
            formData.image = newImageValue;
            
            this.dataStoreService.updateCharacter(this.character.id, formData);
        });
    }

    getMetaTypeOptions(): MetaType[] {
        const characterMetaTypePriority = this.character.priorities.metaType;
        const key = characterMetaTypePriority as keyof typeof priorityTable;

        return priorityTable[key].metaTypes;
    }

    getMetaTypeFormValue(): string {
        return this.metaTypeForm.get('metaType')?.value;
    }

    getImageFormValue(): string {
        return this.imageForm.get('image')?.value;
    }

    setImageFormValue(value: string) {
        this.imageForm.get('image')?.setValue(value);
    }

    getImageUrl(): string {
        return `../../../assets/imgs/shadow-run/${this.character.image}.png`;
    }

    getMetaTypeDescription(metaType: string): MetaTypeDescription {
        const key = metaType as keyof typeof metaTypeDescriptions;
        return metaTypeDescriptions[key];
    }
}
