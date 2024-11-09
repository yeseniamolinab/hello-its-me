import React from "react";
import { codeToHtml } from "@utils/shiki";

interface CodeBlockProps {
  language: string;
  code: string;
  title: string;
}

const CodeBlock: React.FC<CodeBlockProps> = async ({
  language,
  code,
  title,
}) => {
  const html = await codeToHtml({
    code,
    language,
  });

  return (
    <div className="my-6 overflow-hidden rounded-2xl dark:bg-zinc-900 shadow-md dark:ring-1 bg-white dark:ring-white/10">
      <div className="not-prose">
        <div className="flex min-h-11 flex-wrap items-start gap-x-4 border-b border-zinc-700 bg-zinc-700 px-4 dark:border-zinc-800">
          <h2 className="mr-auto pt-3 text-xs font-semibold text-white">
            {title}
          </h2>
        </div>
        <div className="group dark:bg-white/2.5">
          <div className="relative">
            <div dangerouslySetInnerHTML={{ __html: html }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeBlock;
