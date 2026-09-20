/**
 * KungFuWiki
 * Copyright (c) 2024-2026 Amir Czwink
 *
 * Licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */
import { Converter } from "opencc-js";
import { Pinyin } from "../src/pinyin";

function AssertSimplified(text: string): void
{
    const t2s = Converter({ from: "tw", to: "cn" });

    const simplified = t2s(text);
    if(simplified !== text)
        throw new Error(`Traditional characters detected! Got: "${text}" Expected: ${simplified}`);
}

export function RenderSimplifiedChinese(text: string)
{
    AssertSimplified(text);

    return Pinyin(text) + " (" + text + ")";
}

export function RenderChineseOrdinalNumber(n: number)
{
    function MapNumber()
    {
        switch(n)
        {
            case 3:
                return "三";
            case 4:
                return "四";
            case 6:
                return "六";
            case 7:
                return "七";
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

    return n + " -> " + RenderSimplifiedChinese(MapNumber());
}