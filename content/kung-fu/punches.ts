/**
 * KungFuWiki
 * Copyright (c) 2024-2026 Amir Czwink
 *
 * Licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */

import { Exercise } from "../../src/contentDefinitions";

export const punches: Exercise[] = [
    {
        media: {
            type: "images",
            fileNames: ["Fig.-3-Horizontal-punch..jpeg", "Fig.-3-Horizontal-punch2.jpg"],
            sourceURL: "https://basia.blog/shaolin-kung-fu-basics/"
        },
        text: `
        Punch and pull back other hand to waist.
        `,
        title: "冲床",
        titleLang: "chinese"
    },
    {
        media: {
            type: "images",
            fileNames: ["Fig.-4-Push-palm.jpg", "Fig.-4-Push-palm2.jpg"],
            sourceURL: "https://basia.blog/shaolin-kung-fu-basics/"
        },
        text: `
        Push palm of hand.
        `,
        title: "推掌",
        titleLang: "chinese"
    }
];