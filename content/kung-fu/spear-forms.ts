/**
 * KungFuWiki
 * Copyright (c) 2024-2026 Amir Czwink
 *
 * Licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */

import { Exercise } from "../../src/contentDefinitions";
import { RenderChineseOrdinalNumber } from "../../templates/chinese";
import { chenYunLi, huShifu } from "../masters";

export const spearForms: Exercise[] = [
    {
        taughtBy: chenYunLi,
        text: `Speerform`,
        title: "少林枪",
        titleLang: "chinese",
        media: {
            type: "gdrive",
            url: "https://drive.google.com/file/d/1VQOBFIVwz6qWCkojRPOakqJr0_yR_LSp/preview"
        }
    },
    //shísān qiāng
    {
        taughtBy: huShifu,
        text: `
        # *==TODO: add video or so==*
        `,
        title: RenderChineseOrdinalNumber(13),
        titleLang: "german",
    }
];