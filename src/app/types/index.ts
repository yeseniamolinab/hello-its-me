export interface PostData {
  title: string;
  date: string;
  [key: string]: any; // Allows extra front matter fields if needed
}

export interface Post {
  slug: string;
  contentHtml: string;
  data: PostData;
}

export interface CodeBlockProps {
  language: string;
  code: string;
  title?: string;
}
