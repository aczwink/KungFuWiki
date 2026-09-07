/**
 * KungFuWiki
 * Copyright (c) 2024-2026 Amir Czwink
 *
 * Licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */

import { Exercise } from "../../src/contentDefinitions";
import { ReferenceExercise } from "../../src/references";
import { RenderChinese } from "../../templates/chinese";
import { caiJiao } from "./kicks/cai-jiao";
import { chongchuang } from "./punches/chongchuang";

//tī xī
const tixi: Exercise = {
    text: `
    Knee up
    `,
    title: "踢膝",
    titleLang: "chinese"
};

export const kungFuExercises: Exercise[] = [
    //chuān zhǎng
    {
        media: {
            type: "image",
            fileName: "Fig.-21-Pu-bu-chuan-zhang.jpg",
            sourceURL: "https://basia.blog/shaolin-kung-fu-basics/"
        },
        text: `
        In the picture with ${RenderChinese("仆步")}.
        `,
        title: "穿掌",
        titleLang: "chinese"
    },
    //dà kuà bù
    {
        media: {
            type: "video-no-src",
            fileName: "da_kua_bu.mp4"
        },
        text: `
        Running ${RenderChinese("弓步")} with big steps and straight arms.
        `,
        title: "大跨步",
        titleLang: "chinese"
    },
    //mǎ bù dān biān
    {
        media: {
            type: "gallery",
            composition: "carousel",
            items: [
                {
                    type: "video-no-src",
                    fileName: "mabu_danbien_front.mp4"
                },
                {
                    type: "video-no-src",
                    fileName: "mabu_danbien_side.mp4"
                }
            ]
        },
        text: ``,
        title: "馬步单边",
        titleLang: "chinese"
    },
    //fān yāo
    {
        media: {
            type: "image",
            fileName: "Fig.22-fanyao_waist-wheeling-ex.jpeg",
            sourceURL: "https://basia.blog/shaolin-kung-fu-basics/"
        },
        text: () => `
        [Demonstration with ${ReferenceExercise(caiJiao)}](https://www.facebook.com/Shaolin.Kungfu.Institut.eV/videos/dan-pai-jiao-fan-yao/1151733105210177/)
        `,
        title: "翻腰",
        titleLang: "chinese"
    },
    //gāo tái tuǐ
    {
        media: {
            type: "video-no-src",
            fileName: "gao_tai_tui.mp4"
        },
        text: `
        Get knees up
        `,
        title: "高抬腿",
        titleLang: "chinese",
    },
    //qián sǎo tuǐ
    {
        media: {
            type: "image",
            fileName: "Fig.-18-Qian-sao-tui.jpeg",
            sourceURL: "https://basia.blog/shaolin-kung-fu-basics/"
        },
        text: `
        counterclockwise leg sweep
        `,
        title: "前扫腿",
        titleLang: "chinese"
    },
    //hòu sǎo tuǐ
    {
        media: {
            type: "image",
            fileName: "Fig.-19-Hou-sao-tui.jpeg",
            sourceURL: "https://basia.blog/shaolin-kung-fu-basics/"
        },
        text: `
        clockwise leg sweep
        `,
        title: "后扫腿",
        titleLang: "chinese"
    },
    //jī bù
    {
        media: {
            type: "video-no-src",
            fileName: "jibu.mp4"
        },
        text: `
        Jump sideways with arms opening and closing and in the middle of the jump the feet should touch each other.
        `,
        title: "击步",
        titleLang: "chinese"
    },
    //jiāochā bù
    {
        media: {
            type: "video-no-src",
            fileName: "jiaocha_bu.mp4"
        },
        text: `
        Walking sideways while swapping front and back leg.
        `,
        title: "交叉步",
        titleLang: "chinese"
    },
    tixi,
    //tī xī chōngchuáng
    {
        media: {
            type: "video-no-src",
            fileName: "tixi-chongchuang.mp4"
        },
        text: () => `
        Combination of ${ReferenceExercise(tixi)} and ${ReferenceExercise(chongchuang)}.
        `,
        title: "踢膝冲床",
        titleLang: "chinese"
    },
    //cè shuāi
    {
        text: `
        Fall down to the side.

        [Demonstration with some other techniques](https://www.instagram.com/p/CEwMK90IDM7/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==)
        `,
        title: "侧摔",
        titleLang: "chinese"
    },
    //lǐyú dǎtǐng
    {
        text: `
        Kip-up.

        [Wikipedia](https://en.wikipedia.org/wiki/Kip-up)
        `,
        title: "鲤鱼打挺",
        titleLang: "chinese"
    },
    //wū lóng jiǎo zhù
    {
        text: `
        # *==TODO: Tornado whirlwind stand up.==*

        [Demonstration with some other techniques](https://www.instagram.com/p/CEwMK90IDM7/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==)
        `,
        title: "乌龙搅柱",
        titleLang: "chinese"
    },
    //wū lóng pán dǎ
    {
        media: {
            type: "gallery",
            composition: "carousel",
            items: [
                {
                    type: "video-no-src",
                    fileName: "wulongpanda-front.mp4"
                },
                {
                    type: "video-no-src",
                    fileName: "wulongpanda-side.mp4"
                }
            ]
        },
        text: ``,
        title: "乌龙盘打",
        titleLang: "chinese"
    },
    //gōng bù xié xíng
    {
        media: {
            type: "gallery",
            composition: "carousel",
            items: [
                {
                    type: "video-no-src",
                    fileName: "gongbu_xiexing_front.mp4"
                },
                {
                    type: "video-no-src",
                    fileName: "gongbu_xiexing_side.mp4"
                }
            ]
        },
        text: `
        One arm goes directly front and the other one 90 degrees to one of the two sides.
        In the video, this might be a bit off due to the position of the camera lens.
        `,
        title: "弓步斜行",
        titleLang: "chinese"
    },
];