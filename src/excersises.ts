/**
 * KungFuWiki
 * Copyright (c) 2026 Amir Czwink
 *
 * Licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */
import { GlobalInjector } from "@aczwink/acts-util-node";
import { ContentEntryDefinition, ContentTitleDefinition } from "./contentDefinitions";
import { ContentEntryDefinitionsCatalog } from "./ContentEntryDefinitionsCatalog";
import { Pinyin } from "./pinyin";
import { RenderChineseOrdinalNumber } from "../templates/chinese";
import { ReferencesManager } from "./ReferencesManager";
import { ContentPresentationData, SubTitleType } from "./presentation";

export type ExcersiseCategory =
    | "kung-fu/acrobatics"
    | "kung-fu/arms-technique"
    | "kung-fu/drills"
    | "kung-fu/exercises"
    | "kung-fu/fist-forms"
    | "kung-fu/floor-exercises"
    | "kung-fu/hand-technique"
    | "kung-fu/jumpkicks"
    | "kung-fu/jumps"
    | "kung-fu/kicks"
    | "kung-fu/punches"
    | "kung-fu/sabre-forms"
    | "kung-fu/sabre-technique"
    | "kung-fu/spear-forms"
    | "kung-fu/spear-technique"
    | "kung-fu/stances"
    | "kung-fu/stick-forms"
    | "kung-fu/stick-technique"
    | "kung-fu/stretching-exercises"
    | "kung-fu/sword-forms"
    | "kung-fu/sword-technique"
    | "misc/chinese"
    | "misc/masters"
    | "qi-gong/forms"
    | "sanda/kicks"
    | "tai-chi/fist-forms"
    | "tai-chi/foot-technique"
    | "tai-chi/moves"
;

function FilterBySelector(selector: ExcersiseCategory, entry: ContentEntryDefinition)
{
    return entry.tags.Contains(selector);
}

export function FindTitles(entry: ContentEntryDefinition)
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
            return {
                commonTitle: title["chinese-ordinal"] + " (" + Pinyin(n) + ")",
                subTitles: [
                    {
                        type: SubTitleType.ChineseOrdinal,
                        subTitle: n
                    }
                ],
            };
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
            return {
                commonTitle: title.english,
                subTitles: [],
            };
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

            return {
                commonTitle: Pinyin(title["simplified-chinese"]),
                subTitles: [
                    {
                        type: SubTitleType.SimplifiedChinese,
                        subTitle: title["simplified-chinese"]
                    },
                    {
                        type: SubTitleType.ChineseOrdinal,
                        subTitle: title["chinese-ordinal"]  + " (" + Pinyin(n) + ", " + n + ")"
                    }
                ],
            };
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
            return {
                commonTitle: Pinyin(title["simplified-chinese"]),
                subTitles: [
                    {
                        type: SubTitleType.SimplifiedChinese,
                        subTitle: title["simplified-chinese"]
                    }
                ],
            };
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
            return {
                commonTitle: s,
                subTitles: [
                    {
                        type: SubTitleType.SimplifiedChinese,
                        subTitle: title["simplified-chinese"]
                    },
                    {
                        type: SubTitleType.TraditionalChinese,
                        subTitle: title["traditional-chinese"]
                    }
                ],
            };
        }
        console.log(title);
        throw new Error("not implemented");
    }

    const titles = Array.isArray(entry.title) ? entry.title : [entry.title];
    const results = titles.map(SingleTitle);

    return {
        commonTitle: results.map(x => x.commonTitle).join(" / "),
        subTitles: results.Values().Map(x => x.subTitles.Values()).Flatten().ToArray()
    };
}

function ToPresentationData(entryId: string, entry: ContentEntryDefinition): ContentPresentationData
{
    const refMgr = GlobalInjector().Resolve(ReferencesManager);

    const teacherId = (entry["taught-by"] === undefined) ? undefined : "/misc/masters/" + entry["taught-by"];
    const teacherLink = (teacherId === undefined) ? undefined : refMgr.ResolveReference(teacherId);
    const titles = FindTitles(entry);

    return {
        media: entry.media,
        subTitles: titles.subTitles,
        teacherLink,
        text: entry.description,
        title: titles.commonTitle,
        xrefId: refMgr.ComputeCrossReferenceId(entryId),
    };
}

function ToPresentationOrder(exercise: ContentPresentationData)
{
    return exercise.title;
}

export async function SelectExcersises(selector: ExcersiseCategory): Promise<ContentPresentationData[]>
{
    const allDefinitions = await GlobalInjector().Resolve(ContentEntryDefinitionsCatalog).GetAllDefinitions();
    return allDefinitions.Filter(kv => FilterBySelector(selector, kv.value))
        .Map(kv => ToPresentationData(kv.key, kv.value))
        .OrderBy(ToPresentationOrder)
        .ToArray();
}