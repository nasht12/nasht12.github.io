import ArticleList from "@/components/ArticleList/ArticleList";

export default async function Projects() {
  const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "";
  const res = await fetch(`${apiUrl}/api/projects`);
  const data = await res.json();

  return (
    <>
      <h1 style={{ marginTop: "0.5rem" }}>
        <strong>Projects</strong>
      </h1>
      <ArticleList articles={data} />
    </>
  );
};
