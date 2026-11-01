/**
 * KungFuWiki
 * Copyright (c) 2026 Amir Czwink
 *
 * Licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */
import fs from "fs";
import path from "path";
import { Injectable, Lock, ReadObjectFile } from "@aczwink/acts-util-node";
import { ContentEntryDefinition } from "./contentDefinitions";
import { ChineseScriptType, DetectChineseScriptType } from "./chinese";
import { CategoryDefinition } from "./categories";

@Injectable
export class ContentEntryDefinitionsCatalog
{
    //Constructor
    constructor()
    {
        this.catalog = new Map;
        this._categories = [];
        this.lock = new Lock;

        this.EnsureCatalogIsLoaded();
    }

    //Public methods
    public async GetAllDefinitions()
    {
        await this.EnsureCatalogIsLoaded();
        return this.catalog.Entries();
    }

    public async GetCategoryDefinitions()
    {
        await this.EnsureCatalogIsLoaded();
        return this._categories;
    }
    
    public GetEntry(id: string)
    {
        const entry = this.catalog.get(id);
        if(entry === undefined)
            throw new Error("No entry with the following id exists: " + id);
        return entry;
    }

    //Private methods
    private async EnsureCatalogIsLoaded()
    {
        if(this.catalog.size > 0)
            return;

        const lock = await this.lock.Lock();

        if(this.catalog.size === 0)
        {
            const contentDirPath = "../content";
            await this.LoadExcersisesDirectory(contentDirPath, contentDirPath);
        }

        lock.Release();
    }

    private async LoadExcersisesDirectory(directoryPath: string, rootPath: string): Promise<void>
    {
        const children = await fs.promises.readdir(directoryPath, "utf-8");
        for (const child of children)
        {
            const childPath = path.join(directoryPath, child);
            const stats = await fs.promises.stat(childPath);
            if(stats.isDirectory())
            {
                await this.LoadExcersisesDirectory(childPath, rootPath);
            }
            else if((directoryPath === rootPath) && (child === "categories.yml"))
            {
                this._categories = await ReadObjectFile<CategoryDefinition[]>(childPath);
            }
            else if(path.extname(childPath) === ".yml")
            {
                const data = await ReadObjectFile<ContentEntryDefinition>(childPath);
                const parsed = path.parse(path.relative(rootPath, childPath));
                this.ValidateDefinition(data);
                this.catalog.set("/" + parsed.dir + "/" + parsed.name, data);
            }
        }
    }

    private ValidateDefinition(data: ContentEntryDefinition)
    {
        const titles = Array.isArray(data.title) ? data.title : [data.title];
        for (const title of titles)
        {
            if(title["simplified-chinese"] !== undefined)
                this.ValidateIsSimplifiedChinese(title["simplified-chinese"]);
            if(title["traditional-chinese"] !== undefined)   
                this.ValidateIsTraditionalChinese(title["traditional-chinese"]);
        }
    }

    private ValidateIsSimplifiedChinese(text: string)
    {
        const scriptType = DetectChineseScriptType(text);
        const isSimplified = (scriptType === ChineseScriptType.SharedOnly) || (scriptType === ChineseScriptType.Simplified);
        if(!isSimplified)
            throw new Error(`Traditional characters detected in simplified string: "${text}"`);
    }

    private ValidateIsTraditionalChinese(text: string)
    {
        const scriptType = DetectChineseScriptType(text);
        const isTraditional = (scriptType === ChineseScriptType.SharedOnly) || (scriptType === ChineseScriptType.Traditional);
        if(!isTraditional)
            throw new Error(`Simplified characters detected in traditional string: "${text}"`);
    }

    //State
    private catalog: Map<string, ContentEntryDefinition>;
    private _categories: CategoryDefinition[];
    private lock: Lock;
}