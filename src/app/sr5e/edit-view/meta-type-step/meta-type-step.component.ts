import { Component, Input, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DataStoreService } from '../../services/data-store.service';

import { MetaTypeDescription } from '../../models/meta-type.model';
import { ShadowRun5ECharacter } from '../../models/character.model';
import { MetaType } from '../../models/meta-type.model';

import { IMAGE_SUFFEX } from '../../common/constants';
import { metaTypeDescriptions } from '../../data/meta-type-descriptions.data';
import { MetaTypeService } from '../../services/meta-type.service';

import { PriorityTableService } from '../../services/priority-table.service';
import { PriorityTableRow } from '../../models/priority.interface';


@Component({
  selector: 'app-meta-type-step',
  templateUrl: './meta-type-step.component.html',
  styleUrl: './meta-type-step.component.css'
})
export class MetaTypeStepComponent implements OnInit {
    private formBuilder = inject(FormBuilder);
    private priorityTableService = inject(PriorityTableService);
    private metaTypeService = inject(MetaTypeService);
    private dataStoreService = inject(DataStoreService);

	@Input() character!: ShadowRun5ECharacter;

    imageSuffex: string[] = IMAGE_SUFFEX;
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
            image: [this.character.imageName, Validators.required],
        });

        this.imageForm.valueChanges.subscribe((formData: any) => {
            this.character.imageName = formData.image;
            this.dataStoreService.updateCharacter(this.character.id, this.character.getSaveObject());
        });
    }
    
    get imageFormValue(): string {
        return this.imageForm.get('image')?.value;
    }

    generateMetaTypeForm(): void {
        this.metaTypeForm = this.formBuilder.group({
            metaType: [this.character.metaType, Validators.required],
        });

        this.metaTypeForm.valueChanges.subscribe((formData: any) => {
            this.handleMetaTypeChange(formData);
        });
    }

    get metaTypeFormValue(): string {
        return this.metaTypeForm.get('metaType')?.value;
    }

    handleMetaTypeChange(formData: any): void {
        this.character.handleMetaTypeChange(formData.metaType);
        this.dataStoreService.updateCharacter(this.character.id, this.character.getSaveObject());
    }

    getImageUrl(): string {
        return `../../../assets/imgs/shadow-run/${this.character.imageName}.png`;
    }

    getMetaTypesFromTable(): PriorityTableRow['metaTypes'] {
        return this.priorityTableService.getMetaTypes(this.character.priorities.metaType);
    }

    getMetaTypeDescription(metaTypeName: MetaType): MetaTypeDescription {
        return metaTypeDescriptions[metaTypeName];
    }

    getMetaTypeRacial(): string {
        return this.metaTypeService.getMetaTypeRacialAbilities(this.character.metaType);
    }
}
