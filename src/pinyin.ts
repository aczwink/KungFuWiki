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

const pinyinDict = {
    //3-char compound words
    "爆发力": "bàofālì",
    "二十四": "èrshísì",
    "三十八": "sānshíbā",
    "少林拳": "shàolínquán",
    //2-char compound words
    "白鹤": "báihè",
    "抱拳": "bàoquán",
    "冲床": "chōngchuáng",
    "打挺": "dǎtǐng",
    "蹬腿": "dēngtuǐ",
    "交叉": "jiāochā",
    "加油": "jiāyóu",
    "金刚": "jīngāng",
    "连环": "liánhuán",
    "鲤鱼": "lǐyú",
    "七星": "qīxīng",
    "扇子": "shànzǐ",
    "少林": "shàolín",
    "施礼": "shīlǐ",
    "十三": "shísān",
    "四六": "sìliù",
    "套路": "tàolù",
    "推掌": "tuīzhǎng",
    "旋风": "xuànfēng",
    "旋子": "xuànzǐ",
    //single
    "八": "bā",
    "把": "bǎ",
    "摆": "bǎi",
    "背": "bèi",
    "鞭": "biān",
    "边": "biān",
    "并": "bìng",
    "步": "bù",
    "踩": "cǎi",
    "侧": "cè",
    "翅": "chì",
    "穿": "chuān",
    "刺": "cì",
    "打": "dǎ",
    "大": "dà",
    "单": "dān",
    "弹": "dàn",
    "刀": "dāo",
    "倒": "dào",
    "点": "diǎn",
    "丁": "dīng",
    "段": "duàn",
    "二": "èr",
    "翻": "fān",
    "高": "gāo",
    "弓": "gōng",
    "勾": "gōu",
    "棍": "gùn",
    "合": "hé",
    "洪": "hóng",
    "后": "hòu",
    "换": "huàn",
    "脚": "jiǎo",
    "搅": "jiǎo",
    "剑": "jiàn",
    "击": "jī",
    "筋": "jīn",
    "锦": "jǐn",
    "扣": "kòu",
    "跨": "kuà",
    "拦": "lán",
    "里": "lǐ",
    "礼": "lǐ",
    "力": "lì",
    "亮": "liàng",
    "撩": "liāo",
    "龙": "lóng",
    "馬": "mǎ",
    "眉": "méi",
    "拿": "ná",
    "拍": "pāi",
    "盘": "pán",
    "平": "píng",
    "仆": "pū",
    "齐": "qí",
    "起": "qǐ",
    "前": "qián",
    "枪": "qiāng",
    "拳": "quán",
    "三": "sān",
    "扫": "sǎo",
    "上": "shàng",
    "势": "shì",
    "手": "shǒu",
    "摔": "shuāi",
    "抬": "tái",
    "踢": "tī",
    "挑": "tiāo",
    "通": "tōng",
    "腿": "tuǐ",
    "外": "wài",
    "乌": "wū",
    "膝": "xī",
    "下": "xià",
    "小": "xiǎo",
    "歇": "xiē",
    "斜": "xié",
    "行": "xíng",
    "虚": "xū",
    "压": "yā",
    "腰": "yāo",
    "阴": "yīn",
    "砸": "zá",
    "扎": "zhā",
    "掌": "zhǎng",
    "正": "zhèng",
    "柱": "zhù",
    "锥": "zhuī",
    "走": "zǒu"
};

function TryPinyinizeChars(chars: string)
{
    const mapped = (pinyinDict as any)[chars];
    if(mapped !== undefined)
        return mapped as string;
}

export function Pinyin(chinese: string)
{
    const mapped = [];
    for(let i = 0; i < chinese.length;)
    {
        for(let len = 3; len >= 0; len--)
        {
            if(len === 0)
                throw new Error("no mapping for pinyin: " + chinese + " at " + i + ", i.e. " + chinese.substring(i));

            const part = chinese.substring(i, i + len);
            const mappedPart = TryPinyinizeChars(part);
            if(mappedPart !== undefined)
            {
                mapped.push(mappedPart);
                i += len;
                break;
            }
        }
    }

    return mapped.join(" ");
}