import { NextResponse } from 'next/server'
import fs from "fs";
import path from "path";

export async function GET() {
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

    return NextResponse.json({ aiwriteups })
}
