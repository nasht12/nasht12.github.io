
export default async function AI() {
  const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "";
  const res = await fetch(`${apiUrl}/api/ai`);
  const data = await res.json();

  return (
    <>
      <h1 style={{ marginTop: "0.5rem" }}>
        <strong>AI Writeups</strong>
      </h1>
    </>
  );
};
