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
        text: `
        <div class="row">
            <div class="col">
            </div>
            <div class="col-auto">
                <img src="images/gongbu.jpg" />
            </div>
        </div>
        `,
        title: "弓步",
        titleLang: "chinese"
    },
    {
        text: `
        <div class="row">
            <div class="col">
                <p>Bedeutet übersetzt Pferdestand.</p>
            </div>
            <div class="col-auto">
                <img src="images/mabu.jpg" />
            </div>
        </div>
        <a target="_blank" href="https://en.wikipedia.org/wiki/Horse_stance">Wikipedia</a>
        `,
        title: "馬步",
        titleLang: "chinese"
    },
    {
        text: `
        <div class="row">
            <div class="col">
            </div>
            <div class="col-auto">
                <img src="images/pubu.jpg" />
            </div>
        </div>
        `,
        title: "仆步",
        titleLang: "chinese"
    },
    {
        text: `
        <div class="row">
            <div class="col">
            </div>
            <div class="col-auto">
                <img src="images/xubu.jpg" />
            </div>
        </div>
        `,
        title: "虚步",
        titleLang: "chinese"
    },
    {
        text: `
        <div class="row">
            <div class="col">
                <p><strong class="text-danger">TODO: chinesisch und pinyin fehlt</strong></p>
            </div>
            <div class="col-auto">
                <img src="images/dingbu.jpg" />
            </div>
        </div>
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