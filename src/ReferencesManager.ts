/**
 * KungFuWiki
 * Copyright (c) 2025-2026 Amir Czwink
 *
 * Licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */
import { Injectable } from "@aczwink/acts-util-node";
import { Exercise } from "./contentDefinitions";
import { ContentEntryDefinitionsCatalog } from "./ContentEntryDefinitionsCatalog";
import { BuildCategoryURL } from "./categories";
import { BuildCommonTitle } from "./excersises";

@Injectable
export class ReferencesManager
{
    constructor(private contentEntryDefinitionsCatalog: ContentEntryDefinitionsCatalog)
    {
        this.referenceCount = new Map();
    }

    //Public methods
    public DiscoverReferences(exercise: Exercise)
    {
        const matches = this.FindReferences(exercise);
        for (const match of matches)
        {
            const id = match[1];
            this.contentEntryDefinitionsCatalog.GetEntry(id); //make sure it exists

            const counter = this.referenceCount.get(id) ?? 0;
            this.referenceCount.set(id, counter + 1);   
        }
    }

    public ResolveReference(id: string)
    {
        const entry = this.contentEntryDefinitionsCatalog.GetEntry(id);

        const cat = entry.tags[0] as any;
        const url = BuildCategoryURL(cat); //TODO: fix url
        const linkMarkdown = "[" + BuildCommonTitle(entry) + "](" + url + ")";

        return linkMarkdown;
    }

    public ResolveReferences(exercise: Exercise): void
    {
        let text = (typeof exercise.text === "string") ? exercise.text : exercise.text();

        const matches = this.FindReferences(exercise);
        for (const match of matches)
        {
            const id = match[1];
            const linkMarkdown = this.ResolveReference(id);

            text = text.ReplaceAll(match[0], linkMarkdown);
        }

        exercise.text = text;
    }

    //Private methods
    private FindReferences(exercise: Exercise)
    {
        const text = (typeof exercise.text === "string") ? exercise.text : exercise.text();
        const matches = text.matchAll(/<ref>(.+?)<\/ref>/g);

        if(matches === null)
            return [];

        return [
            ...matches
        ];
    }

    //State
    private referenceCount: Map<string, number>;
}