/**
 * KungFuWiki
 * Copyright (C) 2024-2026 Amir Czwink (amir130@hotmail.de)
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