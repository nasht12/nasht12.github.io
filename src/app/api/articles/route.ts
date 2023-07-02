import { NextResponse } from 'next/server'
import fs from "fs";
import path from "path";

export async function GET() {
    const articlesDirectory = path.join(
      process.cwd(),
      "public",
      "content",
      "articles"
    );
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

    return NextResponse.json({ articles })
}
