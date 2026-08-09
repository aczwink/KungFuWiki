/**
 * KungFuWiki
 * Copyright (c) 2024-2026 Amir Czwink
 *
 * Licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */

import { Exercise } from "../src/contentDefinitions";
import { RenderChinese } from "../templates/chinese";

export const chineseLang: Exercise[] = [
    //bàofālì
    {
        text: `
        Do a move explosively and fast
        `,
        title: "爆发力",
        titleLang: "chinese"
    },
    //dāo
    {
        media: {
            type: "image-no-src",
            fileName: "dao.jpg"
        },
        text: `
        Sabre
        `,
        title: "刀",
        titleLang: "chinese"
    },
    //gùn
    {
        text: `
        Stick
        `,
        title: "棍",
        titleLang: "chinese"
    },
    //hòu
    {
        text: `
        back-...
        `,
        title: "后",
        titleLang: "chinese"
    },
    //huàn
    {
        text: `
        Change.

        In Kung Fu often used in imperative to change from one leg to another for example.
        `,
        title: "换",
        titleLang: "chinese"
    },
    //jiāyóu
    {
        text: `
        Encouragement/cheering phrase.

        Literally: “add oil” or “put in more fuel.”

        Figuratively: “keep it up!” / “let’s go!” / “you can do it!” / “come on!”
        `,
        title: "加油",
        titleLang: "chinese"
    },
    //jiàn
    {
        media: {
            type: "image-no-src",
            fileName: "jian.jpg"
        },
        text: `
        Sword
        `,
        title: "剑",
        titleLang: "chinese"
    },
    //qí bù
    {
        text: `
        Used for having a group march together in step.
        `,
        title: "齐步",
        titleLang: "chinese"
    },
    //qián
    {
        text: `
        front-...
        `,
        title: "前",
        titleLang: "chinese"
    },
    //qiāng
    {
        text: `
        Spear
        `,
        title: "枪",
        titleLang: "chinese"
    },
    //quán
    {
        text: `
        Fist
        `,
        title: "拳",
        titleLang: "chinese"
    },
    //shànzǐ
    {
        media: {
            type: "image-no-src",
            fileName: "fan.jpg"
        },
        text: `
        The Tai Ji fan
        `,
        title: "扇子",
        titleLang: "chinese"
    },
    //shàolínsì
    {
        text: `
        The Shaolin Monastery
        `,
        title: "少林寺",
        titleLang: "chinese"
    },
    //shīlǐ
    {
        text: `
        To salute
        `,
        title: "施礼",
        titleLang: "chinese"
    },
    //tàolù
    {
        text: `
        A form
        `,
        title: "套路",
        titleLang: "chinese"
    },
    //tī
    {
        text: `
        Kick
        `,
        title: "踢",
        titleLang: "chinese"
    },
    //tuǐ
    {
        text: `
        Leg
        `,
        title: "腿",
        titleLang: "chinese"
    },
    //xī
    {
        text: `
        Knee
        `,
        title: "膝",
        titleLang: "chinese"
    },
    //yùbèi
    {
        text: `
        be ready! get ready! ready!

        In Kung Fu, often used as a command together with ${RenderChinese("走")} i.e. “${RenderChinese("预备")}! ${RenderChinese("走")}” which translates into "Ready! Go!"
        `,
        title: "预备",
        titleLang: "chinese"
    },
    //zǒu
    {
        text: `
        to walk, to go, to move.

        In Kung Fu, often used in imperative i.e. “Go!”
        `,
        title: "走",
        titleLang: "chinese"
    },
];