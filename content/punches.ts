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

export const punches: Exercise[] = [
    {
        text: `
        <div class="row">
            <div class="col">
                <p>Faustschlag</p>
            </div>
            <div class="col-auto">
                <a target="_blank" href="https://basia.blog/shaolin-kung-fu-basics/">
                    <img src="images/Fig.-3-Horizontal-punch..jpeg" />
                    <img src="images/Fig.-3-Horizontal-punch2.jpg" />
                </a>
            </div>
        </div>
        `,
        title: "冲床",
        titleLang: "chinese"
    },
    {
        text: `
        <div class="row">
            <div class="col">
                <p>Schlag mit Handfläche</p>
            </div>
            <div class="col-auto">
                <a target="_blank" href="https://basia.blog/shaolin-kung-fu-basics/">
                    <img src="images/Fig.-4-Push-palm.jpg" />
                    <img src="images/Fig.-4-Push-palm2.jpg" />
                </a>
            </div>
        </div>
        `,
        title: "推掌",
        titleLang: "chinese"
    }
];