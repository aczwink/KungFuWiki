/**
 * KungFuWiki
 * Copyright (c) 2024-2026 Amir Czwink
 *
 * Licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */

import { Exercise } from "../../src/contentDefinitions";
import { chenYunLi, shiYanYo } from "../masters";

export const sabreForms: Exercise[] = [
    {
        taughtBy: chenYunLi,
        text: `
        <strong class="text-danger">TODO: video</strong>
        `,
        title: "少林刀",
        titleLang: "chinese"
    },
    {
        taughtBy: shiYanYo,
        text: ``,
        title: "少林梅花单刀",
        titleLang: "chinese",
        media: {
            type: "youtube",
            videoId: "DWDOQBfEc1U?si=ysZTybP15RaTN-Ko&t=625"
        }
    },
];