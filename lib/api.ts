import fs from "fs";
import glob from "glob";
import { join } from "path";
import matter from "gray-matter";

type ContentType = "docs" | "changelog";

const postsDirectory = join(process.cwd(), "content");

export function getPostSlugs(type: ContentType) {
  return glob
    .sync(join(postsDirectory, type, "**/*.md"))
    .map((file) => file.replace(join(postsDirectory, type, "/"), ""));
}

export function getPostByFilename(
  type: ContentType,
  crntFile: string,
  fields: string[] = []
) {
  const realSlug = crntFile.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, type, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items: any = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "content") {
      items[field] = content;
    }

    if (field === "fileName") {
      items[field] = realSlug;
    }

    if (field === "slug") {
      items[field] = data["slug"] || realSlug;
    }

    if (data[field]) {
      if (data[field] instanceof Date) {
        items[field] = (data[field] as Date).toISOString();
      } else {
        items[field] = data[field];
      }
    }
  });

  return items;
}

export function getAllPosts(type: ContentType, fields: string[] = []) {
  const fileNames = getPostSlugs(type);

  const posts = fileNames
    .map((fileName) => getPostByFilename(type, fileName, [...fields, "hidden"]))
    .filter((post) => !post.hidden)
    // sort posts by date in descending order
    .sort((post1, post2) => {
      return (post1 as any)?.date > (post2 as any)?.date ? -1 : 1;
    });

  return posts;
}
