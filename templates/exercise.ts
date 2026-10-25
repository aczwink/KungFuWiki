/**
 * KungFuWiki
 * Copyright (c) 2024-2026 Amir Czwink
 *
 * Licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */
import { RenderMarkdown } from "../src/markdown";
import { RenderOptionalMedia } from "./media";
import { ContentPresentationData, SubTitleType } from "../src/presentation";

function RenderSubTitle(type: SubTitleType, subTitle: string)
{
    switch(type)
    {
        case SubTitleType.ChineseOrdinal:
            return `Chinese ordinal number: <span lang="zh-Hans">${subTitle}</span>`;
        case SubTitleType.SimplifiedChinese:
            return `Simplified Chinese: <span lang="zh-Hans">${subTitle}</span>`;
        case SubTitleType.TraditionalChinese:
            return `Traditional Chinese: <span lang="zh-Hant">${subTitle}</span>`;
    }
}

export function RenderExercise(exercise: ContentPresentationData)
{
    const subTitles = exercise.subTitles.map(x => RenderSubTitle(x.type, x.subTitle));
    const taught = (exercise.teacherLink !== undefined) ? RenderMarkdown("Taught by: " + exercise.teacherLink) : "";

    return `
    <section id="${exercise.xrefId}" style="scroll-margin-top: 3rem">
        <h3>${exercise.title}</h3>
        <div class="text-muted">${subTitles.join("<br />\n")}</div>
        <div class="row">
            <div class="col">
                <p>${RenderMarkdown(exercise.text)}</p>
                ${taught}
            </div>
            <div class="col-auto text-end">
                ${RenderOptionalMedia(exercise.media)}
            </div>
        </div>
    </section>
    `;
}