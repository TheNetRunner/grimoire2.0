
import { Shadowrun5ECharacterData } from "../interfaces/shadowrun-5e-character-data.interface";
import { PriorityName, Priority, PrioritiesData } from "./priority.interface";
import { MetaTypeName } from "../interfaces/meta-type.interface";
import { MagicUserType } from "../interfaces/magic.interface";
import PrioritiesTableProvider from "./priority-table-provider";

export default class PrioritiesManager {
    private characterData: Shadowrun5ECharacterData;
    private prioritiesTableProvider: PrioritiesTableProvider;

    constructor(characterData: Shadowrun5ECharacterData) {
        this.characterData = characterData;
        this.prioritiesTableProvider = new PrioritiesTableProvider();
    }

    get priorities(): PrioritiesData {
        return this.characterData.priorities;
    }

    setPriority(priorityName: PriorityName, priority: Priority): void {
        switch (priorityName) {
            case PriorityName.metaType:
                this.metaTypePriority = priority;
                break;
            case PriorityName.attributes:
                this.attributesPriority = priority;
                break;
            case PriorityName.skills:
                this.skillsPriority = priority;
                break;
            case PriorityName.resources:
                this.resourcesPriority = priority;
                break;
            case PriorityName.magic:
                this.magicPriority = priority;
                break;
        }
    }

    private set metaTypePriority(priority: Priority) {
        if(priority !== this.priorities.metaType) {
            this.characterData.priorities.metaType = priority;
            this.handleMetaTypePriorityChange(priority);
        }
    }

    private handleMetaTypePriorityChange(priority: Priority): void {
        this.characterData.metaType = MetaTypeName.Human;
        const specialAttributesBuildPoints = this.prioritiesTableProvider.getSpecialAttributePoints(priority, this.characterData.metaType);
        this.characterData.specialAttributesData.specialAttributeBuildPoints = specialAttributesBuildPoints;
    }

    private set attributesPriority(priority: Priority) {
        if(priority !== this.priorities.attributes) {
            this.characterData.priorities.attributes = priority;
            this.handleAttributesPriorityChange(priority);
        }
    }

    private handleAttributesPriorityChange(priority: Priority): void {
        this.characterData.attributesData.attributeBuildPoints = this.prioritiesTableProvider.getAttributePoints(priority);
    }

    private set skillsPriority(priority: Priority) {
        if(priority !== this.characterData.priorities.skills) {
            this.characterData.priorities.skills = priority;
            this.handleSkillsPriorityChange(this.characterData.priorities.skills);
        }
    }

    private handleSkillsPriorityChange(priority: Priority): void {
        this.characterData.skillsData.skillBuildPoints = this.prioritiesTableProvider.getSkillsPoints(priority);
        this.characterData.skillsData.skillGroupBuildPoints = this.prioritiesTableProvider.getSkillGroupPoints(priority);
    }

    private set resourcesPriority(priority: Priority) {
        if(priority !== this.characterData.priorities.resources) {
            this.characterData.priorities.resources = priority;
        }
    }

    get startingNuyen(): number {
        const resourcesPriority = this.characterData.priorities.resources;
        const levelOfPlay = this.characterData.settingsData.levelOfPlay;

        return this.prioritiesTableProvider.getStartingNuyen(resourcesPriority, levelOfPlay);
    }

    private set magicPriority(priority: Priority) {
        if(priority !== this.characterData.priorities.magic) {
            this.characterData.priorities.magic = priority;
            this.handleMagicPriorityChange();
        }
    }

    handleMagicPriorityChange(): void {
        this.characterData.magicData.magicUserType = MagicUserType.None;
    }
}