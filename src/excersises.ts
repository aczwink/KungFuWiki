/**
 * KungFuWiki
 * Copyright (c) 2026 Amir Czwink
 *
 * Licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */
import { GlobalInjector } from "@aczwink/acts-util-node";
import { ContentEntryDefinition, ContentTitleDefinition, Exercise } from "./contentDefinitions";
import { ContentEntryDefinitionsCatalog } from "./ContentEntryDefinitionsCatalog";
import { Pinyin } from "./pinyin";
import { RenderChineseOrdinalNumber } from "../templates/chinese";

export type ExcersiseCategory = 
    | "kung-fu/arms-technique"
    | "kung-fu/exercises"
    | "kung-fu/fist-forms"
    | "kung-fu/hand-technique"
    | "kung-fu/kicks"
    | "kung-fu/punches"
    | "kung-fu/sabre-forms"
    | "kung-fu/spear-forms"
    | "kung-fu/spear-technique"
    | "kung-fu/stances"
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

export function BuildCommonTitle(entry: ContentEntryDefinition)
{
    function SingleTitle(title: ContentTitleDefinition)
    {
        if(
            (title["chinese-ordinal"] !== undefined)
            &&
            (title.english === undefined)
            &&
            (title["simplified-chinese"] === undefined)
            &&
            (title["traditional-chinese"] === undefined)
        )
        {
            const n = RenderChineseOrdinalNumber(title["chinese-ordinal"]);
            return title["chinese-ordinal"] + " (" + Pinyin(n) + ")";
        }

        if(
            (title["chinese-ordinal"] === undefined)
            &&
            (title.english !== undefined)
            &&
            (title["simplified-chinese"] === undefined)
            &&
            (title["traditional-chinese"] === undefined)
        )
        {
            return title.english;
        }

        if(
            (title["chinese-ordinal"] !== undefined)
            &&
            (title.english === undefined)
            &&
            (title["simplified-chinese"] !== undefined)
            &&
            (title["traditional-chinese"] === undefined)
        )
        {
            const n = RenderChineseOrdinalNumber(title["chinese-ordinal"]);
            if(!title["simplified-chinese"].includes(n))
            {
                console.log(title);
                throw new Error("not implemented");
            }
            return Pinyin(title["simplified-chinese"]);
        }

        if(
            (title["chinese-ordinal"] === undefined)
            &&
            (title.english === undefined)
            &&
            (title["simplified-chinese"] !== undefined)
            &&
            (title["traditional-chinese"] === undefined)
        )
        {
            return Pinyin(title["simplified-chinese"]);
        }

        if(
            (title["chinese-ordinal"] === undefined)
            &&
            (title.english === undefined)
            &&
            (title["simplified-chinese"] !== undefined)
            &&
            (title["traditional-chinese"] !== undefined)
        )
        {
            const s = Pinyin(title["simplified-chinese"]);
            const t = Pinyin(title["traditional-chinese"]);
            if(s !== t)
            {
                console.log(title);
                throw new Error("not implemented");
            }
            return s;
        }
        console.log(title);
        throw new Error("not implemented");
    }

    const titles = Array.isArray(entry.title) ? entry.title : [entry.title];
    const title = titles.map(SingleTitle).join(" / ");

    return title;
}

function TitleToString(title: ContentTitleDefinition)
{
    function Chinese2Str(text: string)
    {
        return Pinyin(text) + " (" + text + ")";
    }

    const parts = [];

    //TODO: these should be output for further description next to the title of the excercise

    if(title["chinese-ordinal"] !== undefined)
        parts.push(title["chinese-ordinal"] + " (" + Pinyin(RenderChineseOrdinalNumber(title["chinese-ordinal"])) + ", " + RenderChineseOrdinalNumber(title["chinese-ordinal"]) + ")");
    if(title.english !== undefined)
        parts.push(title.english);
    if(title["simplified-chinese"] !== undefined)
        parts.push(Chinese2Str(title["simplified-chinese"]));
    if(title["traditional-chinese"] !== undefined)
        parts.push(Chinese2Str(title["traditional-chinese"]));

    return parts.join(", ");
}

function ToPresentationData(entry: ContentEntryDefinition): Exercise
{
    const teacher = (entry["taught-by"] === undefined) ? undefined : "/misc/masters/" + entry["taught-by"];


    return {
        media: entry.media,
        teacherId: teacher,
        text: () => entry.description,
        title: BuildCommonTitle(entry),
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