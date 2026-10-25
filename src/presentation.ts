/**
 * KungFuWiki
 * Copyright (c) 2024-2026 Amir Czwink
 *
 * Licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */

import { MediaDefinition } from "./media";

export enum SubTitleType
{
    ChineseOrdinal,
    SimplifiedChinese,
    TraditionalChinese
}

interface SubTitlePresentationEntry
{
    type: SubTitleType;
    subTitle: string;
}

export interface ContentPresentationData
{
    media?: MediaDefinition;
    subTitles: SubTitlePresentationEntry[];
    teacherLink?: string;
    title: string;
    text: string;
    xrefId: string;
}

export interface ContentCategoryPresentationData
{
    description?: string;
    displayText: string;
    exercises: ContentPresentationData[] | Promise<ContentPresentationData[]>;
    media?: MediaDefinition;
    name: string;
}

export interface MainCategory
{
    displayText: string;
    categories: ContentCategoryPresentationData[];
    name: string;
}