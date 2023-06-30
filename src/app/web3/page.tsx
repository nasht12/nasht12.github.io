// import ArticleList from "../../components/ArticleList/ArticleList";


export default async function Web3() {
  const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "";
  const res = await fetch(`${apiUrl}/api/articles`);
  const data = await res.json();

  return (
    <>
      <h1 style={{ marginTop: "0.5rem" }}>
        <strong>Web3</strong>
      </h1>
      {/* <ArticleList articles={articles} /> */}
    </>
  );
};
