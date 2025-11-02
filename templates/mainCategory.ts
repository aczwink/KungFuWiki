/**
 * KungFuWiki
 * Copyright (C) 2025 Amir Czwink (amir130@hotmail.de)
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