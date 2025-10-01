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
import { RenderChinese } from "../../templates/chinese";

export const kungFuMoves: Exercise[] = [
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
        text: `
        Running ${RenderChinese("弓步")} with big steps.
        `,
        title: "大跨步",
        titleLang: "chinese"
    },
    //dān biān
    {
        media: {
            type: "youtube",
            url: "https://www.youtube-nocookie.com/embed/_1UJzVsYj7A?si=iW1JRDa4euZMM8yq&amp;controls=0"
        },
        text: `
        # *==TODO: like xié xíng but arms left and right (careful! video is wrong because arms go front and back but instead should go left and right!!!)==*
        `,
        title: "单边",
        titleLang: "chinese"
    },
    {
        media: {
            type: "image",
            fileName: "Fig.22-fanyao_waist-wheeling-ex.jpeg",
            sourceURL: "https://basia.blog/shaolin-kung-fu-basics/"
        },
        text: `
        <a target="_blank" href="https://www.facebook.com/Shaolin.Kungfu.Institut.eV/videos/dan-pai-jiao-fan-yao/1151733105210177/">Demonstration von Meister Li (mit Dan pai jiao am Anfang)</a>
        `,
        title: "翻腰",
        titleLang: "chinese"
    },
    //gāo tái tuǐ
    {
        text: `
        Get knees up
        `,
        title: "高抬腿",
        titleLang: "chinese",
    },
    {
        media: {
            type: "image",
            fileName: "Fig.-18-Qian-sao-tui.jpeg",
            sourceURL: "https://basia.blog/shaolin-kung-fu-basics/"
        },
        text: `
        <p>Beinfeger gegen den Uhrzeigersinn</p>
        `,
        title: "前扫腿",
        titleLang: "chinese"
    },
    {
        media: {
            type: "image",
            fileName: "Fig.-19-Hou-sao-tui.jpeg",
            sourceURL: "https://basia.blog/shaolin-kung-fu-basics/"
        },
        text: `
        <p>Beinfeger im Uhrzeigersinn</p>
        `,
        title: "后扫腿",
        titleLang: "chinese"
    },
    //jī bù
    {
        text: `
        # *==TODO: sideways walk with arms opening and closing and feet touching together==*
        `,
        title: "击步",
        titleLang: "chinese"
    },
    //jiāochā bù
    {
        text: `
        <p><strong class="text-danger">TODO: walk sideways</strong></p>
        `,
        title: "交叉步",
        titleLang: "chinese"
    },
    //tī xī
    {
        text: `
        Knee up
        `,
        title: "踢膝",
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
        text: `
        # *==TODO: whirlwind with arms==*
        `,
        title: "乌龙盘打",
        titleLang: "chinese"
    },
    //xié xíng
    {
        media: {
            type: "youtube",
            url: "https://www.youtube-nocookie.com/embed/_1UJzVsYj7A?si=iW1JRDa4euZMM8yq&amp;controls=0"
        },
        text: `
        # *==TODO: gong bu and arms left and and straight==*
        `,
        title: "斜行",
        titleLang: "chinese"
    },
];