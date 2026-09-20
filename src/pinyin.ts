/**
 * KungFuWiki
 * Copyright (c) 2024-2026 Amir Czwink
 *
 * Licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */
import { pinyin } from "pinyin";

export function Pinyin(chinese: string)
{
    const result = pinyin(chinese, {
        style: "tone",
        heteronym: false,
    }).map(([syllable]) => syllable).join(" ");
    return result;
}