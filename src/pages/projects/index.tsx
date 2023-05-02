// src/pages/articlesPage.tsx
import { GetServerSideProps } from "next";
import Layout from "../../components/Layout/Layout";
import ArticleList from "../../components/ArticleList/ArticleList";

interface ArticlesPageProps {
  projects: { filename: string; content: string }[];
}

const AI: React.FC<ArticlesPageProps> = ({ projects }) => {
  return (
    <Layout>
      <h1 style={{ marginTop: "0.5rem" }}>Projects</h1>
      <ArticleList articles={projects} />
    </Layout>
  );
};

export default AI;

// src/pages/articlesPage.tsx
export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/projects");
    const data = await res.json();

    return {
      props: {
        projects: data.projects || [],
      },
    };
  } catch (error) {
    console.error("Error fetching projects:", error);

    return {
      props: {
        projects: [],
      },
    };
  }
};
