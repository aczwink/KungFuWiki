/**
 * KungFuWiki
 * Copyright (c) 2025-2026 Amir Czwink
 *
 * Licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */

import { Exercise } from "../../src/contentDefinitions";
import { ReferenceExercise } from "../../src/references";
import { lanNaZha } from "./spear-technique/lan-na-zha";

export const stickTechnique: Exercise[] = [
    //wǔhuā gùn
    {
        media: {
            type: "video-no-src",
            fileName: "wuhua_gun.mp4"
        },
        text: `
        Forward stick flower
        `,
        title: "舞花棍",
        titleLang: "chinese"
    },
    //liāo huā gùn
    {
        media: {
            type: "video-no-src",
            fileName: "liaohua_gun.mp4"
        },
        text: `
        Backwards stick flower
        `,
        title: "撩花棍",
        titleLang: "chinese"
    },
    //cì gùn
    {
        media: {
            type: "video-no-src",
            fileName: "ci_gun.mp4"
        },
        text: `
        Pierce with the stick
        `,
        title: "刺棍",
        titleLang: "chinese"
    },
    //dāo gùn
    {
        media: {
            type: "video-no-src",
            fileName: "dao_gun.mp4"
        },
        text: `
        The front hand forms a hole through which the stick slides. The rear hand pushes the stick.
        It is somehow comparable to when playing pool except that the stick is lead through the hole of the front hand.
        `,
        title: "刀棍",
        titleLang: "chinese"
    },
    //diǎn gùn
    {
        media: {
            type: "video-no-src",
            fileName: "dian_gun.mp4"
        },
        text: `
        Hit stick left and right over the wrists on the floor.
        `,
        title: "点棍",
        titleLang: "chinese"
    },
    //lán ná zhā
    {
        text: () => `
        Borrowed from spear technique and executed likewise.
        See: ${ReferenceExercise(lanNaZha)}
        `,
        title: "拦拿扎",
        titleLang: "chinese"
    },
    //sǎo gùn
    {
        media: {
            type: "video-no-src",
            fileName: "sao_gun.mp4"
        },
        text: `
        Sweep with stick on the floor
        `,
        title: "扫棍",
        titleLang: "chinese"
    },
    //shuāi gùn
    {
        media: {
            type: "video-no-src",
            fileName: "shuai_gun.mp4"
        },
        text: `
        Hit the floor with the whole stick excluding the lower hand holding the stick.
        The other hand is used to press with the palm on the stick.
        `,
        title: "摔棍",
        titleLang: "chinese"
    },
    //tiāo gùn
    {
        media: {
            type: "video-no-src",
            fileName: "tiao_gun.mp4"
        },
        text: `
        Stick from bottom to top.
        `,
        title: "挑棍",
        titleLang: "chinese"
    },
    //yā gùn
    {
        media: {
            type: "video-no-src",
            fileName: "ya_gun.mp4"
        },
        text: `
        Stick from top to bottom
        `,
        title: "压棍",
        titleLang: "chinese"
    },
];