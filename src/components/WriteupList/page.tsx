import MarkdownRender from "../MarkdownRender/page";
import Link from 'next/link'

interface Project {
  filename: string;
  content: string;
}

interface ProjectListProps {
  projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
    console.log("projects", projects)
    
  return (
    <>
    <ul>
      {projects.map((project, index) => (
        <li key={index}>
          {/* <h3>{project.filename}</h3> */}
          <Link 
          href={{
            pathname: `/projects/${project.filename}`,
            // query: project.content, // the data
          }}>
          <MarkdownRender content ={project.content.trim().split("\n")[0]} />
          </Link>
          {/* <MarkdownRender content = {project.content}/> */}
          <hr />
        </li>
      ))}
    </ul>
    </>
  );
}
