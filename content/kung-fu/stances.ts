/**
 * KungFuWiki
 * Copyright (C) 2024 Amir Czwink (amir130@hotmail.de)
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
        title: "馬步",
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
    {
        media: {
            type: "image-no-src",
            fileName: "siliubu.jpg"
        },
        text: ``,
        title: "四六步",
        titleLang: "chinese"
    }
];