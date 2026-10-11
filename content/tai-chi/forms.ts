/**
 * KungFuWiki
 * Copyright (c) 2024-2026 Amir Czwink
 *
 * Licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */

import { Exercise } from "../../src/contentDefinitions";
import { RenderChineseOrdinalNumber } from "../../templates/chinese";
import { chenYunLi } from "../masters";

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
];