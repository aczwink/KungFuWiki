/**
 * KungFuWiki
 * Copyright (c) 2024-2026 Amir Czwink
 *
 * Licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */

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