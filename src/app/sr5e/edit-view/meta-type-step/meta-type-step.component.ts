import { Component, Input, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DataStoreService } from '../../services/data-store.service';
import { CharacterService } from '../../services/character.service';

import { MetaTypeStartingValues, MetaTypeDescription } from '../../models/meta-type.model';
import { ShadowRun5ECharacter } from '../../models/new-character.model';
import { MetaTypeName } from '../../models/meta-type.model';

import { IMAGE_SUFFEX } from '../../common/constants';
import { metaTypeDescriptions } from '../../data/meta-type-descriptions.data';
import { attributesTable } from '../../data/meta-type-attribute-table.data';


@Component({
  selector: 'app-meta-type-step',
  templateUrl: './meta-type-step.component.html',
  styleUrl: './meta-type-step.component.css'
})
export class MetaTypeStepComponent implements OnInit {
    private formBuilder = inject(FormBuilder);
    private dataStoreService = inject(DataStoreService);
    private characterService = inject(CharacterService);

	@Input() character!: ShadowRun5ECharacter;

    imageSuffex = IMAGE_SUFFEX;
    metaTypeDescriptions = metaTypeDescriptions;
    attributesTable = attributesTable;
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
            this.handleMetaTypeChange(formData);
        });
    }

    handleMetaTypeChange(formData: any): void {
        let updates = formData;
        const newImageValue = `${formData.metaType}_one`;

        updates.image = this.setImageFormValue(newImageValue);

        this.dataStoreService.updateCharacter(this.character.id, formData);
    }

    getMetaTypeOptions(): MetaTypeStartingValues[] {
        return this.characterService.getPriorityMetaTypes(this.character.priorities.metaType)
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

    getMetaTypeDescription(metaTypeName: MetaTypeName): MetaTypeDescription {
        return metaTypeDescriptions[metaTypeName];
    }

    get metaTypeRacial(): string {
        return this.characterService.getMetaTypeRecialAbility(this.character);
    }
}
