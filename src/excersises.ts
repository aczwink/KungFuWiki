/**
 * KungFuWiki
 * Copyright (c) 2026 Amir Czwink
 *
 * Licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */
import { GlobalInjector } from "@aczwink/acts-util-node";
import { ContentEntryDefinition, Exercise } from "./contentDefinitions";
import { ContentEntryDefinitionsCatalog } from "./ContentEntryDefinitionsCatalog";
import { Pinyin } from "./pinyin";
import { RenderChineseOrdinalNumber, RenderSimplifiedChinese } from "../templates/chinese";

type ExcersiseCategory = 
    | "kung-fu/arms-technique"
    | "kung-fu/fist-forms"
    | "kung-fu/sabre-forms"
    | "kung-fu/spear-forms"
    | "kung-fu/spear-technique"
    | "kung-fu/stick-forms"
    | "kung-fu/stick-technique"
    | "kung-fu/sword-forms"
    | "kung-fu/sword-technique"
    | "misc/chinese"
    | "misc/masters"
    | "qi-gong/forms"
    | "sanda/kicks"
    | "tai-chi/fist-forms"
;

function FilterBySelector(selector: ExcersiseCategory, entry: ContentEntryDefinition)
{
    return entry.tags.Contains(selector);
}

function ToPresentationData(entry: ContentEntryDefinition): Exercise
{
    const catalog = GlobalInjector().Resolve(ContentEntryDefinitionsCatalog);
    const teacher = (entry["taught-by"] === undefined) ? undefined : ToPresentationData(catalog.GetEntry(entry["taught-by"]));

    let title;
    if(entry.title["chinese-ordinal"] !== undefined)
        title = RenderChineseOrdinalNumber(entry.title["chinese-ordinal"]);
    else if(entry.title.english !== undefined)
        title = entry.title.english;
    else if(entry.title["simplified-chinese"] !== undefined)
        title = RenderSimplifiedChinese(entry.title["simplified-chinese"]);
    else
        throw new Error("Can't be!");

    return {
        media: entry.media,
        taughtBy: teacher,
        text: () => entry.description,
        title,
        titleLang: "german",
    };
}

function ToPresentationOrder(exercise: Exercise)
{
    return Pinyin(exercise.title);
}

export async function SelectExcersises(selector: ExcersiseCategory): Promise<Exercise[]>
{
    const allDefinitions = await GlobalInjector().Resolve(ContentEntryDefinitionsCatalog).GetAllDefinitions();
    return allDefinitions.Filter(FilterBySelector.bind(undefined, selector))
        .Map(ToPresentationData)
        .OrderBy(ToPresentationOrder)
        .ToArray();
}