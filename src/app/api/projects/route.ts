import { NextResponse } from 'next/server'
import fs from "fs";
import path from "path";

export async function GET() {
    const projectsDirectory = path.join(
      process.cwd(),
      "public",
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

    return NextResponse.json({projects})

}
