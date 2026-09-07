/**
 * KungFuWiki
 * Copyright (c) 2024-2026 Amir Czwink
 *
 * Licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */

import { MainCategory } from "../src/contentDefinitions";
import { RenderChinese } from "../templates/chinese";
import { fistForms } from "./kung-fu/fist-forms";
import { jumps } from "./kung-fu/jumps";
import { kicks } from "./kung-fu/kicks";
import { stretching } from "./stretching";
import { taiChiMoves } from "./tai-chi/moves";
import { taiChiForms } from "./tai-chi/forms";
import { spearForms } from "./kung-fu/spear-forms";
import { taiChiBasics } from "./tai-chi/basics";
import { qiGongForms } from "./qiGongForms";
import { chineseLang } from "./chinese";
import { handTechnique } from "./general/hand-technique";
import { spearTechnique } from "./kung-fu/spear-technique";
import { stickTechnique } from "./kung-fu/stick-technique";
import { kungFuExercises } from "./kung-fu/excercises";
import { stances } from "./kung-fu/stances";
import { punches } from "./kung-fu/punches";
import { sandaTechnique } from "./sanda";
import { stickForms } from "./kung-fu/stick-forms";
import { sabreForms } from "./kung-fu/sabre-forms";
import { masters } from "./masters";
import { swordForms } from "./kung-fu/sword-forms";

export const categories: MainCategory[] = [
    {
        categories: [
            {
                description: `
                To stretch in a certain stance you add "${RenderChinese("压腿")}" to the name of the stance.
                E.g.: ${RenderChinese("馬步压腿")}.
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
                exercises: stickTechnique,
                name: "stick-technique",
            },
            {
                media: {
                    type: "image-no-src",
                    fileName: "spear.jpg"
                },
                displayText: "Spear technique",
                exercises: spearTechnique,
                name: "spear-technique",
            },
        ],
        displayText: "Basics",
        name: "basics"
    },
    {
        categories: [
            {
                displayText: "Fist forms",
                exercises: fistForms,
                media: {
                    type: "image",
                    fileName: "quan.png",
                    sourceURL: "https://www.instagram.com/p/CBYvCYDptPB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                },
                name: "fist-forms"
            },
            {
                displayText: "Sabre forms",
                exercises: sabreForms,
                media: {
                    type: "image-no-src",
                    fileName: "dao.jpg"
                },
                name: "sabre-forms",
            },
            {
                displayText: "Spear forms",
                exercises: spearForms,
                media: {
                    type: "image-no-src",
                    fileName: "spear.jpg"
                },
                name: "spear-forms"
            },
            {
                media: {
                    type: "image-no-src",
                    fileName: "gun.jpg"
                },
                displayText: "Stick forms",
                exercises: stickForms,
                name: "stick-forms",
            },
            {
                displayText: "Sword forms",
                exercises: swordForms,
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
                displayText: "Tai Chi Formen",
                exercises: taiChiForms,
                name: "tai-chi-forms"
            },
        ],
        displayText: "Tai Chi",
        name: "tai-chi"
    },
    {
        categories: [
            {
                displayText: "Qi Gong forms",
                exercises: qiGongForms,
                name: "qi-gong-forms"
            },
            {
                displayText: "Sanda",
                exercises: sandaTechnique,
                name: "sanda"
            },
            {
                displayText: "Chinese vocabulary",
                exercises: chineseLang,
                name: "chinese"
            },
            {
                displayText: "Masters",
                exercises: masters,
                name: "masters",
                description: "This documentation page was written based on the training received from the following masters."
            }
        ],
        displayText: "Other",
        name: "other"
    }
];