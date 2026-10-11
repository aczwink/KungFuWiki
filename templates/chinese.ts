/**
 * KungFuWiki
 * Copyright (c) 2024-2026 Amir Czwink
 *
 * Licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */
import { Converter } from "opencc-js";
import { Pinyin } from "../src/pinyin";

enum ScriptType
{
    SharedOnly,
    Simplified,
    Traditional,
}

function DetectScriptType(text: string): ScriptType
{
    const t2s = Converter({ from: "tw", to: "cn" });
    const s2t = Converter({ from: "cn", to: "tw" });

    const simplified = t2s(text);
    const traditional = s2t(text);
    const isSimplified = text === simplified;
    const isTraditional = text === traditional;

    if(isSimplified)
    {
        if(isTraditional)
            return ScriptType.SharedOnly;
        return ScriptType.Simplified;
    }
    else if(isTraditional)
        return ScriptType.Traditional;

    throw new Error("Mixed simplified and traditional chars detected in one string: " + text);
}

export function RenderSimplifiedChinese(text: string)
{
    const scriptType = DetectScriptType(text);
    const isSimplified = (scriptType === ScriptType.SharedOnly) || (scriptType === ScriptType.Simplified);
    if(!isSimplified)
        throw new Error(`Traditional characters detected in simplified string: "${text}"`);

    return Pinyin(text) + " (" + text + ")";
}

export function RenderTraditionalChinese(text: string)
{
    const scriptType = DetectScriptType(text);
    if(scriptType !== ScriptType.Traditional)
        throw new Error(`Simplified characters detected in traditional string: "${text}"`);

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