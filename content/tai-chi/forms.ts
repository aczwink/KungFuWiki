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
import { ReferenceExercise } from "../../src/references";
import { RenderChineseOrdinalNumber } from "../../templates/chinese";
import { baiheLiangChi, jingangDaoZhui, qiShi, shangSanBu, xieXing } from "./moves";

export const taiChiForms: Exercise[] = [
    {
        media: {
            type: "gdrive",
            url: "https://drive.google.com/file/d/1v6ydXn54CT-wQho6iqrHVjb4FB6WIGp-/preview"
        },
        text: ``,
        title: RenderChineseOrdinalNumber(24),
        titleLang: "german"
    },
    {
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