import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import styles from "./ArticleList.module.css";

interface ArticleListProps {
  articles: { filename: string; content: string }[];
}

const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
  const [visibleContent, setVisibleContent] = useState<string | null>(null);

  const toggleContent = (filename: string) => {
    if (visibleContent === filename) {
      setVisibleContent(null);
    } else {
      setVisibleContent(filename);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        {articles.map((article) => (
          <div key={article.filename}>
            <button
              className={styles.articlebutton}
              onClick={() => toggleContent(article.filename)}
            >
              <div className={styles.dot}></div>
              {/* {article.content.split("\n")[0].substring(1).trim() ||
                "Loading..."} */}
                { article.content.trim().split("\n")[0].slice(2, -2) ||
                "Loading..."}
               
            </button>
          </div>
        ))}
      </div>
      <div className={styles.content}>
        {visibleContent &&
          articles.map((article) => {
            if (article.filename === visibleContent) {
              return (
                <div key={article.filename}>
                  <ReactMarkdown>{article.content}</ReactMarkdown>
                </div>
              );
            }
            return null;
          })}
      </div>
    </div>
  );
};

export default ArticleList;
