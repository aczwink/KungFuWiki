/**
 * KungFuWiki
 * Copyright (c) 2024-2026 Amir Czwink
 *
 * Licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */

import { Exercise } from "../../../src/contentDefinitions"
import { RenderChinese } from "../../../templates/chinese";

//cǎi jiǎo or dān pāi jiǎo
export const caiJiao: Exercise = {
    media: {
        type: "video-no-src",
        fileName: "dan_pai_jiao.mp4",
    },
    text: `
    Knee gets up, hand on the same side as the leg goes straight to front, leg kicks the hand and then goes down while keeping it straight.
    Hands and legs can also cross.
    
    Both names ${RenderChinese("踩脚")} and ${RenderChinese("单拍脚")} are used.
    `,
    title: RenderChinese("踩脚") + " / " + RenderChinese("单拍脚"),
    titleLang: "german"
};