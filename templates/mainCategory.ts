/**
 * KungFuWiki
 * Copyright (c) 2025-2026 Amir Czwink
 *
 * Licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */

import { ExerciseCategory, MainCategory, MediaDefinition } from "../src/contentDefinitions";
import { RenderOptionalMedia } from "./media";

async function FindImage(x: ExerciseCategory): Promise<MediaDefinition | undefined>
{
    for (const exercise of await x.exercises)
    {
        if(exercise.media !== undefined)
        {
            switch(exercise.media.type)
            {
                case "image":
                case "image-no-src":
                    return exercise.media;
                case "images":
                    return {
                        type: "image-no-src",
                        fileName: exercise.media.fileNames[0]
                    };
            }
        }        
    }
}

async function RenderSubCategoryLink(category: ExerciseCategory)
{    
    const media = category.media ?? await FindImage(category);
    return `
        <div class="row mb-5">
            <div class="col text-end">
                <h3><a href="${category.name}.html">${category.displayText}</a></h3>
            </div>
            <div class="col">
                ${RenderOptionalMedia(media)}
            </div>
        </div>
    `;
}

export async function RenderMainCategory(category: MainCategory)
{
    const mapped = await category.categories.map(RenderSubCategoryLink).Values().PromiseAll();
    return `
        <div class="col">
        ${mapped.join("")}
        </div>
    `;
}