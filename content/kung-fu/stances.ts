/**
 * KungFuWiki
 * Copyright (c) 2024-2026 Amir Czwink
 *
 * Licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */

import { Exercise } from "../../src/contentDefinitions";
import { RenderChineseOrdinalNumber } from "../../templates/chinese";

export const stances: Exercise[] = [
    {
        media: {
            type: "image",
            fileName: "gongbu.jpg",
            sourceURL: "https://www.instagram.com/p/CBVK6c6pOjY/?utm_source=ig_web_copy_link"
        },
        text: `
        Front facing stance.
        Translates to bow stance, named for its resemblance to a drawn bow.
        `,
        title: "弓步",
        titleLang: "chinese"
    },
    {
        media: {
            type: "image",
            fileName: "mabu.jpg",
            sourceURL: "https://www.instagram.com/p/CBVK6c6pOjY/?utm_source=ig_web_copy_link"
        },
        text: `
        Horse stance.
        It is called liked that, because one stands as if sitting on a horse.

        [Wikipedia](https://en.wikipedia.org/wiki/Horse_stance)
        `,
        title: "马步", //TODO traditional: 馬步
        titleLang: "chinese"
    },
    {
        media: {
            type: "image",
            fileName: "pubu.jpg",
            sourceURL: "https://www.instagram.com/p/CBVK6c6pOjY/?utm_source=ig_web_copy_link"
        },
        text: `
        Both feet need to be completely on the floor and the balance should be in the middle, not on the bent leg.
        `,
        title: "仆步",
        titleLang: "chinese"
    },
    {
        media: {
            type: "image",
            fileName: "xubu.jpg",
            sourceURL: "https://www.instagram.com/p/CBVK6c6pOjY/?utm_source=ig_web_copy_link"
        },
        text: `
        Nearly no energy on the front leg.
        `,
        title: "虚步",
        titleLang: "chinese"
    },
    {
        media: {
            type: "image",
            fileName: "xiebu.jpg",
            sourceURL: "https://www.instagram.com/p/CBVK6c6pOjY/?utm_source=ig_web_copy_link"
        },
        text: `
        Resting stance.
        `,
        title: "歇步",
        titleLang: "chinese"
    },
    {
        media: {
            type: "image",
            fileName: "dingbu.jpg",
            sourceURL: "https://www.instagram.com/p/CBVK6c6pOjY/?utm_source=ig_web_copy_link"
        },
        text: `
        Heel of front foot up.
        `,
        title: "丁步",
        titleLang: "chinese"
    },
    {
        text: `
        Feet together.
        `,
        title: "并步",
        titleLang: "chinese"
    },
    //sìliù bù
    {
        media: {
            type: "image-no-src",
            fileName: "siliubu.jpg"
        },
        text: `
        Called 4-6-stance [${RenderChineseOrdinalNumber(4)} and ${RenderChineseOrdinalNumber(6)}], because of its weight distribution.
        40% of weight is on the front leg and 60% on the back leg.
        `,
        title: "四六步",
        titleLang: "chinese"
    },
    //sānqī bù
    {
        text: `
        Called 3-7-stance [${RenderChineseOrdinalNumber(3)} and ${RenderChineseOrdinalNumber(7)}], because of its weight distribution.
        30% of weight is on the front leg and 70% on the back leg.
        TODO: video
        `,
        title: "三七步",
        titleLang: "chinese"
    },
];