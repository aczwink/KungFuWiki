/**
 * KungFuWiki
 * Copyright (C) 2024-2025 Amir Czwink (amir130@hotmail.de)
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 * 
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 * */

import { MainCategory } from "../src/contentDefinitions";
import { RenderChinese } from "../templates/chinese";
import { fistForms } from "./kung-fu/fist-forms";
import { jumps } from "./kung-fu/jumps";
import { kicks } from "./kung-fu/kicks";
import { stretching } from "./stretching";
import { taiChiMoves } from "./tai-chi/moves";
import { taiChiForms } from "./tai-chi/forms";
import { spearForms } from "./kung-fu/spear-forms";
import { taiChiSteps } from "./tai-chi/steps";
import { qiGongForms } from "./qiGongForms";
import { chineseLang } from "./chinese";
import { handTechnique } from "./general/hand-technique";
import { spearTechnique } from "./kung-fu/spear-technique";
import { stickTechnique } from "./kung-fu/stick-technique";
import { kungFuMoves } from "./kung-fu/moves";
import { stances } from "./kung-fu/stances";
import { punches } from "./kung-fu/punches";
import { sandaTechnique } from "./sanda";
import { stickForms } from "./kung-fu/stick-forms";
import { sabreForms } from "./kung-fu/sabre-forms";

export const categories: MainCategory[] = [
    {
        //TODO: add this here somewhere <a target="_blank" href="https://www.facebook.com/Shaolin.Kungfu.Institut.eV/videos/hier-ein-paar-%C3%BCbungen-damit-ihr-euch-zuhause-fit-halten-k%C3%B6nnt/221996235575367/">Daily exercises</a>
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
                exercises: kungFuMoves,
                name: "kung-fu-moves",
            },
            {
                displayText: "Stick technique",
                exercises: stickTechnique,
                name: "stick-technique",
            },
            {
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
                name: "spear-forms"
            },
            {
                displayText: "Stick forms",
                exercises: stickForms,
                name: "stick-forms",
            },
        ],
        displayText: "Forms",
        name: "forms"
    },
    {
        categories: [
            {
                displayText: "Tai Chi Steps",
                exercises: taiChiSteps,
                name: "tai-chi-steps"
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
        ],
        displayText: "Other",
        name: "other"
    }
];