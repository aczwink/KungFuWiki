/**
 * KungFuWiki
 * Copyright (c) 2024-2026 Amir Czwink
 *
 * Licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */

import { MediaDefinition } from "./media";

export interface ContentTitleDefinition
{
    english?: string;
    ["chinese-ordinal"]?: number;
    ["simplified-chinese"]?: string;
    ["traditional-chinese"]?: string;
}

export interface ContentEntryDefinition
{
    description: string;
    media?: MediaDefinition;
    tags: string[];
    ["taught-by"]?: string;
    title: ContentTitleDefinition | ContentTitleDefinition[];
}