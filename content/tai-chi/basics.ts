/**
 * KungFuWiki
 * Copyright (c) 2025-2026 Amir Czwink
 *
 * Licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */

import { Exercise } from "../../src/contentDefinitions";

export const taiChiBasics: Exercise[] = [
    //bǎi jiǎo
    {
        media: {
            type: "video-no-src",
            fileName: "bai_jiao.mp4"
        },
        text: `
        Turn foot with pivot being on the heel.
        `,
        title: "摆脚",
        titleLang: "chinese"
    },
    //kòu jiǎo
    {
        media: {
            type: "video-no-src",
            fileName: "kou_jiao.mp4"
        },
        text: `
        Turn foot with pivot being on the toes.
        `,
        title: "扣脚",
        titleLang: "chinese"
    },
];