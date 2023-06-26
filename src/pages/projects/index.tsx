// src/pages/articlesPage.tsx
import { GetServerSideProps } from "next";
import Layout from "../../components/Layout/Layout";
import ArticleList from "../../components/ArticleList/ArticleList";
import HighwayBanner from "@/components/HighwayBanner/HighwayBanner";

// src/pages/articlesPage.tsx
export const getStaticProps = async () => {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "";
    const res = await fetch(`${apiUrl}/api/projects`);
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


interface ArticlesPageProps {
  projects: { filename: string; content: string }[];
}

const AI: React.FC<ArticlesPageProps> = ({ projects }) => {
  return (
    <Layout>
    <HighwayBanner />
      <h1 style={{ marginTop: "1rem" }}><strong>Projects</strong></h1>
      <ArticleList articles={projects} />
    </Layout>
  );
};

export default AI;

