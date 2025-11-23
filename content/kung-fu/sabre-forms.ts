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

export const sabreForms: Exercise[] = [
    {
        text: `
        <strong class="text-danger">TODO: video</strong>
        `,
        title: "少林刀",
        titleLang: "chinese"
    },
    {
        text: `
        `,
        title: "少林梅花单刀",
        titleLang: "chinese",
        media: {
            type: "youtube",
            videoId: "DWDOQBfEc1U?si=ysZTybP15RaTN-Ko&t=625"
        }
    },
];