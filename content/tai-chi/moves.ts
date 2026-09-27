/**
 * KungFuWiki
 * Copyright (c) 2025-2026 Amir Czwink
 *
 * Licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */

import { Exercise } from "../../src/contentDefinitions";

export const qiShi: Exercise = {
    //qǐ shì
    media: {
        type: "video-no-src",
        fileName: "qi_shi.mp4"
    },
    text: `
    The opening move.
    Go a bit lower, open to the left.
    Raise then lower arms and keep in sync with your legs.
    `,
    title: "起势",
    titleLang: "chinese"
};

export const jingangDaoZhui: Exercise = {
    //jīngāng dào zhuī
    text: `
    <strong class="text-danger">TODO</strong>
    `,
    title: "金刚倒锥",
    titleLang: "chinese"
};

export const baiheLiangChi: Exercise = {
    //báihè liàng chì
    media: {
        type: "video-no-src",
        fileName: "baihe_liang_chi.mp4"
    },
    text: `
    Translates into something like "white crane with bright wings".
    `,
    title: "白鹤亮翅",
    titleLang: "chinese"
};

export const shangSanBu: Exercise = {
    //shàng sān bù
    media: {
        type: "video-no-src",
        fileName: "shang_san_bu.mp4"
    },
    text: `
    Translates into "three steps forward".
    `,
    title: "上三步",
    titleLang: "chinese"
};

export const xieXing: Exercise = {
    //xié xíng
    text: `
    <strong class="text-danger">TODO</strong>
    `,
    title: "斜行",
    titleLang: "chinese"
};

export const yunShou: Exercise = {
    //yún shǒu
    media: {
        type: "video-no-src",
        fileName: "yun_shou.mp4"
    },
    text: `
    Translates into "Cloud hands".
    `,
    title: "云手",
    titleLang: "chinese"
};

export const danBian: Exercise = {
    //dān biān
    media: {
        type: "video-no-src",
        fileName: "dan_bian.mp4"
    },
    text: ``,
    title: "单边",
    titleLang: "chinese"
};

export const taiChiMoves: Exercise[] = [
    qiShi,
    jingangDaoZhui,
    baiheLiangChi,
    shangSanBu,
    xieXing,
    yunShou,
    danBian
];