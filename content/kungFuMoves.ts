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

export const kungFuMoves: Exercise[] = [
    {
        text: `
        <p><strong class="text-danger">TODO: irgendwie heißt der Sprungtritt scheinbar auch so? Was ist der Unterschied zu Cai jiao?</strong></p>
        <p>Demonstration von Meister Li:</p>
        <ul>
            <li><a target="_blank" href="https://www.facebook.com/Shaolin.Kungfu.Institut.eV/videos/dan-pai-jiao-za-quan/913693459086584/">mit za quan</a></li>
            <li><a target="_blank" href="https://www.facebook.com/Shaolin.Kungfu.Institut.eV/videos/dan-pai-jiao-wu-long-pan-da/905080169943711/">mit wu long pan da</a></li>
        </ul>
        `,
        title: "单拍脚",
        titleLang: "chinese"
    },
    {
        text: `
        <div class="row">
            <div class="col">
                <a target="_blank" href="https://www.facebook.com/Shaolin.Kungfu.Institut.eV/videos/dan-pai-jiao-fan-yao/1151733105210177/">Demonstration von Meister Li (mit Dan pai jiao am Anfang)</a>
            </div>
            <div class="col-auto">
                <a target="_blank" href="https://basia.blog/shaolin-kung-fu-basics/">
                    <img src="images/Fig.22-fanyao_waist-wheeling-ex.jpeg" />
                </a>
            </div>
        </div>
        `,
        title: "翻腰",
        titleLang: "chinese"
    },
    {
        text: `
        <div class="row">
            <div class="col">
                <p>Beinfeger gegen den Uhrzeigersinn</p>
            </div>
            <div class="col-auto">
                <a target="_blank" href="https://basia.blog/shaolin-kung-fu-basics/">
                    <img src="images/Fig.-18-Qian-sao-tui.jpeg" />
                </a>
            </div>
        </div>
        `,
        title: "前扫腿",
        titleLang: "chinese"
    },
    {
        text: `
        <div class="row">
            <div class="col">
                <p>Beinfeger im Uhrzeigersinn</p>
            </div>
            <div class="col-auto">
                <a target="_blank" href="https://basia.blog/shaolin-kung-fu-basics/">
                    <img src="images/Fig.-19-Hou-sao-tui.jpeg" />
                </a>
            </div>
        </div>
        `,
        title: "后扫腿",
        titleLang: "chinese"
    },
    {
        text: `
        <a target="_blank" href="https://www.instagram.com/p/CEwMK90IDM7/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==">Demonstration</a>
        <p><strong class="text-danger">TODO</strong></p>
        `,
        title: "Zi shue, Li yu da din, Ulum jiao du",
        titleLang: "german"
    }
];