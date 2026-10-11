/**
 * KungFuWiki
 * Copyright (c) 2024-2026 Amir Czwink
 *
 * Licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */

import { MainCategory } from "../src/contentDefinitions";
import { RenderSimplifiedChinese } from "../templates/chinese";
import { fistForms } from "./kung-fu/forms/fist-forms";
import { jumps } from "./kung-fu/jumps";
import { kicks } from "./kung-fu/kicks";
import { stretching } from "./stretching";
import { taiChiMoves } from "./tai-chi/moves";
import { taiChiForms } from "./tai-chi/forms";
import { spearForms } from "./kung-fu/spear-forms";
import { taiChiBasics } from "./tai-chi/basics";
import { chineseLang } from "./chinese";
import { handTechnique } from "./general/hand-technique";
import { kungFuExercises } from "./kung-fu/excercises";
import { stances } from "./kung-fu/stances";
import { punches } from "./kung-fu/punches";
import { stickForms } from "./kung-fu/forms/stick-forms";
import { sabreForms } from "./kung-fu/sabre-forms";
import { masters } from "./masters";
import { SelectExcersises } from "../src/excersises";

export const categories: MainCategory[] = [
    {
        categories: [
            {
                description: `
                To stretch in a certain stance you add "${RenderSimplifiedChinese("压腿")}" to the name of the stance.
                E.g.: ${RenderSimplifiedChinese("马步压腿")}.
                `,
                displayText: "Stances",
                exercises: stances,
                name: "stances",
            },
            {
                displayText: "Hand technique",
                exercises: handTechnique,
                name: "hand-technique"
            },
            {
                displayText: "Strechting exercises",
                exercises: stretching,
                name: "streching-exercises",
            },
            {
                displayText: "Kicks",
                exercises: kicks,
                name: "kicks"
            },
            {
                displayText: "Punches",
                exercises: punches,
                name: "punches"
            },
            {
                displayText: "Arms technique",
                exercises: SelectExcersises("kung-fu/arms-technique"),
                name: "arms-technique",
            },
            {
                description: `
                [Demonstration of different jumps](https://www.instagram.com/p/B-OnNIxIP9V/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==)
                `,
                displayText: "Jumps",
                exercises: jumps,
                name: "jumps",
            },
            {
                displayText: "Exercises",
                exercises: kungFuExercises,
                name: "kung-fu-moves",
            },
            {
                media: {
                    type: "image-no-src",
                    fileName: "gun.jpg"
                },
                displayText: "Stick technique",
                exercises: SelectExcersises("kung-fu/stick-technique"),
                name: "stick-technique",
            },
            {
                media: {
                    type: "image-no-src",
                    fileName: "spear.jpg"
                },
                displayText: "Spear technique",
                exercises: SelectExcersises("kung-fu/spear-technique"),
                name: "spear-technique",
            },
            {
                media: {
                    type: "image-no-src",
                    fileName: "jian.jpg"
                },
                displayText: "Sword technique",
                exercises: SelectExcersises("kung-fu/sword-technique"),
                name: "sword-technique",
            }
        ],
        displayText: "Basics",
        name: "basics"
    },
    {
        categories: [
            {
                displayText: "Fist forms",
                exercises: SelectExcersises("kung-fu/fist-forms"),
                media: {
                    type: "image",
                    fileName: "quan.png",
                    sourceURL: "https://www.instagram.com/p/CBYvCYDptPB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                },
                name: "fist-forms"
            },
            {
                displayText: "(TODO: LEGACY) Fist forms",
                exercises: fistForms,
                media: {
                    type: "image",
                    fileName: "quan.png",
                    sourceURL: "https://www.instagram.com/p/CBYvCYDptPB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                },
                name: "legacy-fist-forms"
            },
            {
                displayText: "Sabre forms",
                exercises: SelectExcersises("kung-fu/sabre-forms"),
                media: {
                    type: "image-no-src",
                    fileName: "dao.jpg"
                },
                name: "sabre-forms",
            },
            {
                displayText: "(TODO: LEGACY) Sabre forms",
                exercises: sabreForms,
                media: {
                    type: "image-no-src",
                    fileName: "dao.jpg"
                },
                name: "legacy-sabre-forms",
            },
            {
                displayText: "Spear forms",
                exercises: SelectExcersises("kung-fu/spear-forms"),
                media: {
                    type: "image-no-src",
                    fileName: "spear.jpg"
                },
                name: "spear-forms"
            },
            {
                displayText: "(TODO: LEGACY) Spear forms",
                exercises: spearForms,
                media: {
                    type: "image-no-src",
                    fileName: "spear.jpg"
                },
                name: "legacy-spear-forms"
            },
            {
                media: {
                    type: "image-no-src",
                    fileName: "gun.jpg"
                },
                displayText: "Stick forms",
                exercises: SelectExcersises("kung-fu/stick-forms"),
                name: "stick-forms",
            },
            {
                media: {
                    type: "image-no-src",
                    fileName: "gun.jpg"
                },
                displayText: "(TODO: LEGACY) Stick forms",
                exercises: stickForms,
                name: "legacy-stick-forms",
            },
            {
                displayText: "Sword forms",
                exercises: SelectExcersises("kung-fu/sword-forms"),
                media: {
                    type: "image-no-src",
                    fileName: "jian.jpg"
                },
                name: "sword-forms",
            }
        ],
        displayText: "Forms",
        name: "forms"
    },
    {
        categories: [
            {
                displayText: "Tai Chi Basics",
                exercises: taiChiBasics,
                name: "tai-chi-basics"
            },
            {
                displayText: "Tai Chi Moves",
                exercises: taiChiMoves,
                name: "tai-chi-moves"
            },
            {
                displayText: "Tai Chi Forms",
                exercises: SelectExcersises("tai-chi/fist-forms"),
                name: "tai-chi-forms"
            },
            {
                displayText: "(TODO: LEGACY) Tai Chi Formen",
                exercises: taiChiForms,
                name: "legacy-tai-chi-forms"
            },
        ],
        displayText: "Tai Chi",
        name: "tai-chi"
    },
    {
        categories: [
            {
                displayText: "Qi Gong forms",
                exercises: SelectExcersises("qi-gong/forms"),
                name: "qi-gong-forms"
            },
            {
                displayText: "Sanda kicks",
                exercises: SelectExcersises("sanda/kicks"),
                name: "sanda-kicks"
            },
            {
                displayText: "Chinese vocabulary",
                exercises: SelectExcersises("misc/chinese"),
                name: "chinese"
            },
            {
                displayText: "(TODO: LEGACY) Chinese vocabulary",
                exercises: chineseLang,
                name: "legacy-chinese"
            },
            {
                displayText: "(TODO: LEGACY) Masters",
                exercises: masters,
                name: "legacy-masters",
                description: "This documentation page was written based on the training received from the following masters."
            },
            {
                displayText: "Masters",
                exercises: SelectExcersises("misc/masters"),
                name: "masters",
                description: "This documentation page was written based on the training received from the following masters."
            }
        ],
        displayText: "Other",
        name: "other"
    }
];