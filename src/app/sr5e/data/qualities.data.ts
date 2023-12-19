import { Quality } from "../models/quality.model"

export const positiveQualities: Quality[] = [
    {
        name: "ambidextrous",
        type: "positive",
        description: "The Ambidextrous character can handle objects equally well with either hand. Without this quality, any action per- formed solely with the off-hand (i.e., firing a gun) suffers a -2 dice pool modifier (see Attacker Using Off-Hand Weapon, CRB:178).",
        karmaCost: 4,
        source: "CRB:71",
        maxRating: 1
    },
    {
        name: "analytical mind",
        type: "positive",
        description: "Analytical Mind describes the uncanny ability to logically analyze information, deduce solutions to problems, or separate vital information from distractions and noise. It's useful in cracking cyphers, solving puzzles, figuring out traps, and sifting through data. This quality gives the character a +2 dice pool modifier to any Logic Tests involving pattern recognition, evidence analysis, clue hunting, or solving puzzles. This quality also reduces the time it takes the character to solve a problem by half.",
        karmaCost: 5,
        source: "CRB:72",
        maxRating: 1
    },
    {
        name: "aptitude",
        type: "positive",
        description: "This quality is how you become even better than the best in the world. The standard limit for skills is 12. Every so often, there is a character who can exceed limitations and be truly exceptional in a particular skill. With this particular quality, the character can have one skill rated at 7 at character creation, and may eventually build that skill up to rating 13. Characters may only take the Aptitude quality once.",
        karmaCost: 14,
        source: "CRB:72",
        maxRating: 1
    },
    {
        name: "astral chameleon",
        type: "positive",
        description: "With the Astral Chameleon quality, the character's astral signature blends into the background of astral space and is difficult to detect. All signatures left by the character last only half as long as other astral signatures. Any individuals assensing astral signatures left behind by a character with this quality receive a -2 dice pool modifier for the Assensing Test. Only characters with a Magic rating and capable of leaving astral signatures may have this quality.",
        karmaCost: 10,
        source: "CRB:72",
        maxRating: 1
    },
    {
        name: "bilingual",
        type: "positive",
        description: "A character with this quality reads, writes, and speaks a second language fluently. They can list a second language as a native tongue (see Language Skills, CRB:150). This quality can only be acquired at character creation; selecting it gives the character a second free language skill during Step Five: Purchase Active, Knowledge, and Language Skills, (CRB:88).",
        karmaCost: 5,
        source: "CRB:72",
        maxRating: 1
    },
    {
        name: "blandness",
        type: "positive",
        description: "This character blends into a crowd; he's seldom noticed and easily forgotten. He is unremarkable in every aspect of physical appearance. Anyone attempting to describe the character cannot come up with anything more precise than “average height, average build, average hair, etc. Increase the threshold for anyone to recall specific details about the character by 1. This means a Memory Test with a difficulty of Average (threshold of 2) becomes a Hard test (threshold of 3). Individuals attempting to shadow or physically locate a character with the Blandness quality in a populated setting receive a -2 dice pool modifier on all tests related to their search. The same penalty applies if they're asking around about the person based on the individual's physical appearance. The modifier does not, however, apply to magical or Matrix searches. If the character acquires any visible tattoos, scars, obvious cyberware, or other distinguishing features, the bonuses from the Blandness quality go away until the distinctive features are removed from the character's appearance. In certain circumstances and specific situations, the gamemaster may determine that Blandness does not apply. For example, a troll with the Blandness quality still towers head and shoulders over a crowd of humans and so still stands out, no matter how average their horns may be. The character only regains his bonus by leaving the situation where he stands out.",
        karmaCost: 8,
        source: "CRB:72",
        maxRating: 1
    },
    {
        name: "catlike",
        type: "positive",
        description: "A character with the Catlike quality is gifted with an uncanny elegance, a stealthy gait, and an almost pre- ternatural ability to move without making a sound. They also claim they land on their feet when dropped, though they tend not to let people test this. This quality adds a +2 dice pool modifier to Sneaking skill tests.",
        karmaCost: 7,
        source: "CRB:72",
        maxRating: 1
    },
    {
        name: "codeslinger",
        type: "positive",
        description: "Ones and zeroes are practically a native language to a Codeslinger. The character is adept at performing a particular Matrix action (which she selects when she selects this quality) and receives a +2 dice pool modifier to that Matrix action. This can only be selected for Matrix Actions (CRB:237) that have a test associated with them.",
        karmaCost: 10,
        source: "CRB:72",
        maxRating: 1
    },
    {
        name: "double jointed",
        type: "positive",
        description: "A Double-Jointed character has unusually flexible joints and can bend and contort his body into extreme posi- tions. The character receives a +2 dice pool modifier for Escape Artist tests. The character may also be able to squeeze into small, cramped spaces where less limber characters cannot. They're also great at parties and bars.",
        karmaCost: 6,
        source: "CRB:72",
        maxRating: 1
    },
    {
        name: "exceptional attribute",
        type: "positive",
        description: "The Exceptional Atribute quality is how you get to be the charismatic troll, or the agile dwarf. It allows you to possess one attribute at a level one point above the metatype maximum limit. For example, an ork character with the Exceptional Attribute quality for Strength could take his Strength attribute up to 10 before augmentations are applied, instead of the normal limit of 9. Exceptional Attribute also applies toward Special Attributes such as Magic and Resonance. Edge cannot affected by the Exceptional Attribute (Edge is raised by another quality called Lucky). A character may only take Exceptional Attribute once, and only with the gamemaster's approval.",
        karmaCost: 14,
        source: "CRB:72",
        maxRating: 1
    },
    {
        name: "first impression",
        type: "positive",
        description: "The First Impression quality enables a character to slide easily into new environments, situations, groups, and jobs. Whether infiltrating a gang, making contacts in a new city, or wrangling an invite to a private meet, the character gains a temporary +2 dice pool modifier for relevant Social Tests such as Negotiation and Con during the first meeting. This modifier does not apply to second and subsequent encounters",
        karmaCost: 11,
        source: "CRB:74",
        maxRating: 1
    },
    {
        name: "focused concentration",
        type: "positive",
        description: "A technomancer or magic user with the Focused Con- centration quality has the discipline to manipulate mana or Resonance more precisely than otherwise possible. This precision reduces stress to the magic user's or technomancer's body. She is able to sustain one spell/complex form with a force/level equal to her Focused Concentration rating without suffering any penalties. For example, a magic user with Focused Concentration rating 3 may sustain a Force 3 Armor spell without taking the negative dice pool modifier for sus- taining a spell. Sustaining any additional spells or com- plex forms incurs the standard -2 dice pool modifier per spell or complex form sustained. This quality may only be taken by magic user characters that are able to cast spells and technomancers.",
        karmaCost: 4,
        source: "CRB:74",
        maxRating: 6
    },
    {
        name: "gearhead",
        type: "positive",
        description: "The Gearhead is who you look for when it's time to stomp on the gas and move. She's a natural-born driver or pilot. When she's at the wheel/stick/controls of a vehicle or drone, she has an intuitive understanding of its limitations and its capabilities and is able to coax whatever machine she's controlling to perform at its best. During vehicle or chase combat, a Gearhead can increase the Speed of her vehicle or drone by 20 percent or increase the Handling modifier by +1 (player's choice). She also receives a +2 dice pool modifier when attempting difficult maneuvers or stunts in the vehicle. This bonus lasts for 1D6 minutes. The player can choose to make this bonus last up to an additional 1D6 minutes if she wants. Doing so pushes the vehicle or drone well beyond its design limits and risks catastrophic damage. For each minute the charac- ter pushes the vehicle past its initial bonus period, the vehicle automatically takes one point of stress damage (unresisted)",
        karmaCost: 11,
        source: "CRB:74",
        maxRating: 1
    },
    {
        name: "guts",
        type: "positive",
        description: "When a bug spirit with dripping mandibles comes call- ing, the character with Guts is the one most likely to stand and fight instead of freaking the hell out. Guts gives a character a +2 dice pool modifier on tests to re- sist fear and intimidation, including magically induced fear from spells or critter powers.",
        karmaCost: 10,
        source: "CRB:74",
        maxRating: 1
    },
    {
        name: "high pain tolerance",
        type: "positive",
        description: "High Pain Tolerance lets a character keep delivering the pain even if she's had plenty piled on her own head. A character with High Pain Tolerance can ignore one box of damage per rating point of this quality when calculating wound modifiers (see Wound Modifiers, CRB:169). So a character with this quality at Rating 2 can take 4 boxes of damage but carry on without wound modifiers as if she only had 2 boxes of damage. The -1 wound modifier would then kick in when the character takes her fifth box in damage. This quality may not be used with the Pain Resistance adept power, pain editor bioware, or damage compensator bioware.",
        karmaCost: 7,
        source: "CRB:74",
        maxRating: 3
    },
    {
        name: "home ground",
        type: "positive",
        description: "If a character knows her neighborhood better than anyone—the shortcuts, the hiding places, and the people she can trust—then she probably has the Home Ground quality. She knows the families who live there, their sto- ries, and what the kids who moved out are doing; she knows the streets better than GridGuide, knows things that aren't on GridGuide, and knows when GridGuide is wrong. She knows the politics of the gangs, who's running for whom and who's running from whom. But it's not just the physical streets. Depending on the character, her Home Ground quality can manifest in ways specific to who and what she is. When choosing this quality, select one of the bonuses.",
        karmaCost: 10,
        source: "CRB:74",
        maxRating: 1,
        options: [
            {
                name: "astral acclimation",
                description: "The character has become acclimated to the background count of her Home Ground. Through a lifetime of familiarity she's learned to work around it, enabling her to ignore up to two points of background count. For example, if the background count on her Home Ground is 3, she sees only a reduction of 1 to her Magic tests; if the background count is 5, for her it is only a 3, and so on. This quality works only on her Home Ground and has no benefit anywhere else."
            },
            {
                name: "you know a guy",
                description: "The character has built up long-lasting relationships with people from her neighborhood. These people are not contacts, but they know her as one of their own and are more likely to do favors for or talk to her. NPCs from the character's Home Ground neighborhood are considered friendly toward her wherever she encounters them (unless she has done something to change that).The character receives +2 Street Cred for any Negotiation with people from her Home Ground."
            },
            {
                name: "digital turf",
                description: "This is for a decker or technomancer who has a specific host that she calls her own. She may actually own the spot, or it can be a place she frequents enough to consider home. The character receives a +2 bonus to Matrix Tests while in her Home Ground host. Bonuses from other Qualities may stack with Home Ground. If the character has not frequented this host for more than six months, she loses the Home Ground quality because she is no longer as familiar as she should be."
            },
            {
                name: "the transporter",
                description: "This character knows the layout of streets, back alleys, service tunnels, etc. Like the back of her hand. She knows when GridGuide is wrong and when GridGuide is out of date. When the transporter is on her Home Ground, she has a +2 dice pool modifier for Eva- sion Tests."
            },
            {
                name: "on the lam",
                description: "Hiding out and lying low are part of a shadowrunner's daily life. On the Lam means a character has an encyclopedic knowledge of safehouses, bolt holes, abandoned buildings, just about any out-of-the-way place not claimed by gangs or squatters. When she needs to find a safe location in a hurry, this character receives a +2 dice pool bonus to her Intuition + appropriate street knowledge skill to find a suitable place to hole up fast."
            },
            {
                name: "street politics",
                description: "This character knows the street gangs, the criminal operations, and the be- neath-the-surface affiliations that are the social and political fabric of her Home Ground. She re- ceives a +2 dice pool modifier for Knowledge Tests relating to gangs or their operations."
            }
        ]
    },
    {
        name: "human looking",
        type: "positive",
        description: "A metahuman character with the Human-Looking quality can pass for human in most circumstanc- es. Human NPCs respond with neutral attitudes to- ward such characters when making Social skill tests (CRB:82), even those humans who are particularly biased against metahumans. The character may suffer increased animosity from metahuman NPCs who are prejudiced against humans and who either mistake him for human or distrust his motives for trying to look human. Only elves, dwarfs, and orks can take the Human-Looking quality.",
        karmaCost: 6,
        source: "CRB:75",
        maxRating: 1
    },
    {
        name: "indomitable",
        type: "positive",
        description: "Bodies and minds have limits, but some people have the will to push right through those boundaries. For each level of Indomitable, a character receives a +1 increase to an Inherent limit of his choice (Mental, Physical, or Social). He can take up to three levels and can apply them in any way he chooses (+3 to one Inherent Limit, for example; or +2 to one Inherent and +1 to another; or +1 to all three).",
        karmaCost: 8,
        source: "CRB:75",
        maxRating: 3
    },
    {
        name: "juryrigger",
        type: "positive",
        description: "Juryrigger gives a character an intuitive grasp of the in- ner workings and underlying principles of mechanical and electronic devices. She knows how to repair the broken, rejuvenate the worn, improve a device's effi- ciency, or coax it into doing things it's designers hadn't intended. Characters with the Juryrigger quality receive a +2 dice pool modifier for Mechanical Tests when juryrigging gear. If the gamemaster decides what the character wants to accomplish is in fact possible, he de- termines the threshold for her success using the Build/ Repair Table (CRB:146) as a guideline, then reduces the threshold for the test by 1. While a successful Mechan- ics Skill Test enables the Juryrigger to perform amazing technical feats, everything she devises is temporary. Examples of what a character may be able to do with Juryrigger can be found on CRB:146.",
        karmaCost: 10,
        source: "CRB:75",
        maxRating: 1
    },
    {
        name: "lucky",
        type: "positive",
        description: "The dice roll and the coin flips this character's way more often than not, giving her the chance to drop jaws in amazement at her good fortune. Lucky allows a character to possess an Edge attribute one point higher than his metatype maximum (for example, a human character could raise her Edge to 8). Note that taking this quality does not actually increase the character's current Edge rating, it just allows her the opportunity to do so; the Karma cost for gaining the extra point must still be paid. This quality may only be taken once and must be approved by the gamemaster. The Lucky quality cannot be combined with Exceptional Attribute.",
        karmaCost: 12,
        source: "CRB:76",
        maxRating: 1
    }
]

export const negativeQualities: Quality[] = [
    {
        name: "addiction",
        type: "negative",
        description: "A character with the Addiction quality is hooked on chemical substances, such as street drugs (novacoke, bliss, tempo); technological or magical devices, such as better-than-life (BTL) chips or foci; or potentially addictive activities such as gambling or sex. Physiological Addictions affect the Body's functions, producing pain, nausea, shakes, and other side effects that can impair the runner, particularly during withdrawal. Some possible effects of psychological Addictions include paranoia, anxiety, insomnia, poor concentration, mood disorders, and depression. For specific rules on Addiction Tests, Withdrawal Tests, and staying clean, see CRB:414. The bonus Karma value of this quality depends on how severe the addiction is. Levels of addiction include: Mild, Moderate, Severe, or Burnout. Addictions get worse over prolonged periods of time without treat- ment. Each level of Addiction has a starting dosage level that tells the character how much of a substance or ac- tivity they must use for a craving to be sated. This level can be increased if the character has augmentations. The more severe a character's Addiction, the more sub- stance or time devoted to the activity he needs to satisfy his cravings. At the lower end of the spectrum for the Addiction quality (Mild, Moderate), it is easier to hide the effects of an Addiction. At the most severe levels (Severe, Burn- out), there are noticeable physical and mental signs of Addiction. These signs negatively impact his Social Tests even if he is not suffering the effects of withdrawal.",
        karmaCost: 4,
        source: "CRB:77",
        maxRating: 1
    }
]