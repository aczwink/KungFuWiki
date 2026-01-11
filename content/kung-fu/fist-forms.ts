/**
 * KungFuWiki
 * Copyright (C) 2024-2026 Amir Czwink (amir130@hotmail.de)
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

export const fistForms: Exercise[] = [
    {
        text: `
        Translation: "chain fist".

        [Demonstration](https://www.facebook.com/Shaolin.Kungfu.Institut.eV/videos/lian-huan-quan/893760527704697/)
        `,
        title: "连环拳",
        titleLang: "chinese"
    },
    {
        text: `
        Translation: "spreading power from the back fist".

        * [Demonstration](https://www.instagram.com/tv/B-Zh3DjI6kS/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==)
        * [Demonstration](https://www.facebook.com/Shaolin.Kungfu.Institut.eV/videos/tong-bei-quan/860566334458352/)
        * [Wikipedia](https://en.wikipedia.org/wiki/Tongbeiquan)
        `,
        title: "通背拳",
        titleLang: "chinese"
    },
    {
        text: `
        Translation: "7-star fist"

        [Demonstration](https://www.facebook.com/Shaolin.Kungfu.Institut.eV/videos/meister-li-zeigt-uns-hier-die-7-sterne-form-/1526028037427702/)
        `,
        title: "七星拳",
        titleLang: "chinese"
    },
    {
        text: `
        <strong class="text-danger">TODO first form of the two</strong>
        `,
        title: "集体拳",
        titleLang: "chinese"
    },
    {
        text: `
        <strong class="text-danger">TODO second form of the two</strong>
        `,
        title: "集体拳",
        titleLang: "chinese"
    },
    {
        text: `
        <p><strong class="text-danger">TODO: war das Tang Lang Quan?</strong></p>
        `,
        title: "Mantis",
        titleLang: "german",
        media: {
            type: "gdrive",
            url: "https://drive.google.com/file/d/1IXuZyH0Y-QKFWnof0muZQ1h0O3ktPUY5/preview"
        }
    },
    {
        text: `
        <strong class="text-danger">TODO</strong>
        `,
        title: "小洪拳",
        titleLang: "chinese"
    },
    {
        text: ``,
        title: "大洪拳",
        titleLang: "chinese",
        media: {
            type: "gdrive",
            url: "https://drive.google.com/file/d/1wOATSQJg2QR1Qsa0hTpZdkICTeb_vdUz/preview"
        }
    },
    {
        text: `
        <strong class="text-danger">TODO</strong>
        `,
        title: "少林拳",
        titleLang: "chinese"
    },
];