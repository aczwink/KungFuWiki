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
        text: `
        <div class="row">
            <div class="col">
                <p>Tritt nach vorne bis zum Kopf.</p>
            </div>
            <div class="col-auto">
                <a target="_blank" href="https://basia.blog/shaolin-kung-fu-basics/">
                    <img src="images/Fig.-11-Zheng-ti-tui.jpeg" />
                </a>
            </div>
        </div>
        `,
        title: "正踢腿",
        titleLang: "chinese"
    },
    {
        text: `
        <div class="row">
            <div class="col">
                <p>Kreisender Tritt nach innen</p>
            </div>
            <div class="col-auto">
                <a target="_blank" href="https://basia.blog/shaolin-kung-fu-basics/">
                    <img src="images/Fig.-13-Li-he-tui..jpeg" />
                </a>
            </div>
        </div>
        `,
        title: "里合腿",
        titleLang: "chinese"
    },
    {
        text: `
        <div class="row">
            <div class="col">
                <p>Kreisender Tritt nach außen</p>
            </div>
            <div class="col-auto">
                <a target="_blank" href="https://basia.blog/shaolin-kung-fu-basics/">
                    <img src="images/Fig.-12-Wai-bai-tui.jpeg" />
                </a>
            </div>
        </div>
        `,
        title: "外擺腿",
        titleLang: "chinese"
    },
    {
        text: `
        <div class="row">
            <div class="col">
                <p>Gesteckter Tritt nach vorne mit Schlag auf den Fuß. Auch über kreuz.</p>
            </div>
            <div class="col-auto text-center">
                <video controls muted autoplay>
                    <source type="video/mp4" src="/videos/caijiao.mp4" />
                </video>
                <br />
                <a class="small" target="_blank" href="https://shaolinspirit.at/kungfu">Quelle</a>
            </div>
        </div>
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
        text: `
        <div class="row">
            <div class="col">
                <p>Tritt geradeaus.</p>
            </div>
            <div class="col-auto">
                <a target="_blank" href="https://basia.blog/shaolin-kung-fu-basics/">
                    <img src="images/Fig.-15-Tan-tui.jpg" />
                </a>
            </div>
        </div>
        `,
        title: "弹腿",
        titleLang: "chinese"
    },
    {
        text: `
        <div class="row">
            <div class="col">
                <p>Wegdrücktritt mit der Hacke aber mit geradem Rücken.</p>
            </div>
            <div class="col-auto">
                <a target="_blank" href="https://basia.blog/shaolin-kung-fu-basics/">
                    <img src="images/Fig.-16-Deng-tui.jpeg" />
                </a>
            </div>
        </div>
        `,
        title: "蹬腿",
        titleLang: "chinese"
    }
];