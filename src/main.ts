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
import fs from "fs";
import path from "path";
import { RenderMain } from "../templates/main";
import { welcomePage } from "../templates/welcomePage";
import { categories } from "../content/categories";
import { RenderCategory } from "../templates/category";

async function BuildStaticSite(outDirPath: string)
{
    if(!fs.existsSync(outDirPath))
        await fs.promises.mkdir(outDirPath);

    for (const cat of categories)
    {
        const catPath = path.join(outDirPath, cat.name + ".html");
        const content = RenderMain({
            categories,
            pageContent: RenderCategory(cat),
            activeCategory: cat
        });
        await fs.promises.writeFile(catPath, content, "utf-8");
    }

    const indexPath = path.join(outDirPath, "index.html");
    await fs.promises.writeFile(indexPath, RenderMain({
        activeCategory: undefined,
        categories: categories,
        pageContent: welcomePage
    }), "utf-8");
}

BuildStaticSite("./out");