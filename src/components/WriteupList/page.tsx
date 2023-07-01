'use client'

import MarkdownRender from "../MarkdownRender/page";
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Project {
  filename: string;
  content: string;
}

interface ProjectListProps {
  projects: Project[];
}

export default function WriteupList({ projects }: ProjectListProps ) {
    const pathname = usePathname()

    console.log('currentPath', pathname);
  return (
    <>
    <ul>
      {projects.map((project, index) => (
        <li key={index}>
          {/* <h3>{project.filename}</h3> */}
          <Link 
          href={{
            pathname: `${pathname}/${project.filename}`,
            // query: project.content, // the data
          }}
          style={{ textDecoration: 'none' }}>
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
