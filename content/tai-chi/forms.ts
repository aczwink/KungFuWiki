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

export const taiChiForms: Exercise[] = [
    {
        media: {
            type: "gdrive",
            url: "https://drive.google.com/file/d/1v6ydXn54CT-wQho6iqrHVjb4FB6WIGp-/preview"
        },
        text: ``,
        title: "24",
        titleLang: "german"
    },
    {
        text: `
        Moves:
        <ol>
            <li>${RenderChinese("起势")}</li>
            <li>${RenderChinese("金刚倒锥")}</li>
            <li>${RenderChinese("白鹤亮翅")}</li>
            <li>${RenderChinese("上三步")}</li>
            <li>${RenderChinese("斜行")}</li>
        </ol>
        <strong class="text-danger">TODO</strong>
        `,
        title: "38",
        titleLang: "german"
    },
];