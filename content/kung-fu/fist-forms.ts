/**
 * KungFuWiki
 * Copyright (c) 2024-2026 Amir Czwink
 *
 * Licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */

import { Exercise } from "../../src/contentDefinitions";
import { chenYunLi, huShifu } from "../masters";

export const fistForms: Exercise[] = [
    {
        taughtBy: chenYunLi,
        text: `
        Translation: "chain fist".

        [Demonstration](https://www.facebook.com/Shaolin.Kungfu.Institut.eV/videos/lian-huan-quan/893760527704697/)
        `,
        title: "连环拳",
        titleLang: "chinese"
    },
    {
        taughtBy: chenYunLi,
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
        taughtBy: chenYunLi,
        text: `
        <strong class="text-danger">TODO first form of the two</strong>
        `,
        title: "集体拳",
        titleLang: "chinese"
    },
    {
        taughtBy: chenYunLi,
        text: `
        <strong class="text-danger">TODO second form of the two</strong>
        `,
        title: "集体拳",
        titleLang: "chinese"
    },
    {
        taughtBy: chenYunLi,
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
        taughtBy: chenYunLi,
        text: `
        <strong class="text-danger">TODO</strong>
        `,
        title: "小洪拳",
        titleLang: "chinese"
    },
    {
        taughtBy: chenYunLi,
        text: ``,
        title: "大洪拳",
        titleLang: "chinese",
        media: {
            type: "gdrive",
            url: "https://drive.google.com/file/d/1wOATSQJg2QR1Qsa0hTpZdkICTeb_vdUz/preview"
        }
    },
    {
        taughtBy: huShifu,
        text: `
        <strong class="text-danger">TODO</strong>
        `,
        title: "少林拳",
        titleLang: "chinese"
    },
];