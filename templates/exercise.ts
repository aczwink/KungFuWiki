/**
 * KungFuWiki
 * Copyright (c) 2024-2026 Amir Czwink
 *
 * Licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */
import { GlobalInjector } from "@aczwink/acts-util-node";
import { Exercise } from "../src/contentDefinitions";
import { RenderMarkdown } from "../src/markdown";
import { RenderOptionalMedia } from "./media";
import { ReferencesManager } from "../src/ReferencesManager";

function RenderTitle(title: string, language: "chinese" | "german")
{
    if(language === "german")
        return title;
    return title;
}

export function RenderExercise(exercise: Exercise)
{
    const refMgr = GlobalInjector().Resolve(ReferencesManager);

    const text = (typeof exercise.text === "string") ? exercise.text : exercise.text();
    const taught = (exercise.teacherId !== undefined) ? RenderMarkdown("Taught by: " + refMgr.ResolveReference(exercise.teacherId)) : "";

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