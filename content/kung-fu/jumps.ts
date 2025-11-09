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

export const jumps: Exercise[] = [
    {
        media: {
            type: "image",
            fileName: "Fig.-22-Xuan-feng-jiao.jpeg",
            sourceURL: "https://basia.blog/shaolin-kung-fu-basics/"
        },
        text: `
        Literal translation is "whirlwind kick".

        * [Demonstration](https://www.instagram.com/p/B428hbnoJtM/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==)
        * [Demonstration with butterfly and roll](https://www.instagram.com/p/CP0IVJtIxS5/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==)
        * [Demonstration with kick at the end](https://www.instagram.com/p/CCbsyKhI6vT/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==)
        * [Demonstration with various endings](https://www.instagram.com/p/B_0CpHbIk6P/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==)
        * [Wikipedia](https://en.wikipedia.org/wiki/540_kick)
        `,
        title: "旋风脚",
        titleLang: "chinese"
    },
    {
        text: `
        Butterfly kick. Literal translation is "circle".

        * [Demonstration](https://www.instagram.com/p/B428ZbYIa6W/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==)
        * [Demonstration double with rolling jump](https://www.instagram.com/p/CC8HTruo_Zb/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==)
        * [Slow-motion with rolling jump](https://www.instagram.com/p/B6S7mr3owLb/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==)
        * [Demonstration with whirlwind kick at the beginning and rolling jump at the end](https://www.instagram.com/p/CP0IVJtIxS5/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==)
        * [Wikipedia](https://en.wikipedia.org/wiki/Butterfly_kick)
        `,
        title: "旋子",
        titleLang: "chinese"
    },
    //
    {
        text: `
        ${RenderChinese("外摆腿")} but with jump.
        
        * [Demonstration](https://www.instagram.com/p/By3P9wZA487/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==)
        `,
        title: "Outside jump kick",
        titleLang: "german"
    },
    //bèi yāo tuǐ 
    {
        text: `
        # *==TODO: jump, knees up and look backwards==*
        `,
        title: "背腰腿",
        titleLang: "chinese"
    }
];