"use client";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote";
import React from "react";

const MdxContent = ({ content }: { content: MDXRemoteProps }) => {
  const { compiledSource, frontmatter, scope, components, lazy, ...rest } =
    content;
  return (
    <div className="mt-8 prose dark:prose-invert">
      <MDXRemote
        compiledSource={compiledSource}
        components={components}
        scope={scope}
        lazy={lazy}
        frontmatter={frontmatter}
      />
    </div>
  );
};

export default MdxContent;
