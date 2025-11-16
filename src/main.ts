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
import fs from "fs";
import path from "path";
import { RenderMain } from "../templates/main";
import { categories } from "../content/categories";
import { RenderMainCategory } from "../templates/mainCategory";
import { MainCategory } from "./contentDefinitions";
import { RenderCategory } from "../templates/category";
import { AddReference } from "./references";

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
        for (const exercise of subCat.exercises)
            AddReference(exercise, subCat);

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
    {
        await BuildMainCatStaticSite(cat, outDirPath);
    }

    const indexPath = path.join(outDirPath, "index.html");
    const content = RenderMain({
        categories,
        pageContent: RenderMainCategory(categories[0]),
        activeCategory: categories[0]
    });
    await fs.promises.writeFile(indexPath, content, "utf-8");
}

BuildStaticSite("./out");