'use client'

import MarkdownRender from "../MarkdownRender/page";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';


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
    <List>
      {projects.map((project, index) => (
        <ListItem  key={index} >
          <Link 
          href={{
            pathname: `${pathname}/${project.filename}`,
            // query: project.content, // the data
          }}
          style={{ textDecoration: 'none', fontSize:'14px', fontWeight: '200' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <ArrowRightIcon />
                <MarkdownRender content ={project.content.trim().split("\n")[0]} />
          </div>
          </Link>
        </ListItem>
      ))}
    </List>
    </>
  );
}
