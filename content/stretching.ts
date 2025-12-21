/**
 * KungFuWiki
 * Copyright (C) 2025 Amir Czwink (amir130@hotmail.de)
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

import { Exercise } from "../src/contentDefinitions";

export const stretching: Exercise[] = [
    {
        media: {
            type: "image-no-src",
            fileName: "zheng_ya_tui.JPEG"
        },
        text: `Straighten one leg and raise toes. Go with straight back down and reach for the foot.`,
        title: "正压腿",
        titleLang: "chinese"
    },
    {
        media: {
            type: "image-no-src",
            fileName: "shang_ba_jin.JPEG"
        },
        text: `Raise arms straight above your hand`,
        title: "上把筋",
        titleLang: "chinese"
    },
    {
        media: {
            type: "gallery",
            composition: "row",
            items: [
                { type: "image-no-src", fileName: "xia_ba_jin.JPEG" },
                { type: "image-no-src", fileName: "xia_ba_jin2.JPEG" },
            ],
        },
        text: `Bend down with straight back to the front and reach for the feet`,
        title: "下把筋",
        titleLang: "chinese"
    },
];