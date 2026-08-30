/**
 * KungFuWiki
 * Copyright (c) 2025-2026 Amir Czwink
 *
 * Licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */

import { Exercise } from "../../src/contentDefinitions";
import { RenderChineseOrdinalNumber } from "../../templates/chinese";

export const taiChiBasics: Exercise[] = [
    //bǎi jiǎo
    {
        text: `
        <strong class="text-danger">TODO</strong>
        `,
        title: "摆脚",
        titleLang: "chinese"
    },
    //kòu jiǎo
    {
        text: `
        <strong class="text-danger">TODO</strong>
        `,
        title: "扣脚",
        titleLang: "chinese"
    },
    //sānqī bù
    {
        text: `
        Called 3-7-stance [${RenderChineseOrdinalNumber(3)} and ${RenderChineseOrdinalNumber(7)}], because 30% of weight is on one leg and 70% on the other.
        TODO: video
        `,
        title: "三七步",
        titleLang: "chinese"
    },
];