/**
 * KungFuWiki
 * Copyright (C) 2024 Amir Czwink (amir130@hotmail.de)
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

function PinyinChar(char: string)
{
    switch(char)
    {
        case "擺":
            return "bǎi";
        case "爆":
            return "bào";
        case "背":
            return "bèi";
        case "步":
            return "bù";
        case "踩":
            return "cǎi";
        case "冲":
            return "chōng";
        case "床":
            return "chuáng";
        case "大":
            return "dà";
        case "单":
            return "dān";
        case "弹":
            return "dàn";
        case "蹬":
            return "dēng";
        case "二":
            return "èr";
        case "发":
            return "fā";
        case "翻":
            return "fān";
        case "风":
            return "fēng";
        case "弓":
            return "gōng";
        case "棍":
            return "gùn";
        case "合":
            return "hé";
        case "环":
            return "huán";
        case "洪":
            return "hóng";
        case "后":
            return "hòu";
        case "脚":
            return "jiǎo";
        case "力":
            return "lì";
        case "里":
            return "lǐ";
        case "连":
            return "lián";
        case "林":
            return "lín";
        case "六":
            return "liù";
        case "路":
            return "lù";
        case "馬":
            return "mǎ";
        case "眉":
            return "méi";
        case "拍":
            return "pāi";
        case "仆":
            return "pū";
        case "齐":
            return "qí";
        case "七":
            return "qī";
        case "前":
            return "qián";
        case "枪":
            return "qiāng";
        case "拳":
            return "quán";
        case "扫":
            return "sǎo";
        case "少":
            return "shǎo";
        case "手":
            return "shǒu";
        case "四":
            return "sì";
        case "套":
            return "tào";
        case "踢":
            return "tī";
        case "通":
            return "tōng";
        case "腿":
            return "tuǐ";
        case "推":
            return "tuī";
        case "外":
            return "wài";
        case "小":
            return "xiǎo";
        case "星":
            return "xīng";
        case "虚":
            return "xū";
        case "旋":
            return "xuàn";
        case "压":
            return "yā";
        case "腰":
            return "yāo";
        case "阴":
            return "yīn";
        case "掌":
            return "zhǎng";
        case "正":
            return "zhèng";
        case "子":
            return "zǐ";
        default:
            throw new Error("no mapping for pinyin char: " + char);
    }
}

export function Pinyin(chinese: string)
{
    const mapped = [];
    for (const char of chinese)
    {
        mapped.push(PinyinChar(char));
    }

    return mapped.join(" ");
}