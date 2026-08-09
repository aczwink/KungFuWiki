/**
 * KungFuWiki
 * Copyright (c) 2025-2026 Amir Czwink
 *
 * Licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */
import markdownit from 'markdown-it';

export function RenderMarkdown(markdown: string)
{
    const withoutPreLineWhitespace = markdown.split("\n").map(x => x.trimStart()).join("\n");

    const md = markdownit({
        html: false,
        xhtmlOut: false,
        breaks: false,
        linkify: false,
        typographer: false,
    });
    md.use(require('markdown-it-mark'));
    const result = md.render(withoutPreLineWhitespace);
    return result;
}