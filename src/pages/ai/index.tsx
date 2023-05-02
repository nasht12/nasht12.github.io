// src/pages/articlesPage.tsx
import { GetServerSideProps } from "next";
import Layout from "../../components/Layout/Layout";
import ArticleList from "../../components/ArticleList/ArticleList";

interface ArticlesPageProps {
  articles: { filename: string; content: string }[];
}

const AI: React.FC<ArticlesPageProps> = ({ articles }) => {
  return (
    <Layout>
      <h1>AI Writeups</h1>
      <ArticleList articles={articles} />
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
        articles: data.articles || [],
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
