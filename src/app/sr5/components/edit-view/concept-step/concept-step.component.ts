import { Component, Input, OnInit, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Shadowrun5ECharacter } from '../../../character/shadowrun-5e-character';
import { PortraitSelectComponent } from '../../modals/portrait-select/portrait-select.component';
import { DataStoreService } from '../../../services/data-store.service';
import { RoleName } from '../../../character/interfaces/shadowrun-5e-character-data.interface';
import { LevelOfPlayName } from '../../../character/interfaces/settings.interface';

@Component({
  selector: 'app-concept-step',
  templateUrl: './concept-step.component.html',
  styleUrl: './concept-step.component.css'
})
export class ConceptStepComponent implements OnInit {
    private modalService = inject(NgbModal);
    private dataService = inject(DataStoreService);
    private formBuilder = inject(FormBuilder);

    @Input() character!: Shadowrun5ECharacter;

    characterImageUrl: string = "";
    roles: string[] = Object.values(RoleName);
    levelsOfPlay: string[] = Object.values(LevelOfPlayName);
    
    requiredForm!: FormGroup;
    characteristicsForm!: FormGroup;
    socialStatusForm!: FormGroup;
    biographyForm!: FormGroup;
    notesForm!: FormGroup;
    gameSettingsForm!: FormGroup;

    characteristicsCollapse: boolean = true;
    socialStatusCollapse: boolean = true;
    biographyCollapse: boolean = true;
    notesCollapse: boolean = true;
    gameSettingsCollapse: boolean = true;

    ngOnInit(): void {
        this.setCharacterImageUrl();
        this.setForms();
    }

    setCharacterImageUrl(): void {
        this.characterImageUrl = `../../../../../assets/imgs/shadow-run/portraits/${this.character.imageName}.png`;
    }

    setForms(): void {
        this.setRequiredForm();
        this.setCharacteristicsForm();
        this.setSocialStatusForm();
        this.setBiographyForm();
        this.setGameSettingsForm();
    }

    setRequiredForm(): void {
        this.requiredForm = this.formBuilder.group({
            name: [this.character.basic.name, [Validators.required, Validators.maxLength(64), Validators.minLength(1)]],
            role: [this.character.basic.role],
        });

        this.requiredForm.valueChanges.subscribe((formData: any) => {
            this.character.basic.name = formData.name;
            this.character.basic.role = formData.role;
            this.saveCharacterChanges();
        });
    }

    setCharacteristicsForm(): void {
        this.characteristicsForm = this.formBuilder.group({
            ethnicity: [this.character.basic.ethnicity],
            age: [this.character.basic.age],
            gender: [this.character.basic.gender],
            eyes: [this.character.basic.eyes],
            hair: [this.character.basic.hair],
            height: [this.character.basic.height],
            weight: [this.character.basic.weight],
        });

        this.characteristicsForm.valueChanges.subscribe((formData: any) => {
            this.character.basic = { ...this.character.basic, ...formData };
            this.saveCharacterChanges();
        });
    }

    setSocialStatusForm(): void {
        this.socialStatusForm = this.formBuilder.group({
            streetCred: [this.character.basic.streetCred],
            notoriety: [this.character.basic.notoriety],
            publicAwareness: [this.character.basic.publicAwareness],
        });

        this.socialStatusForm.valueChanges.subscribe((formData: any) => {
            this.character.basic = { ...this.character.basic, ...formData };
            this.saveCharacterChanges();
        });
    }

    setBiographyForm(): void {
        this.biographyForm = this.formBuilder.group({
            bio: [this.character.basic.bio]
        });

        this.biographyForm.valueChanges.subscribe((formData: any) => {
            console.log(formData);
            this.character.basic.bio = formData.bio;
            this.saveCharacterChanges();
        });
    }

    setGameSettingsForm(): void {
        this.gameSettingsForm = this.formBuilder.group({
            levelOfPlay: [this.character.settings.levelOfPlay],
        });

        this.gameSettingsForm.valueChanges.subscribe((formData: any) => {
            this.character.settings = formData;
            this.saveCharacterChanges();
        });
    }


    openPortraitSelectModal(): void {
        const modalRef = this.modalService.open(PortraitSelectComponent, { size: 'lg', animation: true, centered: true, scrollable: true, windowClass: 'modal-height' });

        modalRef.componentInstance.characterImageName = this.character.imageName;

        modalRef.componentInstance.portraitSelectEvent.subscribe((portraitName: string) => {
            this.character.imageName = portraitName;
            this.setCharacterImageUrl();
            this.saveCharacterChanges();
        });
    }

    saveCharacterChanges(): void {
        this.dataService.updateCharacter(this.character.id, this.character.saveObject);
    }
}
