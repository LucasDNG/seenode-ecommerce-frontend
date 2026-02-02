
export default async function Page() {
  const api = process.env.BACKEND_URL;

  const response = await fetch(`${api}/products`);
  const data = await response.json();

  console.log("DATA:", data);

  return (
    <div>
      <h1>Hola amore ! Te amoo</h1>

    </div>
  );
}
