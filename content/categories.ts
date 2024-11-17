/**
 * KungFuWiki
 * Copyright (C) 2024 Amir Czwink (amir130@hotmail.de)
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

import { ExerciseCategory } from "../src/contentDefinitions";
import { RenderChinese } from "../templates/chinese";
import { fistForms } from "./fistForms";
import { jumps } from "./jumps";
import { kicks } from "./kicks";
import { kungFuMoves } from "./kungFuMoves";
import { otherForms } from "./otherForms";
import { punches } from "./punches";
import { stances } from "./stances";
import { weaponForms } from "./weaponForms";

export const categories: ExerciseCategory[] = [
    {
        description: `
        <p>Um einen Stand als Basis zur Dehnung zu nutzen hängt man "${RenderChinese("压腿")}" an. Zum Beispiel: ${RenderChinese("馬步压腿")}.</p>
        <a target="_blank" href="https://www.instagram.com/p/CBVK6c6pOjY/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==">Übersicht Stände</a>
        `,
        displayText: "Stände",
        exercises: stances,
        name: "stances",
    },
    {
        displayText: "Tritte",
        exercises: kicks,
        name: "kicks"
    },
    {
        displayText: "Schläge",
        exercises: punches,
        name: "punches"
    },
    {
        description: `
        <a target="_blank" href="https://www.instagram.com/p/B-OnNIxIP9V/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==">Demonstration verschiedener Sprünge von Meister Li</a>
        `,
        displayText: "Sprünge",
        exercises: jumps,
        name: "jumps",
    },
    {
        displayText: "Übungen",
        exercises: kungFuMoves,
        name: "kung-fu-moves",
    },
    {
        description: RenderChinese("套路"),
        displayText: "Faustformen",
        exercises: fistForms,
        name: "fist-forms"
    },
    {
        displayText: "Waffenformen",
        exercises: weaponForms,
        name: "weapon-forms"
    },
    {
        displayText: "Andere Formen",
        exercises: otherForms,
        name: "other-forms"
    },
    {
        displayText: "Tai Chi Formen",
        exercises: [],
        name: "tai-chi-forms"
    }
];