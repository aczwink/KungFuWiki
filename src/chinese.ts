/**
 * KungFuWiki
 * Copyright (c) 2024-2026 Amir Czwink
 *
 * Licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */
import { Converter } from "opencc-js";

export enum ChineseScriptType
{
    SharedOnly,
    Simplified,
    Traditional,
}

export function DetectChineseScriptType(text: string): ChineseScriptType
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
            return ChineseScriptType.SharedOnly;
        return ChineseScriptType.Simplified;
    }
    else if(isTraditional)
        return ChineseScriptType.Traditional;

    throw new Error("Mixed simplified and traditional chars detected in one string: " + text);
}