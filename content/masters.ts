/**
 * KungFuWiki
 * Copyright (c) 2026 Amir Czwink
 *
 * Licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */

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
];