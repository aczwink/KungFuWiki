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

import { Exercise } from "../../src/contentDefinitions";

export const stickTechnique: Exercise[] = [
    //wǔhuā gùn
    {
        media: {
            type: "video-no-src",
            fileName: "wuhua_gun.mp4"
        },
        text: `
        Forward stick flower
        `,
        title: "舞花棍",
        titleLang: "chinese"
    },
    //liāo huā gùn
    {
        media: {
            type: "video-no-src",
            fileName: "liaohua_gun.mp4"
        },
        text: `
        Backwards stick flower
        `,
        title: "撩花棍",
        titleLang: "chinese"
    },
    //cì gùn
    {
        text: `
        # *==TODO: pierce with stick==*
        `,
        title: "刺棍",
        titleLang: "chinese"
    },
    //dāo gùn
    {
        text: `
        <strong class="text-danger">TODO: To slide the stick with the rear hand through the front hand. Somehow like billiard</strong>
        `,
        title: "刀棍",
        titleLang: "chinese"
    },
    //diǎn gùn
    {
        text: `
        # *==TODO: stick over wrists left and right on the floor==*
        `,
        title: "点棍",
        titleLang: "chinese"
    },
    //lán ná zhā
    {
        text: `
        Borrowed from spear technique and executed likewise.
        `,
        title: "拦拿扎",
        titleLang: "chinese"
    },
    //sǎo gùn
    {
        media: {
            type: "video-no-src",
            fileName: "sao_gun.mp4"
        },
        text: `
        Sweep with stick on the floor
        `,
        title: "扫棍",
        titleLang: "chinese"
    },
    //shuāi gùn
    {
        text: `
        # *==TODO: hit stick on the floor==*
        `,
        title: "摔棍",
        titleLang: "chinese"
    },
    //tiāo gùn
    {
        media: {
            type: "video-no-src",
            fileName: "tiao_gun.mp4"
        },
        text: `
        Stick from bottom to top.
        `,
        title: "挑棍",
        titleLang: "chinese"
    },
    //yā gùn
    {
        text: `
        # *==TODO: stick from top to bottom==*
        `,
        title: "压棍",
        titleLang: "chinese"
    },
];