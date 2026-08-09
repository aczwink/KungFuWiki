/**
 * KungFuWiki
 * Copyright (c) 2024-2026 Amir Czwink
 *
 * Licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */
import fs from "fs";
import path from "path";
import { RenderMain } from "../templates/main";
import { categories } from "../content/categories";
import { RenderMainCategory } from "../templates/mainCategory";
import { MainCategory } from "./contentDefinitions";
import { RenderCategory } from "../templates/category";
import { AddReference } from "./references";

function CollectExercises(cat: MainCategory)
{
    for (const subCat of cat.categories)
    {
        for (const exercise of subCat.exercises)
            AddReference(exercise, subCat);
    }
}

async function BuildMainCatStaticSite(cat: MainCategory, outDirPath: string)
{
    const catPath = path.join(outDirPath, cat.name + ".html");
    const content = RenderMain({
        categories,
        pageContent: RenderMainCategory(cat),
        activeCategory: cat
    });
    await fs.promises.writeFile(catPath, content, "utf-8");

    for (const subCat of cat.categories)
    {
        const catPath = path.join(outDirPath, subCat.name + ".html");
        const content = RenderMain({
            categories,
            pageContent: RenderCategory(subCat),
            activeCategory: cat
        });
        await fs.promises.writeFile(catPath, content, "utf-8");
    }
}

async function BuildStaticSite(outDirPath: string)
{
    if(!fs.existsSync(outDirPath))
        await fs.promises.mkdir(outDirPath);

    for (const cat of categories)
        CollectExercises(cat);

    for (const cat of categories)
        await BuildMainCatStaticSite(cat, outDirPath);

    const indexPath = path.join(outDirPath, "index.html");
    const content = RenderMain({
        categories,
        pageContent: RenderMainCategory(categories[0]),
        activeCategory: categories[0]
    });
    await fs.promises.writeFile(indexPath, content, "utf-8");
}

BuildStaticSite("./out");