export const revalidate = 0  // o `export const dynamic = "force-dynamic";`

export default async function Page() {
  const api = process.env.BACKEND_URL;

  const response = await fetch(`${api}/products`, { cache: "no-store" });
  const data = await response.json();

  console.log("DATA:", data);

  return (
    <div>
      <h1>Hola amore ! Te amoo</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
