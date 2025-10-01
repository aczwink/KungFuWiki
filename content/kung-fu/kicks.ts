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

export const kicks: Exercise[] = [
    {
        media: {
            type: "image",
            fileName: "Fig.-11-Zheng-ti-tui.jpeg",
            sourceURL: "https://basia.blog/shaolin-kung-fu-basics/"
        },
        text: `
        Straight kick to the front up until the head.
        `,
        title: "正踢腿",
        titleLang: "chinese"
    },
    {
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
    },
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
    //cǎi jiǎo
    {
        media: {
            type: "video",
            fileName: "caijiao.mp4",
            sourceURL: "https://shaolinspirit.at/kungfu"
        },
        text: `
        Knee gets up, hand on the same side as the leg goes straight to front, leg kicks the hand and then goes down while keeping it straight.
        Hands and legs can also cross.
        `,
        title: "踩脚",
        titleLang: "chinese"
    },
    //dān pāi jiǎo
    {
        text: `
        The same as ${RenderChinese("踩脚")}.
        `,
        title: "单拍脚",
        titleLang: "chinese"
    },
    {
        media: {
            type: "youtube",
            url: "https://www.youtube-nocookie.com/embed/-qhz0sl1Zag?si=e9Np7YbTf1v2GHuR&amp;controls=0"
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
    {
        text: `
        <p><strong class="text-danger">TODO</strong></p>
        `,
        title: "Li chue bai",
        titleLang: "german"
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
    //hòu bǎi tuǐ
    {
        media: {
            type: "youtube",
            url: "https://www.youtube-nocookie.com/embed/GyGuSqsN44w?si=g2Y9PNHxcfxc9-2a&amp;controls=0"
        },
        text: ``,
        title: "后摆腿",
        titleLang: "chinese",
    },
    //hòu liāo tuǐ
    {
        text: `
        [Demonstration](https://youtube.com/shorts/pm6NAw_SRss?feature=shared)
        `,
        title: "后撩腿",
        titleLang: "chinese",
    }
];