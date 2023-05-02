// src/pages/articlesPage.tsx
import { GetServerSideProps } from "next";
import Layout from "../../components/Layout/Layout";
import ArticleList from "../../components/ArticleList/ArticleList";

interface ArticlesPageProps {
  aiwriteups: { filename: string; content: string }[];
}

const AI: React.FC<ArticlesPageProps> = ({ aiwriteups }) => {
  return (
    <Layout>
      <h1 style={{ marginTop: "0.5rem" }}>AI Writeups</h1>
      <ArticleList articles={aiwriteups} />
    </Layout>
  );
};

export default AI;

// src/pages/articlesPage.tsx
export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/ai");
    const data = await res.json();

    return {
      props: {
        aiwriteups: data.aiwriteups || [],
      },
    };
  } catch (error) {
    console.error("Error fetching articles:", error);

    return {
      props: {
        articles: [],
      },
    };
  }
};
