import fs from "fs";
import path from "path";
import MarkdownRender from "@/components/MarkdownRender/page";

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const projectsDirectory = path.join(process.cwd(), "public", "content", "ai");
  const filename = params.id;
  const filePath = path.join(projectsDirectory, filename);

  let content = "";

  try {
    content = fs.readFileSync(filePath, "utf8");
  } catch (error) {
    // Handle error if the file doesn't exist or cannot be read
    console.error("Error reading project content:", error);
  }

  return (
    <div>
      <MarkdownRender content= {content} />
    </div>
  );
}
