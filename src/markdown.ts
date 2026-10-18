/**
 * KungFuWiki
 * Copyright (c) 2025-2026 Amir Czwink
 *
 * Licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */
import markdownit from 'markdown-it';
import { ChineseScriptType, DetectChineseScriptType } from './chinese';
import { Pinyin } from './pinyin';

function CreateChineseTextHelpText(chinese: string): string
{
    const scriptType = DetectChineseScriptType(chinese);
    switch(scriptType)
    {
        case ChineseScriptType.SharedOnly:
            return "Chinese: " + chinese;
        case ChineseScriptType.Simplified:
            return "Simplified Chinese: " + chinese;
        case ChineseScriptType.Traditional:
            return "Traditional Chinese: " + chinese;
    }
}

function ChineseTextPlugin(md: markdownit)
{
    md.core.ruler.after("inline", "chinese_text", state => {
        const chineseRegex = /[\p{Script=Han}]+/gu;
    
        for (const blockToken of state.tokens)
        {
            if(!blockToken.children)
                continue;
            
            const newChildren = [];
      
            for (const token of blockToken.children)
            {
                if (token.type !== "text")
                {
                    newChildren.push(token);
                    continue;
                }
        
                let lastIndex = 0;
        
                for (const match of token.content.matchAll(chineseRegex))
                {
                    // Text before the Chinese characters
                    if (match.index > lastIndex)
                    {
                        const text = new state.Token("text", "", 0);
                        text.content = token.content.slice(lastIndex, match.index);
                        newChildren.push(text);
                    }
          
                    // Opening span
                    const open = new state.Token("span_chinese_open", "span", 1);
                    open.attrSet("class", "text-decoration-underline");
                    open.attrSet("style", "text-decoration-style: dotted !important;");
                    open.attrSet("data-bs-toggle", "tooltip");
                    open.attrSet("data-bs-title", CreateChineseTextHelpText(match[0]));
                    newChildren.push(open);
          
                    // Chinese text
                    const chinese = new state.Token("text", "", 0);
                    chinese.content = Pinyin(match[0]);
                    newChildren.push(chinese);
          
                    // Closing span
                    const close = new state.Token("span_chinese_close", "span", -1);
                    newChildren.push(close);
          
                    lastIndex = match.index + match[0].length;
                }
        
                // Remaining text
                if (lastIndex < token.content.length)
                {
                    const text = new state.Token("text", "", 0);
                    text.content = token.content.slice(lastIndex);
                    newChildren.push(text);
                }
            }
      
            blockToken.children = newChildren;
        }
    });
}

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
    md.use(ChineseTextPlugin);
    const result = md.render(withoutPreLineWhitespace);
    return result;
}