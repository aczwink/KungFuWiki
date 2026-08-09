/**
 * KungFuWiki
 * Copyright (c) 2025-2026 Amir Czwink
 *
 * Licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */

import { Exercise } from "../src/contentDefinitions";

export const stretching: Exercise[] = [
    {
        media: {
            type: "image-no-src",
            fileName: "zheng_ya_tui.JPEG"
        },
        text: `Straighten one leg and raise toes. Go with straight back down and reach for the foot.`,
        title: "正压腿",
        titleLang: "chinese"
    },
    {
        media: {
            type: "image-no-src",
            fileName: "shang_ba_jin.JPEG"
        },
        text: `Raise arms straight above your hand`,
        title: "上把筋",
        titleLang: "chinese"
    },
    {
        media: {
            type: "gallery",
            composition: "row",
            items: [
                { type: "image-no-src", fileName: "xia_ba_jin.JPEG" },
                { type: "image-no-src", fileName: "xia_ba_jin2.JPEG" },
            ],
        },
        text: `Bend down with straight back to the front and reach for the feet`,
        title: "下把筋",
        titleLang: "chinese"
    },
];