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

import { RenderTitle } from "../templates/exercise";
import { Exercise, ExerciseCategory } from "./contentDefinitions";

const catMap = new Map<Exercise, ExerciseCategory>();
const exerciseReferenceCounters = new Map<Exercise, number>();

export function AddReference(exercise: Exercise, category: ExerciseCategory)
{
    catMap.set(exercise, category);
}

export function ReferenceExercise(exercise: Exercise)
{
    const cat = catMap.get(exercise)!;

    const counter = exerciseReferenceCounters.get(exercise);
    if(counter === undefined)
        exerciseReferenceCounters.set(exercise, 1);
    else
        exerciseReferenceCounters.set(exercise, counter + 1);

    const url = "./" + cat.name + ".html";
    return "[" + RenderTitle(exercise.title, exercise.titleLang) + "](" + url + ")";
}