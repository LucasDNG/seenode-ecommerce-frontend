export default async function Page() {
  const response = await fetch("http://localhost:3000/products");
  const data = await response.json();
  console.log(data);

  return (
    <div>
      <h1>Hola amore</h1>
    </div>
  );
}
