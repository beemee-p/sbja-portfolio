import fs from "fs";
import path from "path";
import matter from "gray-matter";
import html from "remark-html";
import { remark } from "remark";
import { Portfolio } from "@/app/types";

const postDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postDirectory, fileName);
    const contents = fs.readFileSync(fullPath, "utf8");
    const matterRes = matter(contents);

    const post: Portfolio = {
      id,
      title: matterRes.data.title,
      date: matterRes.data.date,
      thumbnail: matterRes.data.thumbnail,
      skills: matterRes.data.skills,
    };

    return post;
  });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPortfolio(id: string) {
  const fullPath = path.join(postDirectory, `${id}.md`);
  const contents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterRes = matter(contents);
  const processedContent = await remark().use(html).process(matterRes.content);
  const contentHtml = processedContent.toString();

  const blogPostWithHTML: Portfolio & { contentHtml: string } = {
    id,
    title: matterRes.data.title,
    date: matterRes.data.date,
    thumbnail: matterRes.data.thumbnail,
    contentHtml,
    // 새로운 정보
    skills: matterRes.data.skills,
    images: matterRes.data.images,
    videos: matterRes.data.videos,
  };

  return blogPostWithHTML;
}
