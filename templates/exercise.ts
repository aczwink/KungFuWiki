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

import { Exercise } from "../src/contentDefinitions";
import { RenderChinese } from "./chinese";

function RenderMedia(exercise: Exercise)
{
    if(exercise.media === undefined)
        return "";

    switch(exercise.media.type)
    {
        case "image":
            return `
            <a target="_blank" href="${exercise.media.sourceURL}">
                <img src="images/${exercise.media.fileName}" />
            </a>
            `;
        case "image-no-src":
            return `<img src="images/${exercise.media.fileName}" />`;
        case "images":
            const images = exercise.media.fileNames.map(x => `<img src="images/${x}" />`);
            return `
            <a target="_blank" href="${exercise.media.sourceURL}">
                ${images.join("")}
            </a>
            `;
        case "video":
            return `
            <video controls muted autoplay>
                <source type="video/mp4" src="videos/${exercise.media.fileName}" />
            </video>
            <br />
            <a class="small" target="_blank" href="${exercise.media.sourceURL}">Quelle</a>
            `;
        case "youtube":
            return `<iframe width="560" height="315" src="${exercise.media.url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
    }
}

function RenderTitle(title: string, language: "chinese" | "german")
{
    if(language === "german")
        return title;
    return RenderChinese(title);
}

export function RenderExercise(exercise: Exercise)
{
    return `
    <h3>${RenderTitle(exercise.title, exercise.titleLang)}</h3>
    <div class="row">
        <div class="col">
            <p>${exercise.text}</p>
        </div>
        <div class="col-auto text-center">
            ${RenderMedia(exercise)}
        </div>
    </div>
    `;
}