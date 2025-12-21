/**
 * KungFuWiki
 * Copyright (C) 2024-2025 Amir Czwink (amir130@hotmail.de)
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 * 
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 * */

import { Exercise } from "../../src/contentDefinitions";
import { ReferenceExercise } from "../../src/references";
import { RenderChinese } from "../../templates/chinese";

const liHeTue: Exercise = {
    media: {
        type: "image",
        fileName: "Fig.-13-Li-he-tui..jpeg",
        sourceURL: "https://basia.blog/shaolin-kung-fu-basics/"
    },
    text: `
    Circular inside kick.
    `,
    title: "里合腿",
    titleLang: "chinese"
};

const houBaiTui: Exercise = {
    media: {
        type: "youtube",
        videoId: "GyGuSqsN44w?si=g2Y9PNHxcfxc9-2a"
    },
    text: ``,
    title: "后摆腿",
    titleLang: "chinese",
};

export const kicks: Exercise[] = [
    {
        media: {
            type: "gallery",
            composition: "carousel",
            items: [
                {
                    type: "image",
                    fileName: "Fig.-11-Zheng-ti-tui.jpeg",
                    sourceURL: "https://basia.blog/shaolin-kung-fu-basics/"
                },
                {
                    type: "video-no-src",
                    fileName: "zheng_ti_tui.mp4"
                }
            ],
        },
        text: `
        Straight kick to the front up until the head.
        `,
        title: "正踢腿",
        titleLang: "chinese"
    },
    liHeTue,    
    //wài bǎi tuǐ
    {
        media: {
            type: "image",
            fileName: "Fig.-12-Wai-bai-tui.jpeg",
            sourceURL: "https://basia.blog/shaolin-kung-fu-basics/"
        },
        text: `
        Circular outside kick.
        `,
        title: "外摆腿",
        titleLang: "chinese"
    },
    //cǎi jiǎo or dān pāi jiǎo
    {
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
    },
    //èr qǐ jiǎo
    {
        media: {
            type: "gallery",
            composition: "carousel",
            items: [
                {
                    type: "video-no-src",
                    fileName: "er_qi_jiao.mp4"
                },
                {
                    type: "youtube",
                    videoId: "-qhz0sl1Zag?si=e9Np7YbTf1v2GHuR"
                }
            ]
        },
        text: `
        Jump kick
        `,
        title: "二起脚",
        titleLang: "chinese"
    },
    //gāo pāi jiǎo
    {
        text: `
        * [Demonstration with ${RenderChinese("砸拳")}](https://www.facebook.com/Shaolin.Kungfu.Institut.eV/videos/dan-pai-jiao-za-quan/913693459086584/)
        * [Demonstration with ${RenderChinese("乌龙盘打")}](https://www.facebook.com/Shaolin.Kungfu.Institut.eV/videos/dan-pai-jiao-wu-long-pan-da/905080169943711/)
        `,
        title: "高拍脚",
        titleLang: "chinese"
    },
    //lǐ hé wài bǎi
    {
        media: {
            type: "video-no-src",
            fileName: "li_he_wai_bai.mp4",
        },
        text: () => `
        ${ReferenceExercise(liHeTue)} followed by ${ReferenceExercise(houBaiTui)}.
        `,
        title: "里合外摆",
        titleLang: "chinese"
    },
    {
        media: {
            type: "image",
            fileName: "Fig.-15-Tan-tui.jpg",
            sourceURL: "https://basia.blog/shaolin-kung-fu-basics/"
        },
        text: `
        Knee gets up, leg kicks straight to the front together with punch on the opposite side and then leg goes down while keeping it straight.
        `,
        title: "弹腿",
        titleLang: "chinese"
    },
    {
        media: {
            type: "image",
            fileName: "Fig.-16-Deng-tui.jpeg",
            sourceURL: "https://basia.blog/shaolin-kung-fu-basics/"
        },
        text: `
        Knee gets up, kick straight to the front with the heel.
        `,
        title: "蹬腿",
        titleLang: "chinese"
    },
    houBaiTui,    
    //hòu liāo tuǐ
    {
        media: {
            type: "video-no-src",
            fileName: "hou_liao_tui.mp4",
        },
        text: `
        [Demonstration](https://youtube.com/shorts/pm6NAw_SRss?feature=shared)
        `,
        title: "后撩腿",
        titleLang: "chinese",
    }
];