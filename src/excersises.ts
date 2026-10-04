/**
 * KungFuWiki
 * Copyright (c) 2026 Amir Czwink
 *
 * Licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */
import fs from "fs";
import path from "path";
import { ContentEntryDefinition, Exercise } from "./contentDefinitions";
import { ReadObjectFile } from "@aczwink/acts-util-node";

type ExcersiseCategory = 
    | "kung-fu/spear-technique"
    | "kung-fu/stick-technique"
    | "kung-fu/sword-technique"
;

async function LoadExcersisesDirectory(directoryPath: string): Promise<ContentEntryDefinition[]>
{
    const result = [];

    const children = await fs.promises.readdir(directoryPath, "utf-8");
    for (const child of children)
    {
        const childPath = path.join(directoryPath, child);
        const stats = await fs.promises.stat(childPath);
        if(stats.isDirectory())
        {
            const subResults = await LoadExcersisesDirectory(childPath);
            result.push(...subResults);
        }
        else if(path.extname(childPath) === ".yml")
        {
            const data = await ReadObjectFile<ContentEntryDefinition>(childPath);
            result.push(data);
        }
    }
    return result;
}

function FilterBySelector(selector: ExcersiseCategory, entry: ContentEntryDefinition)
{
    return entry.tags.Contains(selector);
}

function ToPresentationData(entry: ContentEntryDefinition): Exercise
{
    return {
        media: entry.media,
        text: () => entry.description,
        title: entry.title["simplified-chinese"],
        titleLang: "chinese",
    };
}

var cachedExercises: ContentEntryDefinition[] | null = null;
export async function SelectExcersises(selector: ExcersiseCategory): Promise<Exercise[]>
{
    if(cachedExercises === null)
        cachedExercises = await LoadExcersisesDirectory("../content");

    return cachedExercises.Values()
        .Filter(FilterBySelector.bind(undefined, selector))
        .Map(ToPresentationData)
        .ToArray();
}