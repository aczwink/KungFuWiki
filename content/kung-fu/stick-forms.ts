/**
 * KungFuWiki
 * Copyright (c) 2024-2026 Amir Czwink
 *
 * Licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */

import { Exercise } from "../../src/contentDefinitions";
import { chenYunLi, huShifu } from "../masters";

export const stickForms: Exercise[] = [
    {
        taughtBy: chenYunLi,
        text: `
        1. Stockform
        <a target="_blank" href="https://www.facebook.com/Shaolin.Kungfu.Institut.eV/videos/yin-shou-gun/504257803580436/">Demonstration von Meister Li</a>
        `,
        title: "阴手棍",
        titleLang: "chinese"
    },
    {
        taughtBy: huShifu,
        text: `
        <strong class="text-danger">TODO</strong>
        `,
        title: "齐眉棍",
        titleLang: "chinese"
    },
    {
        taughtBy: huShifu,
        text: `
        <strong class="text-danger">TODO: Shaolin gun</strong>
        `,
        title: "少林棍",
        titleLang: "chinese"
    },
];