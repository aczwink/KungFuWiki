/**
 * KungFuWiki
 * Copyright (c) 2024-2026 Amir Czwink
 *
 * Licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */
import { Exercise } from "../src/contentDefinitions";
import { RenderMarkdown } from "../src/markdown";
import { ReferenceExercise } from "../src/references";
import { RenderChinese } from "./chinese";
import { RenderOptionalMedia } from "./media";

export function RenderTitle(title: string, language: "chinese" | "german")
{
    if(language === "german")
        return title;
    return RenderChinese(title);
}

export function RenderExercise(exercise: Exercise)
{
    const text = (typeof exercise.text === "string") ? exercise.text : exercise.text();
    const taught = (exercise.taughtBy !== undefined) ? RenderMarkdown("Taught by: " + ReferenceExercise(exercise.taughtBy)) : "";

    return `
    <h3>${RenderTitle(exercise.title, exercise.titleLang)}</h3>
    <div class="row">
        <div class="col">
            <p>${RenderMarkdown(text)}</p>
            ${taught}
        </div>
        <div class="col-auto text-end">
            ${RenderOptionalMedia(exercise.media)}
        </div>
    </div>
    `;
}