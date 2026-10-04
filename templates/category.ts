/**
 * KungFuWiki
 * Copyright (c) 2024-2026 Amir Czwink
 *
 * Licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */

import { ExerciseCategory } from "../src/contentDefinitions";
import { RenderMarkdown } from "../src/markdown";
import { RenderExercise } from "./exercise";

export async function RenderCategory(category: ExerciseCategory)
{
    const exercises = await category.exercises;
    
    const desc = (category.description === undefined) ? "" : `<p>${RenderMarkdown(category.description)}</p>`;
    return `
    <h2 class="mt-5" id="${category.name}">${category.displayText}</h2>
    <hr />
    ${desc}
    ${exercises.map(RenderExercise).join(`<div class="mt-5"></div>`)}
    `;
}