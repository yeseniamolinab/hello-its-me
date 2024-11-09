import { NextRequest } from "next/server";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";

const contentDirectory = path.join(process.cwd(), "src/app/content");

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const slug = searchParams.get("slug");

    const fullPath = path.join(contentDirectory, `${slug}.mdx`);

    if (!fs.existsSync(fullPath)) {
      console.log("File does not exist");
      return (
        new Response(),
        {
          status: 404,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    if (content.trim() === "") {
      return (
        new Response(),
        {
          status: 404,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    return new Response(
      JSON.stringify({
        data,
        content,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  } catch (error) {
    console.error("Error getting post:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: "An unexpected error occurred 😩",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }
}
