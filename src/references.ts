/**
 * KungFuWiki
 * Copyright (c) 2025-2026 Amir Czwink
 *
 * Licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */

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