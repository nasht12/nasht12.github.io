import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const articlesDirectory = path.join(process.cwd(), "src", "articles");
    const filenames = fs
      .readdirSync(articlesDirectory)
      .filter((file) => file.endsWith(".md"));

    const articles = filenames.map((filename) => {
      const filePath = path.join(articlesDirectory, filename);
      const content = fs.readFileSync(filePath, "utf8");

      return {
        filename,
        content,
      };
    });

    res.status(200).json({ articles });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching articles" });
  }
}
