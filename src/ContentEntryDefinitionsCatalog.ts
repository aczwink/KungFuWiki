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

@Injectable
export class ContentEntryDefinitionsCatalog
{
    //Constructor
    constructor()
    {
        this.catalog = new Map;
        this.lock = new Lock;

        this.EnsureCatalogIsLoaded();
    }

    //Public methods
    public async GetAllDefinitions()
    {
        await this.EnsureCatalogIsLoaded();
        return this.catalog.Values();
    }
    
    public GetEntry(id: string)
    {
        return this.catalog.get(id)!;
    }

    //Private methods
    private async EnsureCatalogIsLoaded()
    {
        if(this.catalog.size > 0)
            return;

        const lock = await this.lock.Lock();

        if(this.catalog.size === 0)
            await this.LoadExcersisesDirectory("../content");

        lock.Release();
    }

    private async LoadExcersisesDirectory(directoryPath: string): Promise<void>
    {
        const children = await fs.promises.readdir(directoryPath, "utf-8");
        for (const child of children)
        {
            const childPath = path.join(directoryPath, child);
            const stats = await fs.promises.stat(childPath);
            if(stats.isDirectory())
            {
                await this.LoadExcersisesDirectory(childPath);
            }
            else if(path.extname(childPath) === ".yml")
            {
                const data = await ReadObjectFile<ContentEntryDefinition>(childPath);
                const parsed = path.parse(child);
                this.catalog.set(parsed.name, data);
            }
        }
    }

    //State
    private catalog: Map<string, ContentEntryDefinition>;
    private lock: Lock;
}