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

export const kicks: Exercise[] = [
    {
        media: {
            type: "image",
            fileName: "Fig.-11-Zheng-ti-tui.jpeg",
            sourceURL: "https://basia.blog/shaolin-kung-fu-basics/"
        },
        text: `
        <p>Tritt nach vorne bis zum Kopf.</p>
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
        <p>Kreisender Tritt nach innen</p>
        `,
        title: "里合腿",
        titleLang: "chinese"
    },
    {
        media: {
            type: "image",
            fileName: "Fig.-12-Wai-bai-tui.jpeg",
            sourceURL: "https://basia.blog/shaolin-kung-fu-basics/"
        },
        text: `
        <p>Kreisender Tritt nach außen</p>
        `,
        title: "外擺腿",
        titleLang: "chinese"
    },
    {
        media: {
            type: "video",
            fileName: "caijiao.mp4",
            sourceURL: "https://shaolinspirit.at/kungfu"
        },
        text: `
        <p>Gesteckter Tritt nach vorne mit Schlag auf den Fuß. Auch über kreuz.</p>
        `,
        title: "踩脚",
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
        <p>Tritt geradeaus.</p>
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
        <p>Wegdrücktritt mit der Hacke aber mit geradem Rücken.</p>
        `,
        title: "蹬腿",
        titleLang: "chinese"
    }
];