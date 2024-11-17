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
    <p>${exercise.text}</p>
    `;
}