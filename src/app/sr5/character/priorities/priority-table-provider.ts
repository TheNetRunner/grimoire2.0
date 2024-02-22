import { MetaTypeName } from "../interfaces/meta-type.interface";
import { Priority } from "./priority.interface";
import { LevelOfPlayName } from "../interfaces/settings.interface";
import { MagicUserType } from "../interfaces/magic.interface";

export default class PrioritiesTableProvider {

    getSpecialAttributePoints(metaTypePriority: Priority, metaType: MetaTypeName): number {
        let value = 0;

        if(metaTypePriority === Priority.A) {
            if(metaType === MetaTypeName.Human) {
                value = 9;
            }

            if(metaType === MetaTypeName.Elf) {
                value = 8;
            }

            if(metaType === MetaTypeName.Dwarf) {
                value = 7;
            }

            if(metaType === MetaTypeName.Ork) {
                value = 7;
            }

            if(metaType === MetaTypeName.Troll) {
                value = 5;
            }
        }

        if(metaTypePriority === Priority.B) {
            if(metaType === MetaTypeName.Human) {
                value = 7;
            }

            if(metaType === MetaTypeName.Elf) {
                value = 6;
            }

            if(metaType === MetaTypeName.Dwarf) {
                value = 4;
            }

            if(metaType === MetaTypeName.Ork) {
                value = 4;
            }
        }

        if(metaTypePriority === Priority.C) {
            if(metaType === MetaTypeName.Human) {
                value = 5;
            }

            if(metaType === MetaTypeName.Elf) {
                value = 3;
            }

            if(metaType === MetaTypeName.Dwarf) {
                value = 1;
            }
        }

        if(metaTypePriority === Priority.D) {
            if(metaType === MetaTypeName.Human) {
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

    getStartingNuyen(priority: Priority, levelOfPlayName: LevelOfPlayName): number {
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

    getMagicUserTypeOptions(priority: Priority): MagicUserType[] {
        switch(priority) {
            case Priority.A:
                return [
                    MagicUserType.Magician,
                    MagicUserType.MysticAdept,
                    MagicUserType.Technomancer,
                    MagicUserType.None
                ];
            case Priority.B:
            case Priority.C:
                return [
                    MagicUserType.Magician,
                    MagicUserType.MysticAdept,
                    MagicUserType.Technomancer,
                    MagicUserType.Adept,
                    MagicUserType.AspectedMagician,
                    MagicUserType.None
                ];
            case Priority.D:
                return [
                    MagicUserType.Adept,
                    MagicUserType.AspectedMagician,
                    MagicUserType.None
                ];
            default:
                return [
                    MagicUserType.None
                ];

        }
    }

    getMagicResonanceBaseValue(magicPriority: Priority, magicUserType: MagicUserType): number {
        switch(magicPriority) {
            case Priority.A:
                return 6;
            case Priority.B:
                switch(magicUserType) {
                    case MagicUserType.Magician:
                    case MagicUserType.MysticAdept:
                    case MagicUserType.Technomancer:
                        return 4;
                    case MagicUserType.Adept:
                        return 6;
                    case MagicUserType.AspectedMagician:
                        return 5;
                }
                break;
            case Priority.C:
                switch(magicUserType) {
                    case MagicUserType.Magician:
                    case MagicUserType.MysticAdept:
                    case MagicUserType.AspectedMagician:
                    case MagicUserType.Technomancer:
                        return 3;
                    case MagicUserType.Adept:
                        return 4;
                }
                break;
            case Priority.D:
                return 2;
        }

        return 0;
    }
}