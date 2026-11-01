/**
 * KungFuWiki
 * Copyright (c) 2026 Amir Czwink
 *
 * Licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */
import { Of } from "@aczwink/acts-util-core";
import { GlobalInjector } from "@aczwink/acts-util-node";
import { ContentEntryDefinitionsCatalog } from "./ContentEntryDefinitionsCatalog";
import { SelectExcersises } from "./excersises";
import { ContentCategoryPresentationData, MainCategory } from "./presentation";
import { MediaDefinition } from "./media";

interface LeafCategoryDefinition
{
    description?: string;
    displayText: string;
    image?: string;
    selector: string;
}

export interface CategoryDefinition
{
    children: LeafCategoryDefinition[];
    displayText: string;
}

function Cat2Name(category: string)
{
    return category.ReplaceAll("/", "-");
}

export function BuildCategoryURL(category: string)
{
    const cat = Cat2Name(category);
    return "./" + cat + ".html";
}

export function CreateCategory(displayText: string, category: string, description?: string): ContentCategoryPresentationData
{
    return {
        displayText,
        description,
        exercises: SelectExcersises(category),
        name: Cat2Name(category)
    };
}

export async function ReadCategories()
{
    const defs = await GlobalInjector().Resolve(ContentEntryDefinitionsCatalog).GetCategoryDefinitions();
    const cats: MainCategory[] = [];
    for (const def of defs)
    {
        cats.push({
            categories: def.children.Values().Map(x => ({
                displayText: x.displayText,
                exercises: SelectExcersises(x.selector),
                name: Cat2Name(x.selector),
                description: x.description,
                media: (x.image === undefined) ? undefined : Of<MediaDefinition>({
                    type: "image-no-src",
                    fileName: x.image
                })
            })).OrderBy(x => x.displayText).ToArray(),
            displayText: def.displayText,
            name: def.displayText.toLowerCase(),
        });
    }

    return cats;
}