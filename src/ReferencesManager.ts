/**
 * KungFuWiki
 * Copyright (c) 2025-2026 Amir Czwink
 *
 * Licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */
import { createHash } from 'node:crypto';
import { Injectable } from "@aczwink/acts-util-node";
import { ContentEntryDefinitionsCatalog } from "./ContentEntryDefinitionsCatalog";
import { BuildCategoryURL } from "./categories";
import { FindTitles } from "./excersises";
import { ContentPresentationData } from './presentation';

@Injectable
export class ReferencesManager
{
    constructor(private contentEntryDefinitionsCatalog: ContentEntryDefinitionsCatalog)
    {
        this.referenceCount = new Map();
    }

    //Public methods
    public ComputeCrossReferenceId(entryId: string): string
    {
        const hash = createHash('md5').update(entryId).digest('hex');
        return hash;
    }

    public DiscoverReferences(exercise: ContentPresentationData)
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
        const url = BuildCategoryURL(cat) + "#" + this.ComputeCrossReferenceId(id);
        const linkMarkdown = "[" + FindTitles(entry).commonTitle + "](" + url + ")";

        return linkMarkdown;
    }

    public ResolveReferences(exercise: ContentPresentationData): void
    {
        let text = exercise.text;

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
    private FindReferences(exercise: ContentPresentationData)
    {
        const matches = exercise.text.matchAll(/<ref>(.+?)<\/ref>/g);

        if(matches === null)
            return [];

        return [
            ...matches
        ];
    }

    //State
    private referenceCount: Map<string, number>;
}