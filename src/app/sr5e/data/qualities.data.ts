import { AttributeName } from "../models/attribute.model"
import { Quality } from "../models/quality.model"

export const positiveQualities: Quality[] = [
    {
        name: "ambidextrous",
        description: "The Ambidextrous character can handle objects equally well with either hand. Without this quality, any action per- formed solely with the off–hand (i.e., firing a gun) suffers a -2 dice pool modifier (see Attacker Using Off-Hand Weapon, p. 178).",
        karmaCost: 4,
        source: "CRB:71",
        maxRating: 1
    },
    {
        name: "analytical mind",
        description: "Analytical Mind describes the uncanny ability to logically analyze information, deduce solutions to problems, or separate vital information from distractions and noise. It's useful in cracking cyphers, solving puzzles, figuring out traps, and sifting through data. This quality gives the character a +2 dice pool modifier to any Logic Tests involving pattern recognition, evidence analysis, clue hunting, or solving puzzles. This quality also reduces the time it takes the character to solve a problem by half.",
        karmaCost: 5,
        source: "CRB:72",
        maxRating: 1
    },
    {
        name: "aptitude",
        description: "This quality is how you become even better than the best in the world. The standard limit for skills is 12. Every so often, there is a character who can exceed limitations and be truly exceptional in a particular skill. With this particular quality, the character can have one skill rated at 7 at character creation, and may eventually build that skill up to rating 13. Characters may only take the Aptitude quality once.",
        karmaCost: 14,
        source: "CRB:72",
        maxRating: 1
    },
    {
        name: "astral chameleon",
        description: "With the Astral Chameleon quality, the character's astral signature blends into the background of astral space and is difficult to detect. All signatures left by the character last only half as long as other astral signatures. Any individu- als assensing astral signatures left behind by a character with this quality receive a -2 dice pool modifier for the Assensing Test. Only characters with a Magic rating and capable of leaving astral signatures may have this quality.",
        karmaCost: 10,
        source: "CRB:72",
        maxRating: 1
    },
    {
        name: "bilingual",
        description: "A character with this quality reads, writes, and speaks a second language fluently. They can list a second lan- guage as a native tongue (see Language Skills, p. 150). This quality can only be acquired at character creation; selecting it gives the character a second free language skill during Step Five: Purchase Active, Knowledge, and Language Skills, (p. 88).",
        karmaCost: 5,
        source: "CRB:72",
        maxRating: 1
    },
    {
        name: "blandness",
        description: "This character blends into a crowd; he's seldom noticed and easily forgotten. He is unremarkable in every aspect of physical appearance. Anyone attempting to describe the character cannot come up with anything more precise than “average height, average build, average hair, etc. Increase the threshold for anyone to recall specific details about the character by 1. This means a Memory Test with a difficulty of Average (threshold of 2) becomes a Hard test (threshold of 3). Individuals attempting to shadow or physically locate a character with the Blandness quality in a populated setting receive a -2 dice pool modifier on all tests related to their search. The same penalty applies if they're asking around about the person based on the individual's physical appearance. The modifier does not, however, apply to magical or Matrix searches. If the character acquires any visible tattoos, scars, obvious cyberware, or other distinguishing features, the bonuses from the Blandness quality go away until the distinctive features are removed from the character's appearance. In certain circumstances and specific situations, the gamemaster may determine that Blandness does not apply. For example, a troll with the Blandness quality still towers head and shoulders over a crowd of humans and so still stands out, no matter how average their horns may be. The character only regains his bonus by leaving the situation where he stands out.",
        karmaCost: 8,
        source: "CRB:72",
        maxRating: 1
    },
    {
        name: "catlike",
        description: "A character with the Catlike quality is gifted with an uncanny elegance, a stealthy gait, and an almost pre- ternatural ability to move without making a sound. They also claim they land on their feet when dropped, though they tend not to let people test this. This quality adds a +2 dice pool modifier to Sneaking skill tests.",
        karmaCost: 7,
        source: "CRB:72",
        maxRating: 1
    },
    {
        name: "codeslinger",
        description: "Ones and zeroes are practically a native language to a Codeslinger. The character is adept at performing a particular Matrix action (which she selects when she selects this quality) and receives a +2 dice pool modifier to that Matrix action. This can only be selected for Matrix Actions (p. 237) that have a test associated with them.",
        karmaCost: 10,
        source: "CRB:72",
        maxRating: 1
    },
    {
        name: "double jointed",
        description: "A Double-Jointed character has unusually flexible joints and can bend and contort his body into extreme posi- tions. The character receives a +2 dice pool modifier for Escape Artist tests. The character may also be able to squeeze into small, cramped spaces where less limber characters cannot. They're also great at parties and bars.",
        karmaCost: 6,
        source: "CRB:72",
        maxRating: 1
    },
    {
        name: "exceptional attribute",
        description: "The Exceptional Atribute quality is how you get to be the charismatic troll, or the agile dwarf. It allows you to possess one attribute at a level one point above the metatype maximum limit. For example, an ork character with the Exceptional Attribute quality for Strength could take his Strength attribute up to 10 before augmentations are applied, instead of the normal limit of 9. Exceptional Attribute also applies toward Special Attributes such as Magic and Resonance. Edge cannot affected by the Exceptional Attribute (Edge is raised by another quality called Lucky). A character may only take Exceptional Attribute once, and only with the gamemaster's approval.",
        karmaCost: 14,
        source: "CRB:72",
        maxRating: 1
    },
    {
        name: "first impression",
        description: "The First Impression quality enables a character to slide easily into new environments, situations, groups, and jobs. Whether infiltrating a gang, making contacts in a new city, or wrangling an invite to a private meet, the character gains a temporary +2 dice pool modifier for relevant Social Tests such as Negotiation and Con during the first meeting. This modifier does not apply to second and subsequent encounters",
        karmaCost: 11,
        source: "CRB:74",
        maxRating: 1
    },
    {
        name: "focused concentration",
        description: "A technomancer or magic user with the Focused Con- centration quality has the discipline to manipulate mana or Resonance more precisely than otherwise possible. This precision reduces stress to the magic user's or technomancer's body. She is able to sustain one spell/complex form with a force/level equal to her Focused Concentration rating without suffering any penalties. For example, a magic user with Focused Con- centration rating 3 may sustain a Force 3 Armor spell without taking the negative dice pool modifier for sus- taining a spell. Sustaining any additional spells or com- plex forms incurs the standard -2 dice pool modifier per spell or complex form sustained. This quality may only be taken by magic user characters that are able to cast spells and technomancers.",
        karmaCost: 4,
        source: "CRB:74",
        maxRating: 6
    }
]

export const negativeQualities: Quality[] = [
    {
        name: "addiction",
        description: "A character with the Addiction quality is hooked on chemical substances, such as street drugs (novacoke, bliss, tempo); technological or magical devices, such as better-than-life (BTL) chips or foci; or potentially addictive activities such as gambling or sex. Physiological Addictions affect the Body's functions, producing pain, nausea, shakes, and other side effects that can impair the runner, particularly during withdrawal. Some possible effects of psychological Addictions include paranoia, anxiety, insomnia, poor concentration, mood disorders, and depression. For specific rules on Addiction Tests, Withdrawal Tests, and staying clean, see p. 414. The bonus Karma value of this quality depends on how severe the addiction is. Levels of addiction include: Mild, Moderate, Severe, or Burnout. Addictions get worse over prolonged periods of time without treat- ment. Each level of Addiction has a starting dosage level that tells the character how much of a substance or ac- tivity they must use for a craving to be sated. This level can be increased if the character has augmentations. The more severe a character's Addiction, the more sub- stance or time devoted to the activity he needs to satisfy his cravings. At the lower end of the spectrum for the Addiction quality (Mild, Moderate), it is easier to hide the effects of an Addiction. At the most severe levels (Severe, Burn- out), there are noticeable physical and mental signs of Addiction. These signs negatively impact his Social Tests even if he is not suffering the effects of withdrawal.",
        karmaCost: 4,
        source: "CRB:77",
        maxRating: 1
    }
]