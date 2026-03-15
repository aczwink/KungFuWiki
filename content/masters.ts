/**
 * KungFuWiki
 * Copyright (C) 2026 Amir Czwink (amir130@hotmail.de)
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

export const chenYunLi: Exercise = {
    media: {
        type: "image",
        fileName: "chenyun_li.jpeg",
        sourceURL: "https://feilongkungfu.com/"
    },
    text: `
    * Until 2023 trainer at Shaolin Kung Fu Institut (Berlin, Germany).
    * Since 2023 trainer at [Fei Long Kung Fu](https://feilongkungfu.com/).
    `,
    title: "Chen Yun Li",
    titleLang: "german"
};

export const huShifu: Exercise = {
    media: {
        type: "image-no-src",
        fileName: "hu_shifu.png",
    },
    text: `
    Trainer at [YunTai Shan International Culture And Martial Arts School](https://shaolin-yuntai.com).
    `,
    title: "胡宾超",
    titleLang: "chinese"
};

export const shiYanYo: Exercise = {
    media: {
        type: "image",
        fileName: "shiyanyao.jpg",
        sourceURL: "https://www.instagram.com/yanyao_shi"
    },
    text: `
    Trainer at [Shaolin Tempel Deutschland](https://www.shaolin-tempel.eu/).
    `,
    title: "Shi Yan Yao",
    titleLang: "german"
};

export const masters: Exercise[] = [
    chenYunLi,
    huShifu,
    shiYanYo,
    {
        media: {
            type: "image",
            fileName: "nadim_sarrouh.jpg",
            sourceURL: "https://syndicate-berlin.de/shaolin-kung-fu/"
        },
        text: `
        * Trainer at [Syndicate Berlin](https://syndicate-berlin.de/).
        * Used to be trainer at [Randori Berlin](https://www.randori-berlin.de/).
        `,
        title: "Nadim Sarrouh",
        titleLang: "german"
    },
];