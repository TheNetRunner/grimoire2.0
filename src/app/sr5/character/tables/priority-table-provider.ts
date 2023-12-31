import { MetaType } from "../interfaces/meta-type.interface";
import { Priority } from "../interfaces/priority.interface";
import { LevelOfPlayName } from "../interfaces/settings.interface";


export default class PriorityTableProvider {

    getSpecialAttributePoints(metaTypePriority: Priority, metaType: MetaType): number {
        let value = 0;

        if(metaTypePriority === Priority.A) {
            if(metaType === MetaType.Human) {
                value = 9;
            }

            if(metaType === MetaType.Elf) {
                value = 8;
            }

            if(metaType === MetaType.Dwarf) {
                value = 7;
            }

            if(metaType === MetaType.Ork) {
                value = 7;
            }

            if(metaType === MetaType.Troll) {
                value = 5;
            }
        }

        if(metaTypePriority === Priority.B) {
            if(metaType === MetaType.Human) {
                value = 7;
            }

            if(metaType === MetaType.Elf) {
                value = 6;
            }

            if(metaType === MetaType.Dwarf) {
                value = 4;
            }

            if(metaType === MetaType.Ork) {
                value = 4;
            }
        }

        if(metaTypePriority === Priority.C) {
            if(metaType === MetaType.Human) {
                value = 5;
            }

            if(metaType === MetaType.Elf) {
                value = 3;
            }

            if(metaType === MetaType.Dwarf) {
                value = 1;
            }
        }

        if(metaTypePriority === Priority.D) {
            if(metaType === MetaType.Human) {
                value = 5;
            }
        }

        if(metaTypePriority === Priority.E) {
            value = 1;
        }


        return value
    }

    getAttributePoints(priority: Priority): number {
        let value = 0;

        if(priority === Priority.A) {
            value = 24;
        }

        if(priority === Priority.B) {
            value = 20;
        }

        if(priority === Priority.C) {
            value = 16;
        }

        if(priority === Priority.D) {
            value = 14;
        }

        if(priority === Priority.E) {
            value = 12;
        }

        return value;
    }

    getSkillsPoints(priority: Priority): number {
        let value = 0;

        if(priority === Priority.A) {
            value = 46;
        }

        if(priority === Priority.B) {
            value = 36;
        }

        if(priority === Priority.C) {
            value = 28;
        }

        if(priority === Priority.D) {
            value = 22;
        }

        if(priority === Priority.E) {
            value = 18;
        }

        return value;
    }

    getSkillGroupPoints(priority: Priority): number {
        let value = 0;

        if(priority === Priority.A) {
            value = 10;
        }

        if(priority === Priority.B) {
            value = 5;
        }

        if(priority === Priority.C) {
            value = 2;
        }

        return value;
    }

    getResouces(priority: Priority, levelOfPlayName: LevelOfPlayName): number {
        if(priority === Priority.A) {
            if(levelOfPlayName === LevelOfPlayName.Street) {
                return 75000;
            }

            if(levelOfPlayName === LevelOfPlayName.Normal) {
                return 450000;
            }

            if(levelOfPlayName === LevelOfPlayName.Prime) {
                return 500000;
            }
        }

        if(priority === Priority.B) {
            if(levelOfPlayName === LevelOfPlayName.Street) {
                return 50000;
            }

            if(levelOfPlayName === LevelOfPlayName.Normal) {
                return 275000;
            }

            if(levelOfPlayName === LevelOfPlayName.Prime) {
                return 325000;
            }
        }

        if(priority === Priority.C) {
            if(levelOfPlayName === LevelOfPlayName.Street) {
                return 25000;
            }

            if(levelOfPlayName === LevelOfPlayName.Normal) {
                return 140000;
            }

            if(levelOfPlayName === LevelOfPlayName.Prime) {
                return 210000;
            }
        }

        if(priority === Priority.D) {
            if(levelOfPlayName === LevelOfPlayName.Street) {
                return 15000;
            }

            if(levelOfPlayName === LevelOfPlayName.Normal) {
                return 50000;
            }

            if(levelOfPlayName === LevelOfPlayName.Prime) {
                return 150000;
            }
        }

        if(priority === Priority.E) {
            if(levelOfPlayName === LevelOfPlayName.Street) {
                return 6000;
            }

            if(levelOfPlayName === LevelOfPlayName.Normal) {
                return 6000;
            }

            if(levelOfPlayName === LevelOfPlayName.Prime) {
                return 100000;
            }
        }

        return 0;
    }

    getMagicBaseValue(magicPriority: Priority): number {
        let value = 0;
        
        if(magicPriority === Priority.A) {
            value = 6;
        }

        if(magicPriority === Priority.B) {
            value = 4;
        }

        if(magicPriority === Priority.C) {
            value = 3;
        }

        if(magicPriority === Priority.D) {
            value = 2;
        }

        return value;
    }

    getResonanceBaseValue(magicPriority: Priority): number {
        let value = 0;
        
        if(magicPriority === Priority.A) {
            value = 6;
        }

        if(magicPriority === Priority.B) {
            value = 4;
        }

        if(magicPriority === Priority.C) {
            value = 3;
        }

        return value;
    }
}