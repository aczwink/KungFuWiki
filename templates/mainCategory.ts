/**
 * KungFuWiki
 * Copyright (c) 2025-2026 Amir Czwink
 *
 * Licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */

import { ExerciseCategory, MainCategory, MediaDefinition } from "../src/contentDefinitions";
import { RenderOptionalMedia } from "./media";

function FindImage(x: ExerciseCategory): MediaDefinition | undefined
{
    for (const exercise of x.exercises)
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

function RenderSubCategoryLink(category: ExerciseCategory)
{    
    const media = category.media ?? FindImage(category);
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

export function RenderMainCategory(category: MainCategory)
{
    return `
        <div class="col">
        ${category.categories.map(RenderSubCategoryLink).join("")}
        </div>
    `;
}