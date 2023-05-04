// src/pages/articlesPage.tsx
import { GetServerSideProps } from "next";
import Layout from "../../components/Layout/Layout";
import ArticleList from "../../components/ArticleList/ArticleList";

interface ArticlesPageProps {
  articles: { filename: string; content: string }[];
}

const Web3: React.FC<ArticlesPageProps> = ({ articles }) => {
  return (
    <Layout>
      <h1 style={{ marginTop: "0.5rem" }}><strong>Web3 Writeups</strong></h1>
      <ArticleList articles={articles} />
    </Layout>
  );
};

export default Web3;

// src/pages/articlesPage.tsx
export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "";
    const res = await fetch(`${apiUrl}/api/articles`);
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
