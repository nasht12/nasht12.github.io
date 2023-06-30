import React from "react";
import { GetServerSideProps } from "next";
import fs from "fs";
import path from "path";
import { useRouter } from "next/router";
import matter from "gray-matter";

interface ArticleProps {
  content: string;
  data: {
    title: string;
  };
}

const Article: React.FC<ArticleProps> = ({ content, data }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>{data.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      />
    </>
  );
};

export default Article;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (!params?.slug) {
    return {
      notFound: true,
    };
  }

  const slug = params.slug as string;

  const filePath = path.join(process.cwd(), "src", "articles", `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(fileContent);

  return {
    props: {
      content,
      data,
    },
  };
};
