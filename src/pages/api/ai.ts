import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const aiDirectory = path.join(process.cwd(), "public", "content", "ai");
    const filenames = fs
      .readdirSync(aiDirectory)
      .filter((file) => file.endsWith(".md"));

    const aiwriteups = filenames.map((filename) => {
      const filePath = path.join(aiDirectory, filename);
      const content = fs.readFileSync(filePath, "utf8");

      return {
        filename,
        content,
      };
    });

    res.status(200).json({ aiwriteups });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching ai writeups" });
  }
}
