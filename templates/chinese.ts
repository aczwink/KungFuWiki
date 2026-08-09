/**
 * KungFuWiki
 * Copyright (c) 2024-2026 Amir Czwink
 *
 * Licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */
import { Pinyin } from "../src/pinyin";

export function RenderChinese(text: string)
{
    return Pinyin(text) + " (" + text + ")";
}

export function RenderChineseOrdinalNumber(n: number)
{
    function MapNumber()
    {
        switch(n)
        {
            case 13:
                return "十三";
            case 24:
                return "二十四";
            case 38:
                return "三十八";
            default:
                throw new Error("NOT IMPLEMENTED: " + n);
        }
    }

    return n + " -> " + RenderChinese(MapNumber());
}