import { Spell } from "../models/magic.model";

const combatSpells: Spell[] = [
    {
        name: "toxic wave",
        page: "CRB:283",
        type: "physical",
        keyWords: ["indirect", "elemental"],
        range: "los",
        damange: "physical",
        duration: "instantaneous",
        drain: -3,
        description: "These spells create a powerful corrosive that sprays the target, causing terrible burns and eating away organic and metallic material—treat it as Acid damage (p. 170), with appropriate effects on the affected area and any objects therein. The acid quickly evaporates, but the damage it inflicts remains. Acid Stream is a single-target spell, Toxic Wave is an area spell."
    },
    {
        name: "acid stream",
        page: "CRB:283",
        type: "physical",
        keyWords: ["indirect", "elemental"],
        range: "los",
        damange: "physical",
        duration: "instantaneous",
        drain: -3,
        description: "These spells create a powerful corrosive that sprays the target, causing terrible burns and eating away organic and metallic material—treat it as Acid damage (p. 170), with appropriate effects on the affected area and any objects therein. The acid quickly evaporates, but the damage it inflicts remains. Acid Stream is a single-target spell, Toxic Wave is an area spell."
    },
    {
        name: "punch",
        page: "CRB:283",
        keyWords: ["indirect"],
        type: "physical",
        range: "touch",
        damange: "stun",
        duration: "instantaneous",
        drain: -6,
        description: "These spells smack the target(s) with invisible psychokinetic force, similar to a bruising punch, that inflicts Stun damage. Punch requires you to touch the target. Clout affects a single target, while Blast is an area spell."
    },
    {
        name: "clout",
        page: "CRB:284",
        keyWords: ["indirect"],
        type: "physical",
        range: "los",
        damange: "stun",
        duration: "instantaneous",
        drain: -3,
        description: "These spells smack the target(s) with invisible psychokinetic force, similar to a bruising punch, that inflicts Stun damage. Punch requires you to touch the target. Clout affects a single target, while Blast is an area spell."
    },
    {
        name: "blast",
        page: "CRB:284",
        keyWords: ["indirect"],
        type: "physical",
        range: "los",
        damange: "stun",
        duration: "instantaneous",
        drain: 0,
        description: "These spells smack the target(s) with invisible psychokinetic force, similar to a bruising punch, that inflicts Stun damage. Punch requires you to touch the target. Clout affects a single target, while Blast is an area spell."
    },
    {
        name: "death touch",
        page: "CRB:284",
        keyWords: ["direct"],
        type: "mana",
        range: "touch",
        damange: "physical",
        duration: "instantaneous",
        drain: -6,
        description: "Death Touch, Manabolt, and Manaball all channel destructive magical power into the target, doing Phys- ical damage. The damage inflicted is similar to massive cellular die off from radiation or necrotizing fasciitis, but without the continuing effects. But still, ick. Since they are mana spells, spells in this group only affect living and magical targets and are resisted with Will- power. Death Touch requires the magician to touch the target. Manabolt affects a single target, Manaball is an area-effect spell."
    },
    {
        name: "manabolt",
        page: "CRB:284",
        keyWords: ["direct"],
        type: "mana",
        range: "los",
        damange: "physical",
        duration: "instantaneous",
        drain: -3,
        description: "Death Touch, Manabolt, and Manaball all channel destructive magical power into the target, doing Phys- ical damage. The damage inflicted is similar to massive cellular die off from radiation or necrotizing fasciitis, but without the continuing effects. But still, ick. Since they are mana spells, spells in this group only affect living and magical targets and are resisted with Will- power. Death Touch requires the magician to touch the target. Manabolt affects a single target, Manaball is an area-effect spell."
    },
    {
        name: "manaball",
        page: "CRB:284",
        keyWords: ["direct"],
        type: "mana",
        range: "los (a)",
        damange: "physical",
        duration: "instantaneous",
        drain: 0,
        description: "Death Touch, Manabolt, and Manaball all channel destructive magical power into the target, doing Phys- ical damage. The damage inflicted is similar to massive cellular die off from radiation or necrotizing fasciitis, but without the continuing effects. But still, ick. Since they are mana spells, spells in this group only affect living and magical targets and are resisted with Will- power. Death Touch requires the magician to touch the target. Manabolt affects a single target, Manaball is an area-effect spell."
    },
    {
        name: "flamethrower",
        page: "CRB:284",
        keyWords: ["indirect", "elemental"],
        type: "physical",
        range: "los",
        damange: "physical",
        duration: "instantaneous",
        drain: -3,
        description: "These spells create an explosion of flames that flash into existence and scorch the target(s), giving them the double benefit of causing pain and being intimidating as hell. These spells deal Fire damage (p. 171). These flames burn out after striking the target, but their secondary effects may ignite flammable materials that continue to burn after the spell is exhausted. Flamethrower is a single-target spell, while Fireball is an area spell."
    },
    {
        name: "fireball",
        page: "CRB:284",
        keyWords: ["indirect", "elemental"],
        type: "mana",
        range: "los (a)",
        damange: "physical",
        duration: "instantaneous",
        drain: 0,
        description: "These spells create an explosion of flames that flash into existence and scorch the target(s), giving them the double benefit of causing pain and being intimidating as hell. These spells deal Fire damage (p. 171). These flames burn out after striking the target, but their secondary effects may ignite flammable materials that continue to burn after the spell is exhausted. Flamethrower is a single-target spell, while Fireball is an area spell."
    },
    {
        name: "lightning bolt",
        page: "CRB:284",
        keyWords: ["indirect", "elemental"],
        type: "physical",
        range: "los",
        damange: "physical",
        duration: "instantaneous",
        drain: -3,
        description: "These spells create and direct vicious strikes of elec- tricity that cause Electricity damage (p. 170). Lightning Bolt is a single target spell. Ball Lightning is an area spell."
    },
    {
        name: "ball lightning",
        page: "CRB:284",
        keyWords: ["indirect", "elemental"],
        type: "physical",
        range: "los (a)",
        damange: "physical",
        duration: "instantaneous",
        drain: -1,
        description: "These spells create and direct vicious strikes of elec- tricity that cause Electricity damage (p. 170). Lightning Bolt is a single target spell. Ball Lightning is an area spell."
    }
]



export const allSpells: Spell[] = [...combatSpells]