import {
  createHighlighter,
  makeSingletonHighlighter,
  ShikiTransformer,
} from "shiki";
import { bundledLanguages } from "shiki/bundle/web";
import { CodeBlockProps } from "../types";
import { h } from "hastscript";
import { transformerNotationHighlight } from "@shikijs/transformers";

const getHighlighter = makeSingletonHighlighter(createHighlighter);

export const codeToHtml = async ({ code, language }: CodeBlockProps) => {
  const highlighter = await getHighlighter({
    themes: ["github-light-high-contrast", "github-dark-high-contrast"],
    langs: [...Object.keys(bundledLanguages), "html"],
  });

  return highlighter.codeToHtml(code, {
    lang: language,
    themes: {
      dark: "github-dark-high-contrast",
      light: "github-light-high-contrast",
    },
    transformers: [addCopyButton(), transformerNotationHighlight()],
  });
};

export function addCopyButton(): ShikiTransformer {
  const toggleMs = 3000;

  return {
    name: "copy-button",
    pre(node) {
      const button = h(
        "button",
        {
          type: "button",
          id: "copy-button",
          class:
            "group/button absolute right-4 top-3.5 overflow-hidden rounded-full py-2 px-3 text-2xs font-medium opacity-0 backdrop-blur transition focus:opacity-100 group-hover:opacity-100 bg-white/5 hover:bg-white/7.5 dark:bg-white/2.5 dark:hover:bg-white/5",
          "data-code": this.source,
          onclick: `
            navigator.clipboard.writeText(this.dataset.code);
            this.classList.add('copied');
            setTimeout(() => this.classList.remove('copied'), ${toggleMs});
          `,
        },
        [
          h(
            "span",
            {
              "aria-hidden": "false",
              class:
                "pointer-events-none flex items-center gap-0.5 text-zinc-600 transition duration-300 ignore-background-color",
              style: "background-color: transparent !important",
            },
            [
              h(
                "svg",
                {
                  viewBox: "0 0 20 20",
                  "aria-hidden": "true",
                  class:
                    "h-5 w-5 fill-zinc-500/20 stroke-zinc-500 transition-colors group-hover/button:stroke-zinc-600",
                },
                [
                  h("path", {
                    "stroke-width": "0",
                    d: "M5.5 13.5v-5a2 2 0 0 1 2-2l.447-.894A2 2 0 0 1 9.737 4.5h.527a2 2 0 0 1 1.789 1.106l.447.894a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2Z",
                  }),
                  h("path", {
                    fill: "none",
                    "stroke-linejoin": "round",
                    d: "M12.5 6.5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2m5 0-.447-.894a2 2 0 0 0-1.79-1.106h-.527a2 2 0 0 0-1.789 1.106L7.5 6.5m5 0-1 1h-3l-1-1",
                  }),
                ],
              ),
              "Copy",
            ],
          ),
          h(
            "span",
            {
              "aria-hidden": "true",
              id: "span-copied",
              style: "background-color: transparent !important",
              class:
                "ignore-color pointer-events-none absolute inset-2.5 top-0 flex items-center gap-0.5 text-sky-700 transition duration-300 translate-y-1.5 opacity-0",
            },
            "Copied!",
          ),
        ],
      );

      node.children.push(button);
    },
  };
}
