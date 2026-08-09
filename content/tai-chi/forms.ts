/**
 * KungFuWiki
 * Copyright (c) 2024-2026 Amir Czwink
 *
 * Licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */

import { Exercise } from "../../src/contentDefinitions";
import { ReferenceExercise } from "../../src/references";
import { RenderChineseOrdinalNumber } from "../../templates/chinese";
import { chenYunLi, yaoShifu } from "../masters";
import { baiheLiangChi, jingangDaoZhui, qiShi, shangSanBu, xieXing } from "./moves";

export const taiChiForms: Exercise[] = [
    {
        media: {
            type: "gdrive",
            url: "https://drive.google.com/file/d/1v6ydXn54CT-wQho6iqrHVjb4FB6WIGp-/preview"
        },
        taughtBy: chenYunLi,
        text: ``,
        title: RenderChineseOrdinalNumber(24),
        titleLang: "german"
    },
    {
        taughtBy: yaoShifu,
        text: () => `
        Moves:
        * ${ReferenceExercise(qiShi)}
        * ${ReferenceExercise(jingangDaoZhui)}
        * ${ReferenceExercise(baiheLiangChi)}
        * ${ReferenceExercise(shangSanBu)}
        * ${ReferenceExercise(xieXing)}

        <strong class="text-danger">TODO rest</strong>
        `,
        title: RenderChineseOrdinalNumber(38),
        titleLang: "german"
    },
];