/**
 * KungFuWiki
 * Copyright (c) 2026 Amir Czwink
 *
 * Licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */

import { ContentCategoryPresentationData } from "./contentDefinitions";
import { ExcersiseCategory, SelectExcersises } from "./excersises";

function Cat2Name(category: ExcersiseCategory)
{
    return category.ReplaceAll("/", "-");
}

export function BuildCategoryURL(category: ExcersiseCategory)
{
    const cat = Cat2Name(category);
    return "./" + cat + ".html";
}

export function CreateCategory(displayText: string, category: ExcersiseCategory, description?: string): ContentCategoryPresentationData
{
    return {
        displayText,
        description,
        exercises: SelectExcersises(category),
        name: Cat2Name(category)
    };
}