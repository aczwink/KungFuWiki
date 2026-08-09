/**
 * KungFuWiki
 * Copyright (c) 2025-2026 Amir Czwink
 *
 * Licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */

import { Exercise } from "../../src/contentDefinitions";

export const handTechnique: Exercise[] = [
    //bàoquán lǐ
    {
        media: {
            type: "image",
            fileName: "Fig.-2-Baoquan-ceremony.jpeg",
            sourceURL: "https://basia.blog/shaolin-kung-fu-basics/"
        },
        text: `
        Salutation that is used before starting a form for example.
        `,
        title: "抱拳礼",
        titleLang: "chinese"
    },
    //píng quán
    {
        media: {
            type: "image",
            fileName: "quan.png",
            sourceURL: "https://www.instagram.com/p/CBYvCYDptPB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        },
        text: `
        Horizontal fist.
        `,
        title: "平拳",
        titleLang: "chinese"
    },
    //lì quán
    {
        media: {
            type: "image-no-src",
            fileName: "liquan.jpg",
        },
        text: `
        Vertical fist.
        `,
        title: "力拳",
        titleLang: "chinese"
    },
    //zhǎng
    {
        media: {
            type: "image",
            fileName: "zhang.png",
            sourceURL: "https://www.instagram.com/p/CBYvCYDptPB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        },
        text: `
        Palm of hand.
        `,
        title: "掌",
        titleLang: "chinese"
    },
    //gōu shǒu
    {
        media: {
            type: "image",
            fileName: "goushou.png",
            sourceURL: "https://www.instagram.com/p/CBYvCYDptPB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        },
        text: `
        Hook hand.
        `,
        title: "勾手",
        titleLang: "chinese"
    },
];