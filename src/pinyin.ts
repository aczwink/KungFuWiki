/**
 * KungFuWiki
 * Copyright (c) 2024-2026 Amir Czwink
 *
 * Licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */
import { pinyin } from "pinyin";

const dict = {
    "斜行": "xié xíng",
};

function PinyinizeWord(word: string)
{
    const value = (dict as any)[word];
    if(value !== undefined)
        return value;

    const result = pinyin(word, {
        style: "tone",
        heteronym: false,
        segment: true
    }).map(([syllable]) => syllable).join(" ");

    return result;
}

function SegmentWords(chinese: string)
{   
    let nextWord = "";
    const words = [];

    for(let i = 0; i < chinese.length; i++)
    {
        const rest = chinese.substring(i, i+2);

        let found = false;
        for (const key in dict)
        {
            if(rest === key)
            {
                if(nextWord.length > 0)
                    words.push(nextWord);
                words.push(key);

                nextWord = "";
                i++;
                found = true;
                break;
            }   
        }
        if(!found)
            nextWord += chinese.charAt(i);
    }

    if(nextWord.length > 0)
        words.push(nextWord);

    return words;
}

export function Pinyin(chinese: string)
{
    const words = SegmentWords(chinese);
    return words.map(PinyinizeWord).join(" ");
}