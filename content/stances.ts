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

import { Exercise } from "../src/contentDefinitions";

export const stances: Exercise[] = [
    {
        media: {
            type: "image-no-src",
            fileName: "gongbu.jpg",
        },
        text: `
        `,
        title: "弓步",
        titleLang: "chinese"
    },
    {
        media: {
            type: "image-no-src",
            fileName: "mabu.jpg",
        },
        text: `
        <p>Bedeutet übersetzt Pferdestand.</p>
        <a target="_blank" href="https://en.wikipedia.org/wiki/Horse_stance">Wikipedia</a>
        `,
        title: "馬步",
        titleLang: "chinese"
    },
    {
        media: {
            type: "image-no-src",
            fileName: "pubu.jpg"
        },
        text: `
        `,
        title: "仆步",
        titleLang: "chinese"
    },
    {
        media: {
            type: "image-no-src",
            fileName: "xubu.jpg"
        },
        text: `
        `,
        title: "虚步",
        titleLang: "chinese"
    },
    {
        media: {
            type: "image-no-src",
            fileName: "dingbu.jpg"
        },
        text: `
        <p><strong class="text-danger">TODO: chinesisch und pinyin fehlt</strong></p>
        `,
        title: "Ding bu",
        titleLang: "german"
    },
    {
        text: `
        <p><strong class="text-danger">TODO Bild</strong></p>
        `,
        title: "四六步",
        titleLang: "chinese"
    }
];