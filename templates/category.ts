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

import { ExerciseCategory } from "../src/contentDefinitions";
import { RenderMarkdown } from "../src/markdown";
import { RenderExercise } from "./exercise";

export function RenderCategory(category: ExerciseCategory)
{
    const desc = (category.description === undefined) ? "" : `<p>${RenderMarkdown(category.description)}</p>`;
    return `
    <h2 class="mt-5" id="${category.name}">${category.displayText}</h2>
    <hr />
    ${desc}
    ${category.exercises.map(RenderExercise).join(`<div class="mt-5"></div>`)}
    `;
}