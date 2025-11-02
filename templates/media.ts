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
import { MediaDefinition } from "../src/contentDefinitions";

export function RenderMedia(media: MediaDefinition)
{
    switch(media.type)
    {
        case "gdrive":
            return `<iframe src="${media.url}" width="640" height="480" allow="autoplay"></iframe>`;
        case "image":
            return `
            <a target="_blank" href="${media.sourceURL}">
                <img src="images/${media.fileName}" />
            </a>
            `;
        case "image-no-src":
            return `<img style="max-width:50%" src="images/${media.fileName}" />`;
        case "images":
            const images = media.fileNames.map(x => `<img src="images/${x}" />`);
            return `
            <a target="_blank" href="${media.sourceURL}">
                ${images.join("")}
            </a>
            `;
        case "video":
            return `
            <video controls muted autoplay style="max-width:50%">
                <source type="video/mp4" src="videos/${media.fileName}" />
            </video>
            <br />
            <a class="small" target="_blank" href="${media.sourceURL}">Quelle</a>
            `;
        case "youtube":
            const url = "https://www.youtube-nocookie.com/embed/" + media.videoId + "&amp;controls=0";
            return `<iframe width="560" height="315" src="${url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
    }
}

export function RenderOptionalMedia(media?: MediaDefinition)
{
    if(media === undefined)
        return "";
    return RenderMedia(media);
}