import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const projectsDirectory = path.join(
      process.cwd(),
      "src",
      "content",
      "projects"
    );
    const filenames = fs
      .readdirSync(projectsDirectory)
      .filter((file) => file.endsWith(".md"));

    const projects = filenames.map((filename) => {
      const filePath = path.join(projectsDirectory, filename);
      const content = fs.readFileSync(filePath, "utf8");

      return {
        filename,
        content,
      };
    });

    res.status(200).json({ projects });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching project writeups" });
  }
}
