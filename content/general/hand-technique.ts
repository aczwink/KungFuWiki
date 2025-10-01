/**
 * KungFuWiki
 * Copyright (C) 2025 Amir Czwink (amir130@hotmail.de)
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